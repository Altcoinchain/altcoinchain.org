import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface MenuState {
    openMenu: boolean;
    toggleMenu: () => void;
}

export const useMenuStore = create<MenuState>()(
    devtools(
        (set) => ({
            openMenu: false,
            toggleMenu: () => set((state) => ({ openMenu: !state.openMenu })),
        }),
        {
            name: 'menu-store',
        }
    )
);
