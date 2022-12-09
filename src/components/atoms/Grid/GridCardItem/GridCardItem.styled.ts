import styled, { css } from 'styled-components';
import {
    Breakpoint,
    CustomTheme,
} from '@/components/providers/AltcoinProviders/themes';
import { StyledGridCardItemProps } from '@/components/atoms/Grid/GridCardItem/GridCardItem.types';
import {
    getGridColumnCSS,
    getGridRowCSS,
} from '@/components/atoms/Grid/Grid.utils';

const createBreakpointCSS = (
    { breakpoints }: CustomTheme,
    props: StyledGridCardItemProps
) => css`
    ${Object.keys(breakpoints)
        .reverse()
        .map((breakpoint) =>
            props[breakpoint as Breakpoint]
                ? `
                @media (max-width: ${breakpoints[breakpoint as Breakpoint]}) {
                    ${getGridColumnCSS(props[breakpoint as Breakpoint]!)};
                    ${getGridRowCSS(props[breakpoint as Breakpoint]!)};
                   
                }
            `
                : ''
        )}
`;

export const StyledGridCardItem = styled.div<StyledGridCardItemProps>`
    grid-area: ${({ area }) => area};
    ${({ colSpan, colStart, colEnd }) =>
        getGridColumnCSS({ colSpan, colStart, colEnd })};
    ${(props) => getGridRowCSS(props)};
    ${({ rowSpan, rowStart, rowEnd }) =>
        getGridRowCSS({ rowSpan, rowStart, rowEnd })};
    ${({ theme, ...props }) => createBreakpointCSS(theme, props)};
    display: flex;
    flex-direction: column;
    padding: 0;

    title {
        display: flex;
        flex-grow: 0;
        margin: 0;
        color: ${(props) => props.theme.color.main.background};
        background-color: ${(props) => props.theme.color.main.color};
        border: 0.1rem solid ${(props) => props.theme.color.main.color};
        border-radius: 0.25rem 0.25rem 0 0;
        padding: 0.25rem 0.5rem;
        transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
            border-color 250ms ease-in-out;
    }

    section {
        flex-grow: 1;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        color: ${(props) => props.theme.color.main.color};
        background-color: ${(props) => props.theme.color.main.background};
        border: 0.1rem solid ${(props) => props.theme.color.main.color};
        border-radius: 0 0 0.25rem 0.25rem;
        padding: 0.25rem 0.5rem;
        transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
            border-color 250ms ease-in-out;
    }
`;
