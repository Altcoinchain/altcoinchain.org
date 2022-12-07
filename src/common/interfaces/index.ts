import { DehydratedState } from '@tanstack/react-query';

export type PageProps = {
    dehydratedState?: DehydratedState;
    i18nMessages: Record<string, string>;
};
