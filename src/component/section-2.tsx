import React, { useEffect} from 'react';
import axios from 'axios';
import {SetCryptoImg, SetCryptoPrice} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { Slide21 } from './slide2-1';
import btcLogo from "../files/cryptos/bitcoin.png";
import ethLogo from "../files/cryptos/ETH.png.png";
import xrpLogo from "../files/cryptos/XRP.png.png";
import adaLogo from "../files/cryptos/cardano.png";
import ltcLogo from "../files/cryptos/litecoin.png";
import dogeLogo from "../files/cryptos/dogecoin.png";


export const Section2 = () => {
    // @ts-ignore
    const dispatch = useDispatch()
    const selector = useSelector((state:any) => state.sinaExchange)



    useEffect(() => {
        axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,XRP,BTC,ADA,LTC,DOGE&tsyms=USD&api_key=81c0920a80c2c24418818bb137ffee40eb4e52bd959b2ce957d164b64a0f1cf8").then((res) => {
            // setCryptoPrice(res.data)
            dispatch(SetCryptoPrice({price: res.data}));
        })
    },[])

    console.log(selector.cryptoPrice)

    // @ts-ignore
    return (
        <>
            <section className="bg-blue-600 h-full">
                <div className="slide"><Slide21/></div>
                <div className="slide">Slide 2.2</div>
            </section>
        </>
    );
};

