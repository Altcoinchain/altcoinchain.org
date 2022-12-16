import * as CSS from 'csstype';
import { PropsWithChildren } from 'react';
import { Breakpoint } from '@/components/providers/AltcoinProviders/themes';
import { GridItemPropSubset } from '@/components/atoms/Grid/GridItem/GridItem.types';

export type GridCardItemPropsSubset = GridItemPropSubset & {
    title?: string;
};

export type StyledGridCardItemProps = PropsWithChildren<
    GridCardItemPropsSubset & {
        [key in Breakpoint]?: GridCardItemPropsSubset;
    } & {
        /**
         * Shorthand for CSS `grid-area`
         * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area#syntax
         * */
        area?: CSS.Property.GridArea;
    }
>;
