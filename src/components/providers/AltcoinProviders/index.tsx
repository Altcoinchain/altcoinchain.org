import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {WagmiConfig, createClient, configureChains, chain, Chain} from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { IntlProvider } from 'react-intl';
import { AuthProvider } from './Auth';
import { GlobalStyle } from '@/common/styles/global';
import { DEFAULT_LOCALE } from '@/common/constants';
import { PageProps } from '@/common/interfaces';


const altcoinChain: Chain = {
    id: 2330,
    name: 'Altcoin chain',
    network: 'altcoinchain',
    nativeCurrency: {
        decimals: 18,
        name: 'Altcoin',
        symbol: 'ALT',
    },
    rpcUrls: {
        default: 'http://154.12.237.243:8547',
    },
    blockExplorers: {
        default: { name: 'expedition altcoin', url: 'http://expedition.altcoinchain.org/' },
    },
    testnet: false,
}

const client = createClient(
    getDefaultClient({
        appName: 'Altcoin',
        chains: [altcoinChain],
        autoConnect: false,
    })
);

type ProvidersProps = {
    children: ReactNode;
    pageProps: PageProps;
};

const AltcoinProviders = ({ children, pageProps }: ProvidersProps) => {
    const {
        locale,
        defaultLocale = process.env.NEXT_PUBLIC_LOCALE || DEFAULT_LOCALE,
    } = useRouter();
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnMount: false,
                        refetchOnWindowFocus: false,
                        refetchOnReconnect: false,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <WagmiConfig client={client}>
                <ConnectKitProvider>
                    <AuthProvider>
                        <IntlProvider
                            messages={pageProps.i18nMessages || {}}
                            locale={locale || defaultLocale}
                            defaultLocale={defaultLocale}
                        >
                            <GlobalStyle />
                            {!!children && children}
                            <ReactQueryDevtools initialIsOpen={false} />
                        </IntlProvider>
                    </AuthProvider>
                </ConnectKitProvider>
            </WagmiConfig>
        </QueryClientProvider>
    );
};

export default AltcoinProviders;
