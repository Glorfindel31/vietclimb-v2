import TranslationsProvider from '@/context/language-provider';
import initTranslations from '@/i18n';
import {Container} from '@/components/ui/container';
import {Button} from '@/components/ui/button';
import {Section} from '@/components/ui/section';
import {LargeTitle} from '@/components/typography/titles';

const i18nNamespaces = ['Home'];
export default async function Home({params: {locale}}: {params: {locale: string}}) {
    const {t, resources} = await initTranslations(locale, i18nNamespaces);
    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <Container className="border-2 border-solid border-red">
                <Section>
                    <LargeTitle>Welcome to your new home</LargeTitle>
                    <Button className=" max-w-fit">First time climbing?</Button>
                </Section>
            </Container>
        </TranslationsProvider>
    );
}
