import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const params = new URLSearchParams(body)

    const name = params.get('name') || ''
    const phone = params.get('phone') || ''
    const email = params.get('email') || ''

    // Log the submission
    console.log('New registration:', { name, phone, email })

    // Redirect to thank-you page
    return new Response(null, {
      status: 303,
      headers: {
        Location: '/thank-you.html',
      },
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return new Response(null, {
      status: 303,
      headers: {
        Location: '/?error=1',
      },
    })
  }
}