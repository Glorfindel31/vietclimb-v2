import type {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    type: 'text',
                    label: 'Username',
                    placeholder: 'Username',
                },
                password: {
                    type: 'password',
                    label: 'Password',
                    placeholder: 'Password',
                },
            },
            async authorize(credentials) {
                const user = {id: '01', name: 'admin', password: '12345678'};
                if (
                    credentials?.username === user.name &&
                    credentials?.password === user.password
                ) {
                    return user;
                } else return null;
            },
        }),
    ],
};
