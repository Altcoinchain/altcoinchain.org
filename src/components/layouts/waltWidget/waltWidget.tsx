import { FC, useEffect, useState } from 'react';
import {
    useAccount,
    useContract,
    useContractWrite,
    usePrepareContractWrite,
    useProvider,
    useSigner,
    useWaitForTransaction,
} from 'wagmi';
import { waltContract } from '@/common/constants/contracts/waltContract';
import { parseEther } from 'ethers/lib/utils';
import GridCardItem from '@/components/atoms/Grid/GridCardItem/GridCardItem';
import { Grid } from '@/components/atoms/Grid';
import { WaltWidgetStyled } from '@/components/layouts/waltWidget/waltWidget.styled';
import { SendTransaction } from '@/components/atoms/SendTransaction/SendTransaction';
import Link from 'next/link';
import { useDebounce } from 'use-debounce';

export const WaltWidget: FC = () => {
    const { isConnected, address } = useAccount();
    const [balance, setBalance] = useState<number>(0);
    const [decimals, setDecimals] = useState<number>(0);
    const [withdrawValue, setWithdrawValue] = useState<string>('');
    const [debouncedWithdrawValue] = useDebounce(withdrawValue, 500);
    const provider = useProvider();
    const { config: withdrawConfig } = usePrepareContractWrite({
        address: waltContract.address,
        abi: waltContract.abi,
        functionName: 'withdraw',
        args: [parseEther(debouncedWithdrawValue || '0')],
    });
    const { data: withdrawData, write: withdrawWrite } =
        useContractWrite(withdrawConfig);
    const { isLoading: withdrawLoading, isSuccess: withdrawSuccess } =
        useWaitForTransaction({
            hash: withdrawData?.hash,
        });

    const contract = useContract({
        address: waltContract.address,
        abi: waltContract.abi,
        signerOrProvider: provider,
    });

    const obtainDecimals = async () => {
        try {
            const decimals = await contract!.decimals();
            await setDecimals(Math.pow(10, decimals));
        } catch (e) {
            console.log(e);
        }
    };

    const obtainBalanceOf = async (forceUpdate = false) => {
        try {
            const newBalance = await contract!.balanceOf(address);
            if (forceUpdate && balance === newBalance / decimals!) {
                setTimeout(async () => await obtainBalanceOf(true), 1000);
            } else {
                setBalance(newBalance / decimals!);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const withdraw = async (e: any) => {
        e.preventDefault();
        if (!!withdrawValue) {
            try {
                withdrawWrite!();
            } catch (e) {
                console.log(e);
            }
        }
    };

    const onSendTransactionSuccess = () =>
        setTimeout(async () => await obtainBalanceOf(true), 1000);

    useEffect(() => {
        if (isConnected) {
            obtainDecimals();
        }
    }, [isConnected]);

    useEffect(() => {
        if(decimals) {
            obtainBalanceOf();
        }
    }, [decimals])

    useEffect(() => {
        if (withdrawSuccess) {
            setWithdrawValue('');
            obtainBalanceOf();
        }
    }, [withdrawSuccess]);

    return (
        <>
            <Grid templateColumns="repeat(12, 1fr)" gap={'sm'}>
                <GridCardItem
                    title={'Balance'}
                    colSpan={8}
                    rowSpan={1}
                    colStart={1}
                    rowStart={1}
                    sm={{
                        colSpan: 12,
                        rowSpan: 1,
                        colStart: 1,
                        rowStart: 1,
                    }}
                >
                    <WaltWidgetStyled>
                        <desc>
                            Your WALT balance: {Number(balance).toFixed(2)}
                        </desc>
                    </WaltWidgetStyled>
                </GridCardItem>
                <GridCardItem
                    title={'Withdraw wALT'}
                    colSpan={4}
                    rowSpan={2}
                    colStart={3}
                    rowStart={2}
                    xl={{
                        colSpan: 4,
                        rowSpan: 2,
                        colStart: 5,
                        rowStart: 2,
                    }}
                    md={{
                        colSpan: 6,
                        rowSpan: 2,
                        colStart: 7,
                        rowStart: 2,
                    }}
                    sm={{
                        colSpan: 12,
                        rowSpan: 2,
                        colStart: 1,
                        rowStart: 2,
                    }}
                >
                    <WaltWidgetStyled>
                        <desc>Withdraw your wALT to ALT</desc>
                        <label>
                            Amount
                            <input
                                disabled={withdrawLoading}
                                type={'number'}
                                value={withdrawValue}
                                onChange={(e: any) =>
                                    setWithdrawValue(e.target.value)
                                }
                            />
                        </label>
                        <button
                            disabled={!withdrawValue || withdrawLoading}
                            onClick={withdraw}
                        >
                            {withdrawLoading ? 'Withdrawing...' : 'Withdraw'}
                        </button>
                        {withdrawSuccess && (
                            <div>
                                Success, see the transaction{` `}
                                <Link
                                    target={'_blank'}
                                    href={`http://expedition.altcoinchain.org/tx/${
                                        withdrawData!.hash
                                    }`}
                                >
                                    here
                                </Link>
                                .
                            </div>
                        )}
                    </WaltWidgetStyled>
                </GridCardItem>
                <GridCardItem
                    title={'Deposit ALT'}
                    rowStart={2}
                    colStart={1}
                    colSpan={2}
                    rowSpan={2}
                    xl={{
                        colSpan: 4,
                        rowSpan: 2,
                        colStart: 1,
                        rowStart: 2,
                    }}
                    md={{
                        colSpan: 6,
                        rowSpan: 2,
                        colStart: 1,
                        rowStart: 2,
                    }}
                    sm={{
                        colSpan: 12,
                        rowSpan: 2,
                        colStart: 1,
                        rowStart: 4,
                    }}
                >
                    <WaltWidgetStyled>
                        <desc>Deposit ALT to generate wALT</desc>
                        <SendTransaction
                            toAddress={waltContract.address}
                            onSuccess={onSendTransactionSuccess}
                        />
                    </WaltWidgetStyled>
                </GridCardItem>
            </Grid>
        </>
    );
};
