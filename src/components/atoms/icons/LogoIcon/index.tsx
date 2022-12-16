import { useIntl } from 'react-intl';
import styled, { useTheme } from 'styled-components';
import { FC } from 'react';
import {
    CustomTheme,
} from '@/components/providers/AltcoinProviders/themes';

type MenuTriggerIconProps = {
    width?: number | string;
    height?: number;
};

const SvgStyled = styled.svg`
  transition: fill 50ms ease-in-out, stroke 50ms ease-in-out;
  
  > circle, > g {
    transition: fill 250ms ease-in-out, stroke 250ms ease-in-out;
  }
    
`;
const LogoIcon: FC<MenuTriggerIconProps> = ({
    width = 128,
    height = 128,
}: MenuTriggerIconProps) => {
    const theme = useTheme() as CustomTheme;

    return (
        <SvgStyled xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 587.26 587.26">
            <title>Altcoin logo</title>
            <circle
                fill={theme.color.logo.fill}
                stroke={theme.color.logo.stroke}
                strokeWidth="18px"
                strokeMiterlimit="10"
                cx="293.63"
                cy="293.63"
                r="284.63"
            />
            <g fill="none" stroke="#bf0404" strokeWidth="18px" strokeMiterlimit="10">
                <path d="M256.51,536.18C136.77,520.25,44.39,417.73,44.39,293.63c0-122.06,89.37-223.25,206.25-241.69" />
                <path d="M332.67,536.18c119.74-15.93,212.12-118.45,212.12-242.55,0-122.06-89.37-223.25-206.25-241.69" />
            </g>
            <g fill={theme.color.logo.stroke}>
                <circle cx="97.72" cy="291.43" r="28.98" />
                <path d="M467.5,280.94H417.23a4,4,0,0,1-3.68-2.37L316.88,52.32c-8.55-18.81-35.23-18.91-43.92-.17L174.25,278.6a4.07,4.07,0,0,1-3.67,2.34H121.74a4,4,0,0,0-4,4v15.8a4,4,0,0,0,4,4H467.5a4,4,0,0,0,4-4V285A4,4,0,0,0,467.5,280.94Zm-269,0,84-194c4.91-10.54,20.25-10.54,25.16,0l84,194Z" />
                <circle cx="491.12" cy="291.43" r="28.98" />
                <path d="M356.69,304.82,299.64,427a6.53,6.53,0,0,1-11.65.19L226.26,304.82H213.61l73.25,140.69c2.95,5.67,11.08,5.55,14.86-.2l68-140.49Z" />
                <path d="M402.39,326.6,305,506.21a11.74,11.74,0,0,1-20.35.34L179.18,326.6H157.55L284.63,544.45a11.74,11.74,0,0,0,20.38-.32L423,326.6Z" />
            </g>
        </SvgStyled>
    );
};

export default LogoIcon;
