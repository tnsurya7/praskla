// Email template for admin notification
export const getAdminEmailTemplate = (data: {
  name: string
  email: string
  phone: string
  message: string
}) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #050505;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #050505; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(109, 40, 255, 0.3);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #6d28ff, #ff2bd6, #00eaff); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);">
                🚀 New Contact Form Submission
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">
                Praskla Technology
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #ffffff; font-size: 16px; margin: 0 0 30px 0; line-height: 1.6;">
                You have received a new message from your website contact form:
              </p>

              <!-- Contact Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #6d28ff; font-weight: 600; font-size: 14px; width: 100px;">Name:</td>
                        <td style="color: #ffffff; font-size: 14px;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="color: #ff2bd6; font-weight: 600; font-size: 14px;">Email:</td>
                        <td style="color: #ffffff; font-size: 14px;">
                          <a href="mailto:${data.email}" style="color: #00eaff; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #00eaff; font-weight: 600; font-size: 14px;">Phone:</td>
                        <td style="color: #ffffff; font-size: 14px;">
                          <a href="tel:${data.phone}" style="color: #00eaff; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="color: #6d28ff; font-weight: 600; font-size: 14px; margin: 0 0 10px 0;">Message:</p>
                    <p style="color: #e0e0e0; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
                  </td>
                </tr>
              </table>

              <!-- Action Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #6d28ff, #ff2bd6); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 15px rgba(109, 40, 255, 0.4);">
                      Reply to ${data.name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: rgba(255, 255, 255, 0.03); padding: 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
              <p style="color: #888888; font-size: 12px; margin: 0 0 10px 0;">
                This email was sent from your Praskla Technology website contact form
              </p>
              <p style="color: #666666; font-size: 11px; margin: 0;">
                © 2024 Praskla Technology. All rights reserved.
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

// Email template for customer confirmation
export const getCustomerEmailTemplate = (name: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #050505;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #050505; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(109, 40, 255, 0.3);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #6d28ff, #ff2bd6, #00eaff); padding: 50px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);">
                ✨ Thank You!
              </h1>
              <p style="margin: 15px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.95;">
                We've received your message
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #ffffff; font-size: 18px; margin: 0 0 20px 0; font-weight: 600;">
                Hi ${name},
              </p>
              
              <p style="color: #e0e0e0; font-size: 15px; line-height: 1.8; margin: 0 0 20px 0;">
                Thank you for reaching out to <span style="background: linear-gradient(135deg, #6d28ff, #ff2bd6, #00eaff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 600;">Praskla Technology</span>! We're excited to hear from you.
              </p>

              <p style="color: #e0e0e0; font-size: 15px; line-height: 1.8; margin: 0 0 30px 0;">
                Our team has received your message and will get back to you within 24 hours. We're committed to providing you with the best solutions for your technology needs.
              </p>

              <!-- Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(109, 40, 255, 0.1); border-left: 4px solid #6d28ff; border-radius: 8px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="color: #ffffff; font-size: 14px; margin: 0 0 10px 0; font-weight: 600;">
                      💡 What happens next?
                    </p>
                    <ul style="color: #e0e0e0; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
                      <li>Our team reviews your inquiry</li>
                      <li>We'll respond within 24 hours</li>
                      <li>Get personalized solutions for your needs</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 25px;">
                    <p style="color: #ffffff; font-size: 14px; font-weight: 600; margin: 0 0 15px 0;">
                      Need immediate assistance?
                    </p>
                    <table width="100%" cellpadding="5" cellspacing="0">
                      <tr>
                        <td style="color: #888888; font-size: 13px;">📞 Phone:</td>
                        <td style="color: #00eaff; font-size: 13px;">
                          <a href="tel:+919591310740" style="color: #00eaff; text-decoration: none;">+91 95913 10740</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #888888; font-size: 13px;">📧 Email:</td>
                        <td style="color: #00eaff; font-size: 13px;">
                          <a href="mailto:info@prasklatechnology.com" style="color: #00eaff; text-decoration: none;">info@prasklatechnology.com</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #888888; font-size: 13px;">📍 Location:</td>
                        <td style="color: #e0e0e0; font-size: 13px;">Tamil Nadu, India</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://prasklatechnology.com" style="display: inline-block; background: linear-gradient(135deg, #6d28ff, #ff2bd6); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 15px rgba(109, 40, 255, 0.4);">
                      Visit Our Website
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: rgba(255, 255, 255, 0.03); padding: 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
              <p style="color: #ffffff; font-size: 14px; font-weight: 600; margin: 0 0 15px 0;">
                Praskla Technology
              </p>
              <p style="color: #888888; font-size: 12px; margin: 0 0 15px 0;">
                Innovative Solutions Connecting Brands and Customers
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="#" style="display: inline-block; margin: 0 8px; color: #888888; text-decoration: none; font-size: 20px;">🔗</a>
                    <a href="#" style="display: inline-block; margin: 0 8px; color: #888888; text-decoration: none; font-size: 20px;">💼</a>
                    <a href="#" style="display: inline-block; margin: 0 8px; color: #888888; text-decoration: none; font-size: 20px;">🐦</a>
                  </td>
                </tr>
              </table>
              <p style="color: #666666; font-size: 11px; margin: 15px 0 0 0;">
                © 2024 Praskla Technology. All rights reserved.
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
