export const ALTCOIN_PRIVATE_ROUTES: Record<string, string> = {
    home: '/private',
};

const ALTCOIN_PUBLIC_ROUTES: Record<string, string> = {
    home: '/',
    walt: '/walt',
};

export const ALTCOIN_ROUTES: Record<string, string> = {
    ...ALTCOIN_PRIVATE_ROUTES,
    ...ALTCOIN_PUBLIC_ROUTES,
};
