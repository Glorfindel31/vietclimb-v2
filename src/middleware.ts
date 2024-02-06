import {i18nRouter} from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import {withAuth, NextRequestWithAuth} from 'next-auth/middleware';
import {NextResponse} from 'next/server';

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        if (!request.nextUrl.pathname.startsWith('/admin'))
            return i18nRouter(request, i18nConfig);
    },
    {
        callbacks: {
            authorized: ({token}) => !!token,
        },
    },
);
export const config = {
    matcher: ['/admin'],
};
