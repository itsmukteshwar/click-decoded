// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { COMPANY } from '@/lib/constants'
import type { ContactFormData } from '@/types'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json()
    const { name, email, phone, company, service, message } = body

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Send email via Resend
    await resend.emails.send({
      from:    `${COMPANY.name} Contact <onboarding@resend.dev>`,
      to:      process.env.CONTACT_TO_EMAIL ?? COMPANY.email,
      replyTo: email,
      subject: `New lead: ${service} — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone ?? '—'}</td></tr>
          <tr><td><strong>Company</strong></td><td>${company ?? '—'}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact/route]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
