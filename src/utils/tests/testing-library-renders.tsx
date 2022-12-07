import type { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMockRouter } from '@/utils/tests/next-router';
import { createTestQueryClient } from '@/utils/tests/react-query';
import { AuthProvider } from '@/components/providers/AltcoinProviders/Auth';

type DefaultParams = Parameters<typeof render>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

/**
 * Custom test renderer for client components
 *
 * @remarks
 * Overrides for render and router options
 *
 * @usage
 * const { baseElement } = render(<MyComponent />, {
 *    router: { pathname: '/my-custom-pathname' },
 * });
 *
 */
export function renderWithClient(
    ui: RenderUI,
    { router, ...options }: RenderOptions = {}
) {
    const {
        Wrapper: wrapper,
        routerValue,
        testQueryClient,
    } = createWrapper(router);
    const { rerender, ...result } = render(ui, { wrapper, ...options });

    return {
        ...result,
        routerValue,
        testQueryClient,
        user: userEvent.setup(),
        rerender: (rerenderUi: RenderUI) => rerender(rerenderUi),
    };
}

/**
 * Custom test wrapper for custom hooks usage
 *
 * @remarks
 * Overrides for react query client and router options
 *
 * @usage
 * const { result } = renderHook(() => useCustomHook(), {
 *  wrapper: createWrapper({ pathname: '/test' }),
 * });
 *
 */
export function createWrapper(router?: Partial<NextRouter>) {
    const { testQueryClient } = createTestQueryClient();
    const routerValue = createMockRouter(router);

    const Wrapper = ({ children }: { children: React.ReactNode }) => (
        <RouterContext.Provider value={routerValue}>
            <AuthProvider>
                <QueryClientProvider client={testQueryClient}>
                        {!!children && children}
                </QueryClientProvider>
            </AuthProvider>
        </RouterContext.Provider>
    );

    return { Wrapper, routerValue, testQueryClient };
}
