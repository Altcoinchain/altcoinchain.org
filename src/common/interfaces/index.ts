import { DehydratedState } from '@tanstack/react-query';

export type PageProps = {
    dehydratedState?: DehydratedState;
    i18nMessages: Record<string, string>;
};

export type PriceTrackerCoinType = {
    id: string;
    name: string;
    symbol: string;
    rank: string;
    price_usd: string;
    price_btc: string;
    volume_24h_usd: string;
    market_cap_usd: string;
    circulating_supply: string;
    total_supply: string;
    max_supply: string;
    percent_change_1h: string;
    percent_change_24h: string;
    percent_change_7d: string;
    last_updated: string;
};

export type WalletTokenOptions = {
    address: string;
    symbol: string;
    decimals: number;
    image?: string;
};
