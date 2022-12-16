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
import WalletButton from '@/components/layouts/page-layout/header/wallet-button/WalletButton';
import { ThemeProvider } from 'styled-components';
import { useThemeStore } from '@/components/providers/zustand/theme';
import {
    darkTheme,
    lightTheme,
} from '@/components/providers/AltcoinProviders/themes';
import LogoIcon from '@/components/atoms/icons/LogoIcon';
import { useRouter } from 'next/router';
import { ALTCOIN_ROUTES } from '@/common/constants/routes.const';
import { HeaderLayout } from '@/components/layouts/page-layout/header/Header';
import { useMenuStore } from '@/components/providers/zustand/menu';

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
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const openMenu = useMenuStore((state) => state.openMenu);
    const { route } = useRouter();

    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <PageLayoutStyled openMenu={openMenu}>
                <menu>
                    <PageLogo
                        src={'/images/altcoinchain.png'}
                        label={'Altcoin chain'}
                    />
                    <button onClick={toggleTheme}>X</button>
                    <ul>
                        <li>
                            <Link
                                href={ALTCOIN_ROUTES.walt}
                                className={
                                    route === ALTCOIN_ROUTES.walt
                                        ? 'active'
                                        : undefined
                                }
                            >
                                <LogoIcon width={24} height={24} />
                                Walt
                            </Link>
                        </li>
                    </ul>
                </menu>
                <div className={'content'}>
                    <HeaderLayout openMenu={openMenu} />
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
        </ThemeProvider>
    );
};
