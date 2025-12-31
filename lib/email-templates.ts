import fs from 'fs'
import path from 'path'

// Function to get logo as base64
function getLogoBase64(): string {
  try {
    const logoPath = path.join(process.cwd(), 'public', 'logo.png')
    if (fs.existsSync(logoPath)) {
      const logoBuffer = fs.readFileSync(logoPath)
      const logoBase64 = logoBuffer.toString('base64')
      return `data:image/png;base64,${logoBase64}`
    }
  } catch (error) {
    console.error('Error reading logo file:', error)
  }
  // Fallback to URL if file not found
  return `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vanguardkids.com'}/logo.png`
}

export function getEmailTemplate(type: 'contact' | 'apply' | 'chat', data: any): string {
  const logoUrl = getLogoBase64()
  
  if (type === 'contact') {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #f0f9ff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 24px 20px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -30px; right: -30px; width: 120px; height: 120px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -20px; left: -20px; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: relative; z-index: 1;">
                <img src="${logoUrl}" alt="Vanguard Kids" style="max-width: 70px; height: auto; margin-bottom: 12px; filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));" />
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);">📧 New Contact Form Submission</h1>
              </div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #1e40af; font-size: 16px; margin: 0 0 20px 0; font-weight: 600;">You have received a new message from the contact form:</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">👤 Name:</strong>
                        </td>
                        <td>
                          <span style="color: #334155; font-size: 14px;">${data.name || 'N/A'}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📧 Email:</strong>
                        </td>
                        <td>
                          <a href="mailto:${data.email || ''}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${data.email || 'N/A'}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📞 Phone:</strong>
                        </td>
                        <td>
                          <a href="tel:${data.phone ? data.phone.replace(/\D/g, '') : ''}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${data.phone || 'N/A'}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${data.location ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📍 Location:</strong>
                        </td>
                        <td>
                          <span style="color: #334155; font-size: 14px;">${data.location}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
                ${data.subject ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📋 Subject:</strong>
                        </td>
                        <td>
                          <span style="color: #334155; font-size: 14px;">${data.subject}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 16px 0 0 0;">
                    <strong style="color: #1e40af; font-size: 14px; display: block; margin-bottom: 8px;">💬 Message:</strong>
                    <div style="padding: 16px; background-color: #ffffff; border-left: 4px solid #3b82f6; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                      <p style="color: #475569; margin: 0; line-height: 1.7; white-space: pre-wrap; font-size: 14px;">${data.message || 'N/A'}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px; text-align: center; border-top: 2px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 12px 0; line-height: 1.6;">
                This email was sent from the Vanguard Kids website contact form.
              </p>
              <p style="color: #1e40af; font-size: 13px; margin: 0; font-weight: 600;">
                💡 Tip: Reply directly to this email to respond to the sender.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
  } else if (type === 'apply') {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Job Application</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #f0f9ff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 24px 20px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -30px; right: -30px; width: 120px; height: 120px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -20px; left: -20px; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: relative; z-index: 1;">
                <img src="${logoUrl}" alt="Vanguard Kids" style="max-width: 70px; height: auto; margin-bottom: 12px; filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));" />
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);">💼 New Job Application</h1>
              </div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #1e40af; font-size: 16px; margin: 0 0 20px 0; font-weight: 600;">A new job application has been submitted:</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">👤 Name:</strong>
                        </td>
                        <td>
                          <span style="color: #334155; font-size: 14px;">${data.firstName || ''} ${data.lastName || ''}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📧 Email:</strong>
                        </td>
                        <td>
                          <a href="mailto:${data.email || ''}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${data.email || 'N/A'}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📞 Phone:</strong>
                        </td>
                        <td>
                          <a href="tel:${data.phone ? data.phone.replace(/\D/g, '') : ''}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${data.phone || 'N/A'}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">💼 Position:</strong>
                        </td>
                        <td>
                          <span style="color: #334155; font-size: 14px;">${data.position || 'N/A'}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📍 Location:</strong>
                        </td>
                        <td>
                          <span style="color: #334155; font-size: 14px;">${data.location || 'N/A'}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${data.address || data.city ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">🏠 Address:</strong>
                        </td>
                        <td>
                          <span style="color: #334155; font-size: 14px;">${data.address || ''}${data.city ? `, ${data.city}` : ''}${data.state ? `, ${data.state}` : ''}${data.zipCode ? ` ${data.zipCode}` : ''}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 16px 0 0 0;">
                    <strong style="color: #1e40af; font-size: 14px; display: block; margin-bottom: 8px;">🎓 Education:</strong>
                    <div style="padding: 16px; background-color: #ffffff; border-left: 4px solid #3b82f6; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                      <p style="color: #475569; margin: 0; line-height: 1.7; white-space: pre-wrap; font-size: 14px;">${data.education || 'N/A'}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0 0 0;">
                    <strong style="color: #1e40af; font-size: 14px; display: block; margin-bottom: 8px;">💼 Experience:</strong>
                    <div style="padding: 16px; background-color: #ffffff; border-left: 4px solid #3b82f6; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                      <p style="color: #475569; margin: 0; line-height: 1.7; white-space: pre-wrap; font-size: 14px;">${data.experience || 'N/A'}</p>
                    </div>
                  </td>
                </tr>
                ${data.coverLetter ? `
                <tr>
                  <td style="padding: 16px 0 0 0;">
                    <strong style="color: #1e40af; font-size: 14px; display: block; margin-bottom: 8px;">📝 Cover Letter:</strong>
                    <div style="padding: 16px; background-color: #ffffff; border-left: 4px solid #3b82f6; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                      <p style="color: #475569; margin: 0; line-height: 1.7; white-space: pre-wrap; font-size: 14px;">${data.coverLetter}</p>
                    </div>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0 0 0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📎 Resume:</strong>
                        </td>
                        <td>
                          <span style="color: #334155; font-size: 14px; font-weight: 600;">${data.resumeFileName || 'Attached'}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px; text-align: center; border-top: 2px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 12px 0; line-height: 1.6;">
                This email was sent from the Vanguard Kids website job application form.
              </p>
              <p style="color: #1e40af; font-size: 13px; margin: 0; font-weight: 600;">
                💡 Tip: Reply directly to this email to respond to the applicant.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
  } else if (type === 'chat') {
    // Format phone for WhatsApp
    const formatPhoneForWhatsApp = (phone: string): string => {
      if (!phone) return '';
      // Remove all non-digit characters
      const cleanPhone = phone.replace(/\D/g, '');
      // If phone has 10 digits, assume USA (+1)
      if (cleanPhone.length === 10) {
        return `1${cleanPhone}`;
      }
      // If it starts with 1 and has 11 digits, use as is
      if (cleanPhone.startsWith('1') && cleanPhone.length === 11) {
        return cleanPhone;
      }
      // If it has country code already (starts with other numbers), use as is
      if (cleanPhone.length > 10) {
        return cleanPhone;
      }
      // Otherwise return cleaned phone
      return cleanPhone;
    }
    
    const phoneNumber = data.phone ? formatPhoneForWhatsApp(data.phone) : '';
    const whatsappMessage = `Hello ${data.name || ''}, thank you for contacting Vanguard Kids. How can we help you?`;
    const whatsappUrl = phoneNumber ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}` : '';
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Chat Message</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #f0f9ff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 24px 20px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -30px; right: -30px; width: 120px; height: 120px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -20px; left: -20px; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: relative; z-index: 1;">
                <img src="${logoUrl}" alt="Vanguard Kids" style="max-width: 70px; height: auto; margin-bottom: 12px; filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));" />
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);">💬 New Chat Message</h1>
              </div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #1e40af; font-size: 16px; margin: 0 0 20px 0; font-weight: 600;">You have received a new message from the chat widget:</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">👤 Name:</strong>
                        </td>
                        <td>
                          <span style="color: #334155; font-size: 14px;">${data.name || 'N/A'}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📧 Email:</strong>
                        </td>
                        <td>
                          <a href="mailto:${data.email || ''}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${data.email || 'N/A'}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="padding-right: 12px;">
                          <strong style="color: #1e40af; font-size: 14px;">📞 Phone:</strong>
                        </td>
                        <td>
                          <a href="tel:${data.phone ? data.phone.replace(/\D/g, '') : ''}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${data.phone || 'N/A'}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0 0 0;">
                    <strong style="color: #1e40af; font-size: 14px; display: block; margin-bottom: 8px;">💬 Message:</strong>
                    <div style="padding: 16px; background-color: #ffffff; border-left: 4px solid #3b82f6; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                      <p style="color: #475569; margin: 0; line-height: 1.7; white-space: pre-wrap; font-size: 14px;">${data.message || 'N/A'}</p>
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- Quick Action Buttons -->
              <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-left: 4px solid #3b82f6; padding: 24px; border-radius: 8px; margin-top: 24px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                <p style="color: #1e40af; margin: 0 0 16px 0; font-size: 15px; font-weight: 700; text-align: center;">💡 Quick Actions - Respond to ${data.name || 'the sender'}:</p>
                
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 12px;">
                  <tr>
                    <td align="center" style="padding-bottom: 12px;">
                      <a href="mailto:${data.email || ''}?subject=Re: Your inquiry from Vanguard Kids" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3); transition: all 0.3s ease;">
                        📧 Reply by Email
                      </a>
                    </td>
                  </tr>
                  ${phoneNumber ? `
                  <tr>
                    <td align="center">
                      <a href="${whatsappUrl}" style="display: inline-block; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(37, 211, 102, 0.3); transition: all 0.3s ease;">
                        💬 Reply by WhatsApp
                      </a>
                    </td>
                  </tr>
                  ` : ''}
                </table>
                
                <p style="color: #64748b; margin: 12px 0 0 0; font-size: 13px; line-height: 1.5; text-align: center;">
                  You can also reply directly to this email. The reply-to address is automatically set to <strong>${data.email || 'the sender'}</strong>.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px; text-align: center; border-top: 2px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 12px 0; line-height: 1.6;">
                This email was sent from the Vanguard Kids website chat widget.
              </p>
              <p style="color: #1e40af; font-size: 13px; margin: 0; font-weight: 600;">
                💡 Tip: Reply directly to this email to respond to the sender.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
  }
  return ''
}

