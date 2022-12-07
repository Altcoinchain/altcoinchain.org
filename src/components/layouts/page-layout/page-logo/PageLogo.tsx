import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { PageLogoStyled } from './page-logo.styled';

type PageLogoProps = {
    src: string | StaticImageData;
    label: string;
};

export const PageLogo: FC<PageLogoProps> = ({ src, label }) => {
    return (
        <PageLogoStyled>
            <Image src={src} alt={`${label} logo`} width={72} height={72} />
            <h1 className={'label'}>{label}</h1>
        </PageLogoStyled>
    );
};
