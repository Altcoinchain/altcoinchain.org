import {GridItemPropSubset} from "@/components/atoms/Grid/GridItem/GridItem.types";

export const getGridColumnCSS = ({ colSpan, colStart, colEnd }: GridItemPropSubset) =>
    `grid-column: ${colStart ? colStart : ''} ${
        colStart && (colEnd || colSpan) ? '/' : ''
    } ${colEnd ? colEnd : ''} ${colSpan ? `span ${colSpan}` : ''}`;

export const getGridRowCSS = ({ rowSpan, rowStart, rowEnd }: GridItemPropSubset) =>
    `grid-row: ${rowStart ? rowStart : ''} ${
        rowStart && (rowEnd || rowSpan) ? '/' : ''
    } ${rowEnd ? rowEnd : ''} ${rowSpan ? `span ${rowSpan}` : ''}`;