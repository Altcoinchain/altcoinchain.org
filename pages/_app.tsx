import { ReactElement } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Hydrate } from '@tanstack/react-query';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NextProgressBar from '@/components/atoms/NextProgressBar';
import AltcoinProviders from '@/components/providers/AltcoinProviders';
import { PageLayout } from '@/components/layouts/page-layout/PageLayout';
import { PageProps } from '@/common/interfaces';

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps<PageProps>): ReactElement {
    return (
        <>
            <Head>
                <title>Altcoinchain</title>
                <meta
                    name="description"
                    content="Altcoinchain - a Fair, Permissionless POW Layer 1 Blockchain"
                />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <AltcoinProviders pageProps={pageProps}>
                <NextProgressBar />
                <Hydrate state={pageProps.dehydratedState}>
                    <PageLayout>
                        <Component {...pageProps} />
                    </PageLayout>
                </Hydrate>
            </AltcoinProviders>
        </>
    );
}

export default App;
