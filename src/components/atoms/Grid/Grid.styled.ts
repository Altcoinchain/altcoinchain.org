import styled from 'styled-components';
import { StyledGridProps } from './Grid.types';

export const StyledGrid = styled.div<StyledGridProps>`
    display: grid;
    width: 100%;
    grid-gap: ${({ gap, theme }) =>
        typeof gap === 'string' ? theme.spacing[gap] : gap};
    grid-template-areas: ${({ templateAreas }) => templateAreas};
    grid-template-columns: ${({ templateColumns }) => templateColumns};
    grid-template-rows: ${({ templateRows }) => templateRows};
    grid: ${({ grid }) => grid};
`;
