import { FC } from 'react';
import { ConnectKitButton } from 'connectkit';
import { StyledContentButton } from './WalletButton.styled';

const WalletButton: FC = () => {
    return (
        <ConnectKitButton.Custom>
            {({ isConnected, isConnecting, show, hide, address, ensName }) => {
                return (
                    <StyledContentButton onClick={show}>
                        {isConnected ? address : 'Connect wallet'}
                    </StyledContentButton>
                );
            }}
        </ConnectKitButton.Custom>
    );
};

export default WalletButton;
