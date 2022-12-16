import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { PriceTrackerCoinType } from '@/common/interfaces';

interface MenuState {
    alt: PriceTrackerCoinType | undefined;
    updateAltPriceTracker: (alt: PriceTrackerCoinType) => void;
}

export const usePriceTrackerStore = create<MenuState>()(
    devtools(
        (set) => ({
            alt: undefined,
            updateAltPriceTracker: (alt) => set(() => ({ alt })),
        }),
        {
            name: 'price-tracker-store',
        }
    )
);
