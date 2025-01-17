import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice', {
      method: 'GET',
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error('Failed to fetch advice')
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error proxying API:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
