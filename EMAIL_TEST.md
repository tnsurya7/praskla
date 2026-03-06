# Email Configuration Test Guide

## ✅ Configuration Complete

Your email system is now configured with:
- **Gmail Account:** suryakumar56394@gmail.com
- **App Password:** Configured in `.env.local`
- **Recipient:** suryakumar56394@gmail.com

## 📧 Email Features

When someone fills out the contact form, **TWO emails** are sent:

### 1. Admin Notification Email (to you)
**Sent to:** suryakumar56394@gmail.com

**Features:**
- 🎨 Beautiful gradient header with Praskla branding
- 📋 Contact details in styled cards
- 💬 Full message content
- 🔗 Quick reply button
- 🌈 Dark theme matching website design

### 2. Customer Confirmation Email (to sender)
**Sent to:** Customer's email address

**Features:**
- ✨ Thank you message with gradient styling
- 📞 Your contact information
- ⏰ Response time expectation (24 hours)
- 🔗 Link back to website
- 🌈 Premium dark theme design

## 🧪 Test the Contact Form

1. **Open your browser:** http://localhost:3000/contact

2. **Fill out the form:**
   - Name: Test User
   - Email: your-test-email@gmail.com
   - Phone: +91 98765 43210
   - Message: This is a test message

3. **Click "Send Message"**

4. **Check your inbox:** suryakumar56394@gmail.com
   - You should receive a beautiful HTML email with the contact details

5. **Check sender's inbox:** (if you used a real email)
   - They should receive a thank you confirmation email

## 🎨 Email Template Preview

### Admin Email Includes:
- Gradient header (purple → pink → blue)
- Contact information card
- Message content card
- Reply button
- Professional footer

### Customer Email Includes:
- Welcome message with gradient text
- "What happens next" section
- Your contact information
- Call-to-action button
- Social media links
- Professional footer

## 🔧 Environment Variables

Make sure these are set in `.env.local`:


## 🚀 For Vercel Deployment

Add these environment variables in Vercel Dashboard:

1. Go to: Project Settings → Environment Variables
2. Add each variable (without the password in plain text - use Vercel's secure input)
3. Redeploy the project

## ⚠️ Important Notes

- **Gmail App Password:** Never commit the actual password to Git
- **Rate Limits:** Gmail has sending limits (500 emails/day for free accounts)
- **Spam Folder:** First emails might go to spam - mark as "Not Spam"
- **Testing:** Use a real email address to see the customer confirmation

## 🐛 Troubleshooting

### Email not sending?
1. Check Gmail App Password is correct
2. Verify 2FA is enabled on Gmail account
3. Check server logs for errors
4. Ensure all environment variables are set

### Email goes to spam?
1. Mark first email as "Not Spam"
2. Add sender to contacts
3. Future emails will go to inbox

### Customer not receiving confirmation?
1. Check their spam folder
2. Verify email address is correct
3. Check server logs for delivery errors

## 📱 Test on Mobile

The emails are fully responsive and look great on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop email clients
- 🌐 Web email (Gmail, Outlook, etc.)

---

**Ready to test!** Visit http://localhost:3000/contact and send a test message! 🚀
