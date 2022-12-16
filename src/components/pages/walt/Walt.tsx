import { FC } from 'react';
import { useIntl } from 'react-intl';
import { useAccount } from 'wagmi';
import { WaltWidget } from '@/components/layouts/waltWidget/waltWidget';
import { WaltStyled } from '@/components/pages/walt/walt.styled';

export const Walt: FC = () => {
    const { isConnected } = useAccount();
    const { formatMessage } = useIntl();

    return (
        <WaltStyled disabled={!isConnected}>
            <WaltWidget />
        </WaltStyled>
    );
};
