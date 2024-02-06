import {User} from 'next-auth';
// import {prisma} from '@/utils/prisma';

// import {compare} from 'bcrypt';

type SignInFn = (username: string, password: string) => Promise<User | null>;

export const authIn: SignInFn = async (username, password) => {
    const admin = {
        id: '1',
        username: 'admin',
        email: 'cedric31flo@gmail.com',
        role: 'admin',
        password: '12345678',
    };
    const user = admin;
    if (user && admin.password === password && admin.username === username) {
        user.password = '';
        return new Promise((resolve, reject) => {
            resolve({
                ...user,
                name: user.username,
            });
        });
    } else throw new Error('Invalid username or password');
};
