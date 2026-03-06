import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getAdminEmailTemplate, getCustomerEmailTemplate } from '@/lib/emailTemplates'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email to admin (you)
    const adminMailOptions = {
      from: `"Praskla Technology" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL || 'suryakumar56394@gmail.com',
      subject: `🚀 New Contact Form Submission from ${name}`,
      html: getAdminEmailTemplate({ name, email, phone, message }),
      replyTo: email,
    }

    // Email to customer (confirmation)
    const customerMailOptions = {
      from: `"Praskla Technology" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: '✨ Thank You for Contacting Praskla Technology',
      html: getCustomerEmailTemplate(name),
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions),
    ])

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
