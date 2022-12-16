import { ContractFunction } from '@ethersproject/contracts';
import { WalletTokenOptions } from '@/common/interfaces';

class Observable {
    private listeners: Set<any>;
    private interval: any;
    constructor(
        exec: (arg0: {
            next: (value: any) => void;
            error: (err: any) => void;
            complete: () => void;
        }) => void
    ) {
        this.listeners = new Set();
        exec({
            next: (value) =>
                this.listeners.forEach(({ next }) => next && next(value)),
            error: (err) =>
                this.listeners.forEach(({ error }) => error && error(err)),
            complete: () =>
                this.listeners.forEach(
                    ({ complete }) => complete && complete()
                ),
        });
    }
    subscribe(listeners: any) {
        this.listeners.add(listeners);
        return { unsubscribe: () => this.listeners.delete(listeners) };
    }
}

type EthereumType = {
    networkVersion: number;
    request: (arg0: {
        method: string;
        params:
            | { chainId: string }[]
            | {
                  chainName: string;
                  chainId: string;
                  nativeCurrency: {
                      name: string;
                      decimals: number;
                      symbol: string;
                  };
                  rpcUrls: string[];
              }[];
    }) => any;
};

export const addTokenToWallet = async (
    ethereum: EthereumType,
    tokenOptions: WalletTokenOptions
) => {
    if (!!ethereum) {
        try {
            const wasAdded = window.ethereum!.request({
                // @ts-ignore
                method: 'wallet_watchAsset',
                params: {
                    // @ts-ignore
                    type: 'ERC20',
                    options: tokenOptions,
                },
            });

            if (!!wasAdded) {
                console.log('Thanks for your interest!');
            } else {
                console.log('Your loss!');
            }
        } catch (error) {
            console.log(error);
        }
    }
};

export const repeatCall = (
    contractFunction: ContractFunction,
    props?: any
): Observable =>
    new Observable(({ next, error }) => {
        let repeatInterval: any;
        const resultsCallback = (results: any) => {
            next(results);
            clearInterval(repeatInterval);
        };
        const errorCallback = (e: any) => error(e.message);

        repeatInterval = setInterval(() => {
            if (!!props) {
                contractFunction(props).then(resultsCallback, errorCallback);
            } else {
                contractFunction().then(resultsCallback, errorCallback);
            }
        }, 2000);
    });
