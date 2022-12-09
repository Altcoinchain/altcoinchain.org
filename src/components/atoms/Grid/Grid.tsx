import { GridProps } from './Grid.types';
import GridItem from './GridItem/GridItem';
import { StyledGrid } from './Grid.styled';

const Grid = ({
    children,
    gap = 0,
    grid = '',
    templateAreas = '',
    templateColumns = '',
    templateRows = '',
}: GridProps) => {
    const styles = {
        gap,
        grid,
        templateAreas,
        templateColumns,
        templateRows,
    };

    return <StyledGrid {...styles}>{children}</StyledGrid>;
};

/**
 * Bind sub-components to Grid namespace
 */
Grid.GridItem = GridItem;

export default Grid;
