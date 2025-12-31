import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail, sendThankYouEmail } from '@/lib/email'
import { saveFormData } from '@/lib/storage'

const chatSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  message: z.string().min(1, 'Message is required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate data
    const validatedData = chatSchema.parse(body)
    
    // Save to JSON file
    const saveResult = saveFormData('chat', validatedData)
    if (!saveResult.success) {
      console.error('Failed to save chat data:', saveResult.error)
    }
    
    // Respond immediately to user
    const response = NextResponse.json({ success: true, message: 'Message sent successfully' })
    
    // Send emails in background (don't await - fire and forget)
    Promise.all([
      sendEmail('chat', validatedData).catch(error => {
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
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }
    
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

