// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware will run on every request
export function middleware(req: NextRequest) {
  // Get the URL and cookies from the request
  const { nextUrl: url, cookies } = req;

  // Redirect if user tries to access the checkout without payment completion
  const isPaymentComplete = cookies.get('isPaymentComplete');

  // Check if the user is trying to access the /checkout page
  if (url.pathname.startsWith('/checkout')) {
    // If the payment is not complete, redirect to home page
    if (!isPaymentComplete) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Allow the request to continue if everything is fine
  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout'], // Apply middleware only on the /checkout route
};
