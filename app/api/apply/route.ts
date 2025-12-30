import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail, sendThankYouEmail } from '@/lib/email'
import { saveFormData, saveResumeFile } from '@/lib/storage'

const applySchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  position: z.string().min(1, 'Position is required'),
  location: z.string().min(1, 'Location is required'),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  experience: z.string().min(1, 'Experience is required'),
  education: z.string().min(1, 'Education is required'),
  coverLetter: z.string().optional(),
  resume: z.string().optional(), // Base64 encoded file
  resumeFileName: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate data
    const validatedData = applySchema.parse(body)
    
    // Save resume file if provided
    let savedFileName: string | undefined
    const attachments = []
    if (validatedData.resume && validatedData.resumeFileName) {
      try {
        const resumeBuffer = Buffer.from(validatedData.resume, 'base64')
        
        // Save PDF to uploads folder
        const saveResult = saveResumeFile(validatedData.resumeFileName, resumeBuffer)
        if (saveResult.success && saveResult.filePath) {
          savedFileName = saveResult.filePath
          console.log('Resume saved:', saveResult.filePath)
        } else {
          console.error('Failed to save resume:', saveResult.error)
        }
        
        // Prepare for email attachment
        attachments.push({
          filename: validatedData.resumeFileName,
          content: resumeBuffer,
        })
      } catch (error) {
        console.error('Error processing resume attachment:', error)
      }
    }
    
    // Prepare data with saved file name
    const dataToSave = {
      ...validatedData,
      resume: undefined, // Don't save base64 in JSON
      resumeFileName: savedFileName || validatedData.resumeFileName,
      resumeSaved: !!savedFileName,
    }
    
    // Save to JSON file
    const saveResult = saveFormData('apply', dataToSave)
    if (!saveResult.success) {
      console.error('Failed to save application data:', saveResult.error)
    }
    
    // Respond immediately to user
    const response = NextResponse.json({ success: true, message: 'Application submitted successfully' })
    
    // Send emails in background (don't await - fire and forget)
    const fullName = `${validatedData.firstName} ${validatedData.lastName}`
    Promise.all([
      sendEmail('apply', validatedData, attachments).catch(error => {
        console.error('Background email sending failed:', error)
      }),
      sendThankYouEmail('apply', validatedData.email, fullName).catch(error => {
        console.error('Background thank you email failed:', error)
      })
    ]).catch(error => {
      console.error('Error in background email sending:', error)
    })
    
    return response
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Error in apply API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

