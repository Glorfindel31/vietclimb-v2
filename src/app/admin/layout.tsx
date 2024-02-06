import type {Metadata} from 'next';
import {ReactNode} from 'react';
import {dir} from 'i18next';
import {Montserrat as FontSans} from 'next/font/google';
import {Fjalla_One as FontDecor} from 'next/font/google';
import {cn} from '@/lib/utils';
import '../globals.css';
import {ThemeProvider} from '@/context/theme-provider';
import {ClerkProvider} from '@clerk/nextjs';

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const fontDecor = FontDecor({
    weight: ['400'],
    subsets: ['latin', 'vietnamese'],
    variable: '--font-decor',
});

export const metadata: Metadata = {
    title: 'Welcome at Vietclimb',
    description: 'Vietclimb is the first climbing gym in Vietnam',
};

export default function AdminLayout({
    children,
    params: {locale},
}: {
    children: ReactNode;
    params: {locale: string};
}) {
    return (
        <ClerkProvider>
            <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
                <body
                    className={cn(
                        'min-h-screen bg-background font-sans antialiased w-full',
                        fontSans.variable,
                        fontDecor.variable,
                    )}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
