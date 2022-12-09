import { useIntl } from 'react-intl';
import styled, { useTheme, withTheme } from 'styled-components';
import { FC } from 'react';
import {
    CustomTheme,
    darkTheme,
    lightTheme,
} from '@/components/providers/AltcoinProviders/themes';

type MenuTriggerIconProps = {
    width?: number | string;
    height?: number;
};

const LogoIcon: FC<MenuTriggerIconProps> = ({
    width = 128,
    height = 128,
}: MenuTriggerIconProps) => {
    const theme = useTheme() as CustomTheme;
    const { formatMessage } = useIntl();
    const SvgStyled = styled.svg`
        transition: fill 250ms ease-in-out, stroke 250ms ease-in-out;
    `;

    return (
        <SvgStyled
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 600"
            fill={theme.logo.background}
        >
            <title id="title-electricity-icon">
                {formatMessage({
                    id: 'icon.logo',
                    defaultMessage: 'Altcoin Logo',
                    description: 'Altcoin Logo',
                })}
            </title>
            <g strokeMiterlimit={10} strokeWidth={10}>
                <circle
                    stroke={theme.logo.lines}
                    cx="292"
                    cy="292"
                    r="284.63"
                    strokeWidth={15}
                />
                <path
                    stroke={'#BF0404'}
                    d="M257.12,531.67c-119.49-15.89-211.67-118.2-211.67-242,0-121.8,89.18-222.78,205.81-241.19"
                />
                <path
                    stroke={'#BF0404'}
                    d="M325.25,47.47c120,15.48,208.57,118,208.57,242.16,0,123.17-91.19,225-209.73,241.78"
                />
            </g>
            <g fill={theme.logo.lines}>
                <circle cx="100.74" cy="289.63" r="28.98" />
                <path d="M457,276.94H411.76a4,4,0,0,1-3.68-2.37L311.41,48.32c-8.55-18.81-35.23-18.91-43.92-.17L168.78,274.6a4,4,0,0,1-3.67,2.34H128.27a4,4,0,0,0-4,4v15.8a4,4,0,0,0,4,4H457a4,4,0,0,0,4-4V281A4,4,0,0,0,457,276.94Zm-264,0,84-194c4.9-10.54,20.25-10.54,25.15,0l84,194Z" />
                <circle cx="482.22" cy="289.63" r="28.98" />
                <path d="M352.41,300.82,295.29,423a6.54,6.54,0,0,1-11.67.19L221.8,300.82H209.14l73.35,140.69a7.77,7.77,0,0,0,13.89-.2l68.11-140.49Z" />
                <path d="M398.92,322.6,301.51,502.21a11.74,11.74,0,0,1-20.35.34L175.71,322.6H154.08L281.16,540.45a11.74,11.74,0,0,0,20.38-.32l118-217.53Z" />
            </g>
        </SvgStyled>
    );
};

export default LogoIcon;