export function getThankYouEmailTemplate(type: 'contact' | 'apply', name: string): string {
  const logoUrl = getLogoBase64()
  
  if (type === 'contact') {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #f0f9ff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 24px 20px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -30px; right: -30px; width: 120px; height: 120px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -20px; left: -20px; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: relative; z-index: 1;">
                <img src="${logoUrl}" alt="Vanguard Kids" style="max-width: 70px; height: auto; margin-bottom: 12px; filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));" />
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);">✨ Thank You for Contacting Us!</h1>
              </div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #1e40af; font-size: 18px; margin: 0 0 24px 0; font-weight: 600;">Dear ${name},</p>
              
              <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
                <p style="color: #475569; font-size: 16px; line-height: 1.7; margin: 0;">
                  Thank you for reaching out to <strong style="color: #1e40af;">Vanguard Kids</strong>! We have received your message and truly appreciate you taking the time to contact us.
                </p>
              </div>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.7; margin: 0 0 20px 0;">
                Our team will review your inquiry and get back to you as soon as possible, typically within <strong style="color: #1e40af;">1-2 business days</strong>. We're here to help answer any questions you may have about our programs, schedule a tour, or provide any additional information you need.
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.7; margin: 0 0 20px 0;">
                In the meantime, feel free to explore our website to learn more about our early childhood education programs and what makes Vanguard Kids special.
              </p>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 24px; border: 1px solid #e2e8f0;">
                <p style="color: #1e40af; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">🌟 We look forward to connecting with you soon!</p>
                <p style="color: #64748b; font-size: 14px; margin: 0;">If you have any urgent questions, please don't hesitate to call us directly.</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #1e40af; font-size: 16px; font-weight: 600; margin: 0 0 10px 0;">Vanguard Kids</p>
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                Preschool & Academy<br>
                Building futures, one child at a time
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
  } else {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Application</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #f0f9ff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 24px 20px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -30px; right: -30px; width: 120px; height: 120px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -20px; left: -20px; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: relative; z-index: 1;">
                <img src="${logoUrl}" alt="Vanguard Kids" style="max-width: 70px; height: auto; margin-bottom: 12px; filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));" />
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);">✨ Thank You for Your Application!</h1>
              </div>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #1e40af; font-size: 18px; margin: 0 0 24px 0; font-weight: 600;">Dear ${name},</p>
              
              <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
                <p style="color: #475569; font-size: 16px; line-height: 1.7; margin: 0;">
                  Thank you for your interest in joining the <strong style="color: #1e40af;">Vanguard Kids</strong> team! We have successfully received your job application and truly appreciate you taking the time to apply.
                </p>
              </div>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.7; margin: 0 0 20px 0;">
                Our hiring team will carefully review your qualifications and experience. If your profile matches our requirements, we'll contact you to schedule an interview. We typically respond to applications within <strong style="color: #1e40af;">1-2 weeks</strong>.
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.7; margin: 0 0 20px 0;">
                We're excited about the possibility of you joining our passionate team of educators who are dedicated to making a difference in children's lives.
              </p>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 24px; border: 1px solid #e2e8f0;">
                <p style="color: #1e40af; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">💼 Next Steps:</p>
                <p style="color: #64748b; font-size: 14px; margin: 0; line-height: 1.6;">
                  If you have any questions about the application process, please don't hesitate to contact us. We're here to help!
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #1e40af; font-size: 16px; font-weight: 600; margin: 0 0 10px 0;">Vanguard Kids</p>
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                Preschool & Academy<br>
                Building futures, one child at a time
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
  }
}

