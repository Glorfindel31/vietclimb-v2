import {ReactNode} from 'react';

import {Montserrat as FontSans} from 'next/font/google';
import {Fjalla_One as FontDecor} from 'next/font/google';
import {cn} from '@/lib/utils';
import '../../globals.css';
import {ThemeProvider} from '@/context/theme-provider';

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const fontDecor = FontDecor({
    weight: ['400'],
    subsets: ['latin', 'vietnamese'],
    variable: '--font-decor',
});

export default function AdminLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en" suppressHydrationWarning>
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
    );
}
