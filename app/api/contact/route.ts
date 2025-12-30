import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail, sendThankYouEmail } from '@/lib/email'
import { saveFormData } from '@/lib/storage'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  location: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate data
    const validatedData = contactSchema.parse(body)
    
    // Save to JSON file
    const saveResult = saveFormData('contact', validatedData)
    if (!saveResult.success) {
      console.error('Failed to save contact form data:', saveResult.error)
    }
    
    // Respond immediately to user
    const response = NextResponse.json({ success: true, message: 'Message sent successfully' })
    
    // Send emails in background (don't await - fire and forget)
    Promise.all([
      sendEmail('contact', validatedData).catch(error => {
        console.error('Background email sending failed:', error)
      }),
      sendThankYouEmail('contact', validatedData.email, validatedData.name).catch(error => {
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
    
    console.error('Error in contact API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

