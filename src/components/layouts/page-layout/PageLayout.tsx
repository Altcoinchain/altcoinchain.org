import React, { FC, ReactNode, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBitcoin,
    faDiscord,
    faTelegram,
    faTwitter,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { PageLayoutStyled } from '@/components/layouts/page-layout/page-layout.styled';
import MenuTriggerIcon from '@/components/atoms/icons/MenuTriggerIcon';
import { PageLogo } from '@/components/layouts/page-layout/page-logo/PageLogo';
import WalletButton from '@/components/layouts/page-layout/wallet-button/WalletButton';

type MenuItem = {
    label: string;
    route: string;
    icon?: string;
    menuItems?: MenuItem[];
};

type PageProps = {
    children: ReactNode;
    logo?: {
        image: string;
        label: string;
    };
    menu?: MenuItem[];
    search?: () => void;
};

export const PageLayout: FC<PageProps> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const toggleMenu = (e: any) => {
        e.preventDefault();
        setOpenMenu(!openMenu);
    };

    return (
        <PageLayoutStyled openMenu={openMenu}>
            <menu>
                <PageLogo
                    src={'/images/altcoinchain.png'}
                    label={'Altcoin chain'}
                />
            </menu>
            <div className={'content'}>
                <header>
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
                        <WalletButton />
                    </div>
                </header>
                <main>{children}</main>
                <footer>
                    <Link
                        href={'https://twitter.com/chainAltcoin'}
                        target={'_blank'}
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link
                        href={'https://discord.gg/hcXHyQP4Je'}
                        target={'_blank'}
                    >
                        <FontAwesomeIcon icon={faDiscord} />
                    </Link>
                    <Link
                        href={'https://t.me/AltcoinchainNews'}
                        target={'_blank'}
                    >
                        <FontAwesomeIcon icon={faTelegram} />
                    </Link>
                    <Link
                        href={'https://github.com/Altcoinchain/'}
                        target={'_blank'}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                    <Link
                        href={
                            'https://bitcointalk.org/index.php?topic=5423193.new'
                        }
                        target={'_blank'}
                    >
                        <FontAwesomeIcon icon={faBitcoin} />
                    </Link>
                    <Link
                        href={'https://miningpoolstats.stream/altcoinchain'}
                        target={'_blank'}
                    >
                        <FontAwesomeIcon icon={faLink} />
                    </Link>
                </footer>
            </div>
        </PageLayoutStyled>
    );
};
