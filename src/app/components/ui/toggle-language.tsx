'use client';

import {useRouter} from 'next/navigation';
import {usePathname} from 'next/navigation';
import {useTranslation} from 'react-i18next';
import i18nConfig from '@/../../i18nConfig';

import {Button} from '@components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';

export default function ToggleLanguage({params: {locale}}: {params: {locale: string}}) {
    const {t, i18n} = useTranslation('navBarSelect');

    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (newLocale: string) => {
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

        // redirect to the new locale path
        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        }

        router.refresh();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="uppercase">
                    {locale}
                    <span className="sr-only">{t('accessibility')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleChange('en')}>
                    {t('langEn')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleChange('vn')}>
                    {t('langVn')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
