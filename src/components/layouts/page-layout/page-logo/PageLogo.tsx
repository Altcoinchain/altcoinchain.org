import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { PageLogoStyled } from './page-logo.styled';
import LogoIcon from '@/components/atoms/icons/LogoIcon';

type PageLogoProps = {
    src: string | StaticImageData;
    label: string;
};

export const PageLogo: FC<PageLogoProps> = ({ src, label }) => {
    return (
        <PageLogoStyled>
            <LogoIcon />
            <h1 className={'label'}>{label}</h1>
        </PageLogoStyled>
    );
};
