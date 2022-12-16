import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { PageLogoStyled } from './page-logo.styled';
import LogoIcon from '@/components/atoms/icons/LogoIcon';
import { useRouter } from 'next/router';
import { ALTCOIN_ROUTES } from '@/common/constants/routes.const';

type PageLogoProps = {
    src: string | StaticImageData;
    label: string;
};

export const PageLogo: FC<PageLogoProps> = ({ src, label }) => {
    const { push } = useRouter();
    return (
        <PageLogoStyled onClick={() => push(ALTCOIN_ROUTES.home)}>
            <LogoIcon />
            <h1 className={'label'}>{label}</h1>
        </PageLogoStyled>
    );
};
