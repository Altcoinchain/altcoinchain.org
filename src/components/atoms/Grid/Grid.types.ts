import type * as CSS from 'csstype';
import { PropsWithChildren } from 'react';
import {Spacing} from "@/components/providers/AltcoinProviders/themes";



export type GridProps = PropsWithChildren<{
    gap?: keyof Spacing | 0;
    grid?: CSS.Property.Grid;
    templateAreas?: CSS.Property.GridTemplateAreas;
    templateColumns?: CSS.Property.GridTemplateColumns;
    templateRows?: CSS.Property.GridTemplateRows;
}>;

export type StyledGridProps = Omit<GridProps, 'children'>;
