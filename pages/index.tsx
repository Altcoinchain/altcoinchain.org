import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Home } from '@/components/pages/home/Home';
import { getLocaleMessagesFromSelectedFiles } from '@/lib/locales';

function HomePage() {
    return <Home />;
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

export default HomePage;
