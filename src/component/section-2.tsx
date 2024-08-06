import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
// import { SetCryptoPrice } from '../store';
import { useDispatch, UseDispatch , useSelector } from 'react-redux';
import { Slide21 } from './slide2-1';


export const Section2 = () => {
    // @ts-ignore
    // const [cryptoPrice, setCryptoPrice] = useState([]);
    const dispatch = useDispatch()
    const selector = useSelector((state:any) => state.sinaExcgange)

    useEffect(() => {
        axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH,BTC,ADA,TRX,DOGE&tsyms=USD&api_key=81c0920a80c2c24418818bb137ffee40eb4e52bd959b2ce957d164b64a0f1cf8").then((res) => {
            // setCryptoPrice(res.data)
        })
    },[])

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

