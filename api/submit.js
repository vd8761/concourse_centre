import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const ADMIN_EMAILS = process.env.ADMIN_EMAILS ? process.env.ADMIN_EMAILS.split(',') : [];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { formType, formData, turnstileToken } = req.body;

  if (!turnstileToken) {
    return res.status(400).json({ error: 'Turnstile token is missing' });
  }

  // 1. Verify Cloudflare Turnstile Token
  try {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(turnstileToken)}`,
    });

    const verifyData = await verifyRes.json();
    
    if (!verifyData.success) {
      return res.status(400).json({ error: 'Human verification failed. Please try again.' });
    }
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return res.status(500).json({ error: 'Error verifying captcha' });
  }

  // 2. Format emails based on formType
  const isApply = formType === 'apply';
  const formName = isApply ? 'Application Form' : 'Contact/Enquiry Form';
  
  // Base styles for the email
  const brandColor = '#2563eb';
  const bgColor = '#f8fafc';
  const cardColor = '#ffffff';
  const textColor = '#334155';

  // Format the form data into a readable HTML table
  let detailsHtml = `
    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-top: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  `;
  for (const [key, value] of Object.entries(formData)) {
    // Capitalize key
    const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    detailsHtml += `
      <tr>
        <td style="padding: 14px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; width: 35%; align: left; font-size: 15px;">${formattedKey}</td>
        <td style="padding: 14px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 15px;">${value || 'N/A'}</td>
      </tr>
    `;
  }
  detailsHtml += '</table>';

  // Professional Email Template Wrapper
  const getEmailTemplate = (title, content) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
      </head>
      <body style="background-color: ${bgColor}; margin: 0; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: ${cardColor}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          <tr>
            <td style="background-color: ${brandColor}; padding: 32px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">Touchmark Concourse Centre</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px; color: ${textColor}; line-height: 1.6; font-size: 16px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="background-color: #f1f5f9; padding: 24px 40px; text-align: center; color: #64748b; font-size: 14px; border-top: 1px solid #e2e8f0;">
              &copy; ${new Date().getFullYear()} Touchmark Concourse Centre. All rights reserved.
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  try {
    // 3. Send "New Enquiry" email to Admins
    if (ADMIN_EMAILS.length > 0) {
      await resend.emails.send({
        from: 'Touchmark Concourse Centre <no-reply@touchmarkdes.com>',
        to: ADMIN_EMAILS,
        subject: `New ${formName} Submission from ${formData.name || formData.firstName}`,
        html: getEmailTemplate(
          `New ${formName} Submission`,
          `
            <h2 style="color: #0f172a; margin-top: 0; font-size: 20px;">New ${formName} Submission</h2>
            <p style="color: #475569;">You have received a new submission on the website. Here are the details:</p>
            ${detailsHtml}
          `
        ),
      });
    }

    // 4. Send "Thank You" email to the User
    const userEmail = formData.email;
    const userName = formData.name || formData.firstName || 'there';
    
    if (userEmail) {
      await resend.emails.send({
        from: 'Touchmark Concourse Centre <no-reply@touchmarkdes.com>',
        to: userEmail,
        subject: `Thank you for contacting Touchmark Concourse Centre`,
        html: getEmailTemplate(
          `Thank you for contacting us`,
          `
            <h2 style="color: #0f172a; margin-top: 0; font-size: 20px;">Hi ${userName},</h2>
            <p style="color: #475569;">Thank you for reaching out to us. We have successfully received your ${isApply ? 'application' : 'enquiry'}.</p>
            <p style="color: #475569;">Our team will review your details and get back to you within 2 business days.</p>
            
            <div style="margin-top: 32px; padding-top: 32px; border-top: 2px dashed #e2e8f0;">
              <p style="margin: 0; font-weight: 600; color: #0f172a; font-size: 18px;">A copy of your submission:</p>
              ${detailsHtml}
            </div>
            
            <p style="margin-top: 40px; color: #475569;">
              Best regards,<br/>
              <strong style="color: #0f172a;">The Touchmark Concourse Centre Team</strong>
            </p>
          `
        ),
      });
    }

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email notifications' });
  }
}
