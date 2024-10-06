import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {data} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {Slide21} from './slide2-1';
import btcLogo from "../files/cryptos/bitcoin.png";
import ethLogo from "../files/cryptos/ETH.png";
import xrpLogo from "../files/cryptos/XRP.png";
import adaLogo from "../files/cryptos/cardano.png";
import ltcLogo from "../files/cryptos/litecoin.png";
import dogeLogo from "../files/cryptos/dogecoin.png";
import {Slide22} from "./slide2-2";

export const Section2 = () => {

    interface CryptocurrencyData {
        USD: number;
    }

    interface CryptoPrices {
        ADA: CryptocurrencyData;
        BTC: CryptocurrencyData;
        DOGE: CryptocurrencyData;
        ETH: CryptocurrencyData;
        LTC: CryptocurrencyData;
        XRP: CryptocurrencyData;
    }

    const initialPrices: CryptoPrices = {
        ADA: {USD: 0},
        BTC: {USD: 0},
        DOGE: {USD: 0},
        ETH: {USD: 0},
        LTC: {USD: 0},
        XRP: {USD: 0}
    }

    const dispatch = useDispatch()
    const selector = useSelector((state: any) => state.sinaExchange)

    const [price, setPrice] = useState<CryptoPrices>(initialPrices);
    const [priceArray, setPriceArray] = useState<number[]>([]);
    const crypto: string[] = ["Bitcoin", "Ethereum", "XRP", "Cardano", "Litecoin", "Dogecoin"]
    const [flag, setFlag] = useState<number>()
    useEffect(() => {
        const a = setTimeout(() => {
            axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,XRP,BTC,ADA,LTC,DOGE&tsyms=USD&api_key=81c0920a80c2c24418818bb137ffee40eb4e52bd959b2ce957d164b64a0f1cf8").then((res) => {
                setPrice(res.data)
                setFlag(1);

            })
        },1)
        setInterval(() => {
            axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,XRP,BTC,ADA,LTC,DOGE&tsyms=USD&api_key=81c0920a80c2c24418818bb137ffee40eb4e52bd959b2ce957d164b64a0f1cf8").then((res) => {
                setPrice(res.data)
                setFlag(1);
            })
        }, 5000)
    },[flag])
    useEffect(() => {
        setPriceArray(Object.values(price).map(value => value.USD))
        dispatch(data({
            addData: [
                {
                    name: crypto[0],
                    image: btcLogo,
                    price: priceArray[2]
                },
                {
                    name: crypto[1],
                    image: ethLogo,
                    price: priceArray[0]
                },
                {
                    name: crypto[2],
                    image: xrpLogo,
                    price: priceArray[1]
                },
                {
                    name: crypto[3],
                    image: adaLogo,
                    price: priceArray[3]
                },
                {
                    name: crypto[4],
                    image: ltcLogo,
                    price: priceArray[4]
                },
                {
                    name: crypto[5],
                    image: dogeLogo,
                    price: priceArray[5]
                },

            ]
        }))
    }, [price])
    return (
        <>
            <section className="bg-blue-600 h-full">
                <div className="slide"><Slide21/></div>
                <div className="slide"><Slide22/></div>
            </section>
        </>
    );
};

