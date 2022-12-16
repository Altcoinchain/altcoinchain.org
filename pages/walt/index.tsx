import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getLocaleMessagesFromSelectedFiles } from '@/lib/locales';
import { Walt } from '@/components/pages/walt/Walt';

function AltPage() {
    return (
        <>
            <Head>
                <title>Altcoinchain | ALT</title>
                <meta
                    name="description"
                    content="Altcoinchain | ALT - All things ALT"
                />
            </Head>
            <Walt />
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const locale = context.locale || context.defaultLocale;
    const i18nMessages = await getLocaleMessagesFromSelectedFiles(locale, [
        'home',
    ]);

    return {
        props: {
            i18nMessages,
        },
    };
};

export default AltPage;
