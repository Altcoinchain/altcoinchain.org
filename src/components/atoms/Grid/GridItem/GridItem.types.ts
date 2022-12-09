import * as CSS from 'csstype';
import { PropsWithChildren } from 'react';
import {Breakpoint} from "@/components/providers/AltcoinProviders/themes";

export type GridItemPropSubset = {
    /**
     * The column number the grid item should end.
     */
    colEnd?: number | 'auto';
    /**
     * The number of columns the grid item should span.
     */
    colSpan?: number | 'auto';
    /**
     * The column number the grid item should start.
     */
    colStart?: number | 'auto';
    /**
     * The row number the grid item should end.
     */
    rowEnd?: number | 'auto';
    /**
     * The number of rows the grid item should span.
     */
    rowSpan?: number | 'auto';
    /**
     * The row number the grid item should start.
     */
    rowStart?: number | 'auto';
};

export type StyledGridItemProps = PropsWithChildren<
    GridItemPropSubset & {
        [key in Breakpoint]?: GridItemPropSubset;
    } & {
        /**
         * Shorthand for CSS `grid-area`
         * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area#syntax
         * */
        area?: CSS.Property.GridArea;
    }
>;
