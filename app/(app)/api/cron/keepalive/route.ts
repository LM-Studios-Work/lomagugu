import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    // Lightweight query on properties to keep Supabase PostgreSQL active
    const count = await payload.count({
      collection: 'properties',
    })

    return NextResponse.json({
      status: 'ok',
      message: 'Supabase database keepalive ping successful',
      propertiesCount: count.totalDocs,
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error('Keepalive cron error:', error)
    return NextResponse.json(
      {
        status: 'error',
        message: error.message || 'Database query failed',
      },
      { status: 500 }
    )
  }
}
