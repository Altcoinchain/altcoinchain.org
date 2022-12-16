import React, { FC } from 'react';
import { PageDefaultProps } from '@/components/layouts/page-layout/common/types';
import { HeaderStyled } from '@/components/layouts/page-layout/header/header.styled';
import MenuTriggerIcon from '@/components/atoms/icons/MenuTriggerIcon';
import WalletButton from '@/components/layouts/page-layout/header/wallet-button/WalletButton';
import { useMenuStore } from '@/components/providers/zustand/menu';
import { PriceTracker } from '@/components/layouts/page-layout/header/price-tracker/PriceTracker';

export const HeaderLayout: FC<PageDefaultProps> = ({ openMenu }) => {
    const toggleMenu = useMenuStore((state) => state.toggleMenu);

    return (
        <HeaderStyled openMenu={openMenu}>
            <div className={'header__left'}>
                <div
                    className={'header__left__trigger'}
                    onClick={toggleMenu}
                    onKeyDown={toggleMenu}
                    role={'button'}
                    tabIndex={0}
                >
                    <MenuTriggerIcon />
                </div>
            </div>
            <div className={'header__right'}>
                <PriceTracker />
                <WalletButton />
            </div>
        </HeaderStyled>
    );
};
