import '@testing-library/jest-dom';
import type { RequestHandler } from 'msw';
import { setupServer, SetupServerApi } from 'msw/node';

export const mswServer = (handlers: RequestHandler[]) =>
    setupServer(...handlers);

export const mswTestSetup = (server: SetupServerApi) => {
    // Establish API mocking before all tests.
    beforeAll(() =>
        server.listen({
            onUnhandledRequest(req: any) {
                console.error(
                    'Found an unhandled %s request to %s',
                    req.method,
                    req.url.href
                );
            },
        })
    );
    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => server.resetHandlers());
    // Clean up after the tests are finished.
    afterAll(() => server.close());
};
