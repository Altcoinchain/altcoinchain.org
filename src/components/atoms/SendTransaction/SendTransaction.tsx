import * as React from 'react';
import { useDebounce } from 'use-debounce';
import {
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from 'wagmi';
import { parseEther } from 'ethers/lib/utils';
import { FC, useEffect } from 'react';
import Link from 'next/link';
import { SendTransactionStyled } from '@/components/atoms/SendTransaction/send-transaction.styled';

type SendTransactionType = {
    toAddress?: string;
    onSuccess?: () => void;
};
export const SendTransaction: FC<SendTransactionType> = ({
    toAddress,
    onSuccess,
}) => {
    const [to, setTo] = React.useState(toAddress || '');
    const [debouncedTo] = useDebounce(to, 500);
    const [amount, setAmount] = React.useState('');
    const [debouncedAmount] = useDebounce(amount, 500);

    const { config } = usePrepareSendTransaction({
        request: {
            to: debouncedTo,
            value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
        },
    });
    const { data, sendTransaction } = useSendTransaction(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    useEffect(() => {
        if (isSuccess) {
            setAmount('');
            if (onSuccess) {
                onSuccess();
            }
        }
    }, [isSuccess]);
    return (
        <SendTransactionStyled
            onSubmit={(e) => {
                e.preventDefault();
                sendTransaction?.();
            }}
        >
            {!toAddress && (
                <label>
                    Recipient
                    <input
                        disabled={isLoading}
                        aria-label="Recipient"
                        onChange={(e) => setTo(e.target.value)}
                        placeholder="0xA0Cf…251e"
                        value={to}
                    />
                </label>
            )}
            <label>
                Amount
                <input
                    disabled={isLoading}
                    aria-label="Amount (alt)"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                    value={amount}
                />
            </label>
            <button disabled={isLoading || !sendTransaction || !to || !amount}>
                {isLoading ? 'Sending...' : 'Send'}
            </button>
            {isSuccess && (
                <div>
                    Success, see the transaction{` `}
                    <Link
                        target={'_blank'}
                        href={`http://expedition.altcoinchain.org/tx/${data?.hash}`}
                    >
                        here
                    </Link>
                    .
                </div>
            )}
        </SendTransactionStyled>
    );
};
