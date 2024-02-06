import type {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {authIn} from '@/lib/auth';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: 'Username', type: 'text', placeholder: 'username'},
                password: {label: 'Password', type: 'password', placeholder: '********'},
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) return null;
                try {
                    const user = await authIn(credentials.username, credentials.password);
                    return user;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({token, user}) {
            if (user) {
                token.role = user.role;
                token.name = user.name;
            }
            return token;
        },
        async session({session, token}) {
            if (session?.user) {
                session.user.role = token.role;
                session.user.name = token.name;
            }
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
    },
};
