import styled, { css } from 'styled-components';
import { StyledGridItemProps } from './GridItem.types';
import {
    Breakpoint,
    CustomTheme,
} from '@/components/providers/AltcoinProviders/themes';
import {
    getGridColumnCSS,
    getGridRowCSS,
} from '@/components/atoms/Grid/Grid.utils';

const createBreakpointCSS = (
    { breakpoints }: CustomTheme,
    props: StyledGridItemProps
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
export const StyledGridItem = styled.div<StyledGridItemProps>`
    grid-area: ${({ area }) => area};
    ${({ colSpan, colStart, colEnd }) =>
        getGridColumnCSS({ colSpan, colStart, colEnd })};
    ${(props) => getGridRowCSS(props)};
    ${({ rowSpan, rowStart, rowEnd }) =>
        getGridRowCSS({ rowSpan, rowStart, rowEnd })};
    ${({ theme, ...props }) => createBreakpointCSS(theme, props)};
`;
