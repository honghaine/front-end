import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = new Set(['/profile', '/schedule', '/where-to-go'])
const loginRoute = ['/sign-in']

const isPublicRoute = (currentPath: string) =>
  loginRoute.some((item) => currentPath.startsWith(item))
export default function middleware(req: NextRequest) {
  const hasToken = req.cookies.get('accessToken')
  const currentPath = req.nextUrl.pathname

  if (hasToken && isPublicRoute(currentPath)) {
    return NextResponse.redirect(new URL('/', req.nextUrl.origin).toString())
  }
}
