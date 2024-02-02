import NavigationBarLeft from '@components/NavigationBarLeft';
import NavigationBarRight from '@components/NavigationBarRight';
import {NavigationBarProps} from '@/types/navBarTypes';
import TranslationsProvider from '@/context/language-provider';
import initTranslations from '@/i18n';

const i18nNamespaces = ['navBar', 'navBarSelect'];

export function filterResourcesByLocale(
    resources: any,
    locale: string,
): NavigationBarProps[] {
    if (resources[locale] && resources[locale].navBar) {
        const navBarValues = Object.values(resources[locale].navBar);
        const flattenedNavBar = navBarValues.flat() as NavigationBarProps[];
        return flattenedNavBar;
    } else {
        return [];
    }
}

export default async function NavigationBar({
    params: {locale},
}: {
    params: {locale: string};
}) {
    const {resources} = await initTranslations(locale, i18nNamespaces);
    const filteredResources = filterResourcesByLocale(resources, locale);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <div className="flex flex-row items-center justify-between min-w-full bg-background px-4 mx-auto fixed top-0 left-0 z-50">
                <NavigationBarLeft params={{locale}} />
                <NavigationBarRight data={filteredResources} />
            </div>
        </TranslationsProvider>
    );
}
