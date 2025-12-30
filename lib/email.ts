import nodemailer from 'nodemailer'
import { getEmailTemplate, getThankYouEmailTemplate } from './email-templates'
import fs from 'fs'
import path from 'path'

// Load formularios.json
function getFormConfig(formType: string) {
  try {
    const configPath = path.join(process.cwd(), 'formularios.json')
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    return config[formType] || {
      to: process.env.CONTACT_EMAIL || 'admin@vanguardkids.com',
      subject: 'New Form Submission',
      replyTo: true
    }
  } catch (error) {
    console.error('Error loading formularios.json:', error)
    return {
      to: process.env.CONTACT_EMAIL || 'admin@vanguardkids.com',
      subject: 'New Form Submission',
      replyTo: true
    }
  }
}

// Create transporter
function createTransporter() {
  // Validate required environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP configuration is missing. Please check your environment variables.')
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function sendEmail(
  formType: 'contact' | 'apply' | 'chat',
  data: any,
  attachments?: Array<{ filename: string; content: Buffer }>
) {
  try {
    const config = getFormConfig(formType)
    
    // Validate SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration missing:', {
        hasHost: !!process.env.SMTP_HOST,
        hasUser: !!process.env.SMTP_USER,
        hasPass: !!process.env.SMTP_PASS,
      })
      return { 
        success: false, 
        error: 'Email service is not configured. Please check your environment variables.' 
      }
    }

    const transporter = createTransporter()
    
    // Support both string and array for 'to' field
    const toEmails = Array.isArray(config.to) ? config.to : [config.to]
    
    const mailOptions = {
      from: `"VANGUARD KIDS" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toEmails.join(', '), // Nodemailer accepts comma-separated string or array
      subject: config.subject,
      html: getEmailTemplate(formType, data),
      replyTo: config.replyTo && data.email ? data.email : undefined,
      attachments: attachments || [],
    }

    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Full error details:', error)
    return { success: false, error: errorMessage }
  }
}

export async function sendThankYouEmail(
  formType: 'contact' | 'apply',
  to: string,
  name: string
) {
  try {
    // Validate SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration missing for thank you email')
      return { 
        success: false, 
        error: 'Email service is not configured.' 
      }
    }

    const transporter = createTransporter()
    
    const mailOptions = {
      from: `"VANGUARD KIDS" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: to,
      subject: formType === 'contact' 
        ? 'Thank You for Contacting Vanguard Kids' 
        : 'Thank You for Your Application - Vanguard Kids',
      html: getThankYouEmailTemplate(formType, name),
    }

    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Error sending thank you email:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

