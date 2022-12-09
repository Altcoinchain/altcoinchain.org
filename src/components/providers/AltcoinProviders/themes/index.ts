const breakpoints = {
    xs: '0',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
};

export const lightTheme = {
    main: {
        color: '#0D0D0D',
        background: '#FFFFFF'
    },
    logo: {
        lines: '#0D0D0D',
        background: '#FFFFFF',
    },
    breakpoints,
};

export const darkTheme = {
    main: {
        color: '#FFFFFF',
        background: '#0D0D0D'
    },
    logo: {
        lines: '#FFFFFF',
        background: '#0D0D0D',
    },
    breakpoints,
};

export type CustomTheme = typeof lightTheme | typeof darkTheme;