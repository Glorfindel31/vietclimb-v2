import {i18nRouter} from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import {NextRequest} from 'next/server';
export {default} from 'next-auth/middleware';

export function middleware(request: NextRequest) {
    return i18nRouter(request, i18nConfig);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico).*)',
        // Optional: only run on root (/) URL
        // '/'
        '/admin',
    ],
};
