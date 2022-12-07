/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-console */
import { QueryCache, QueryClient } from '@tanstack/react-query';

export function createTestQueryClient() {
    const queryCache = new QueryCache();
    return {
        testQueryClient: new QueryClient({
            queryCache,
            defaultOptions: {
                queries: {
                    retry: false,
                },
            },
            logger: {
                log: console.log,
                warn: console.warn,
                error:
                    process.env.NODE_ENV === 'test' ? () => {} : console.error,
            },
        }),
        queryCache,
    };
}
