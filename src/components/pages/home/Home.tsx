import { FC } from 'react';
import descriptors from '@/common/descriptors';
import { useIntl } from 'react-intl';
import LogoIcon from '@/components/atoms/icons/LogoIcon';
import { HomeStyled } from '@/components/pages/home/home.styled';

export const Home: FC = () => {
    const { formatMessage } = useIntl();

    return (
        <HomeStyled>
            <LogoIcon />
            <h2>{formatMessage(descriptors.home.title)}</h2>
            <p>{formatMessage(descriptors.home.description)}</p>
        </HomeStyled>
    );
};
