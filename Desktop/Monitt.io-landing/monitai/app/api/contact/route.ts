import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log('[contact form]', body)
  return NextResponse.json({ ok: true }, { status: 200 })
}
