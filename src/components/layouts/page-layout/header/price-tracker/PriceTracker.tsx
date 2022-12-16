import { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { PriceTrackerCoinType } from '@/common/interfaces';
import { usePriceTrackerStore } from '@/components/providers/zustand/price-tracker';
import { PriceTrackerStyled } from '@/components/layouts/page-layout/header/price-tracker/price-tracker.styled';
import LogoIcon from '@/components/atoms/icons/LogoIcon';
const CoinpaprikaAPI = require('@coinpaprika/api-nodejs-client');
const client = new CoinpaprikaAPI();
let altPriceInterval: NodeJS.Timer;

export const PriceTracker: FC = () => {
    const alt = usePriceTrackerStore((state) => state.alt);
    const updateAltPriceTracker = usePriceTrackerStore(
        (state) => state.updateAltPriceTracker
    );
    const getAltPriceTrackerCoin = async () => {
        const altCoin: PriceTrackerCoinType = await client.getTicker({
            coinId: 'alt-altcoinchain',
        });

        updateAltPriceTracker(altCoin);
    };

    useEffect(() => {
        getAltPriceTrackerCoin().then(() => {
            if (altPriceInterval) {
                clearInterval(altPriceInterval);
            }

            altPriceInterval = setInterval(() => {
                getAltPriceTrackerCoin();
            }, 3600000);
        });
        return () => {
            clearInterval(altPriceInterval);
        };
    }, []);

    return (
        <PriceTrackerStyled>
            {alt ? (
                <>
                    <LogoIcon width={32} height={32} />
                    <div className={'information'}>
                        <div className={'change'}>
                            {Number(alt.percent_change_1h) >= 0 ? (
                                <FontAwesomeIcon
                                    className={'up'}
                                    icon={faArrowUp}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className={'down'}
                                    icon={faArrowDown}
                                />
                            )}
                            <div className={'percentage'}>
                                {alt.percent_change_1h}%
                            </div>
                        </div>
                        <div className={'price'}>
                            $ {Number(alt.price_usd).toFixed(5)}
                        </div>
                    </div>
                </>
            ) : (
                <>loading...</>
            )}
        </PriceTrackerStyled>
    );
};
