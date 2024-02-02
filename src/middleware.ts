import {NextRequest, NextResponse} from 'next/server';
import {match} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['vn', 'en'];
export let defaultLocale = 'en'; //need to change for deployment

function getLocale(request: Request): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language');
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'));
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({headers: headersObject}).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
