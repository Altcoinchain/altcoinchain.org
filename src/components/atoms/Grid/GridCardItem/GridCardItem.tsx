import { StyledGridCardItem } from './GridCardItem.styled';
import { StyledGridCardItemProps } from './GridCardItem.types';
import { FC } from 'react';

const GridCardItem: FC<StyledGridCardItemProps> = (props) => {
    return (
        <StyledGridCardItem {...props}>
            <title>{props.title}</title>
            <section>{props.children}</section>
        </StyledGridCardItem>
    );
};

export default GridCardItem;
