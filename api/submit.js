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
  
  // Format the form data into a readable HTML table
  let detailsHtml = '<table style="border-collapse: collapse; width: 100%; max-width: 600px;">';
  for (const [key, value] of Object.entries(formData)) {
    // Capitalize key
    const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    detailsHtml += `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 35%;">${formattedKey}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${value || 'N/A'}</td>
      </tr>
    `;
  }
  detailsHtml += '</table>';

  try {
    // 3. Send "New Enquiry" email to Admins
    if (ADMIN_EMAILS.length > 0) {
      await resend.emails.send({
        from: 'Concourse Centre <onboarding@resend.dev>', // You should change this to a verified domain on Resend later
        to: ADMIN_EMAILS,
        subject: `New ${formName} Submission from ${formData.name || formData.firstName}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2563eb;">New ${formName} Submission</h2>
            <p>You have received a new submission. Details are below:</p>
            ${detailsHtml}
          </div>
        `,
      });
    }

    // 4. Send "Thank You" email to the User
    const userEmail = formData.email;
    const userName = formData.name || formData.firstName || 'there';
    
    if (userEmail) {
      await resend.emails.send({
        from: 'Concourse Centre <onboarding@resend.dev>', // You should change this to a verified domain on Resend later
        to: userEmail,
        subject: `Thank you for contacting Concourse Centre`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2563eb;">Thank you, ${userName}!</h2>
            <p>We have successfully received your ${isApply ? 'application' : 'enquiry'}.</p>
            <p>Our team will review your details and get back to you within 2 business days.</p>
            <br/>
            <p><strong>A copy of what you submitted:</strong></p>
            ${detailsHtml}
            <br/>
            <p>Best regards,<br/>The Concourse Centre Team</p>
          </div>
        `,
      });
    }

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email notifications' });
  }
}
