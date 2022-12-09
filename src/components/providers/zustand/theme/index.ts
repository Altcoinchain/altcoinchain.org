import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ThemeState {
    theme: boolean;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
    devtools(
        (set) => ({
            theme: true,
            toggleTheme: () => set((state) => ({ theme: !state.theme })),
        }),
        {
            name: 'theme-store',
        }
    )
);
