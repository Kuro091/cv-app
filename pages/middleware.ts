import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const ContentSecurityPolicy = `
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com;
  `

  const response = NextResponse.next()

  response.headers.set('Content-Security-Policy', ContentSecurityPolicy.replace(/\n/g, ''));
  response.headers.set('X-XSS-Protection', '1; mode=block')

  return response
}
