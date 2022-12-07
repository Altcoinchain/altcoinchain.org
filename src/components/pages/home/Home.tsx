import { FC } from 'react';
import { PageContainerStyled } from '@/common/styles/page-container.styled';
import descriptors from "@/common/descriptors";
import {useIntl} from "react-intl";
import Image from "next/image";

export const Home: FC = () => {
    const { formatMessage } = useIntl();

    return <PageContainerStyled>
        <Image src={'/images/altcoinchain.png'} alt={'Altcoin chain logo'} width={360} height={360} />
        <h2>{formatMessage(descriptors.home.title)}</h2>
        <p>{formatMessage(descriptors.home.description)}</p>
    </PageContainerStyled>;
};
