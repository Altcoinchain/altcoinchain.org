export interface Colors {
    main: {
        color: `#${string}`;
        background: `#${string}`;
    },
    logo: {
        stroke: `#${string}`;
        fill: `#${string}`;
    }
}

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Breakpoints = {
    [key in Breakpoint]: string;
};

export interface Spacing {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}

const breakpoints = {
    xs: '0',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
};

const spacing = {
    xxs: '1rem',
    xs: '1rem',
    sm: '1rem',
    md: '1rem',
    lg: '1rem',
    xl: '1rem',
    xxl: '1rem',
}

export interface CustomTheme {
    breakpoints: Breakpoints;
    color: Colors;
    spacing: Spacing;
}

export const lightTheme: CustomTheme = {
    color: {
        main: {
            color: '#0D0D0D',
            background: '#FFFFFF'
        },
        logo: {
            stroke: '#0D0D0D',
            fill: '#FFFFFF',
        }
    },
    breakpoints,
    spacing
};

export const darkTheme: CustomTheme = {
    color: {

        main: {
            color: '#f2f2f2',
            background: '#262423'
        },
        logo: {
            stroke: '#f4f1ed',
            fill: '#262423',
        },
    },
    breakpoints,
    spacing
};