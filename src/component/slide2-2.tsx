import React from "react";
import {useSelector} from 'react-redux';
import {CryptoCart} from "./cart/cryptoCart";

interface Value {
    name: string;
    image: string;
    price: number;
}

export const Slide22 = () => {
    const selector = useSelector((state: any) => state.sinaExchange)
    return (
        <>
            <section dir="rtl" className=" h-full flex flex-col justify-between items-center py-7">
                <h3 className="text-white text-3xl h-16 pt-10">قیمت به روز ارز ها رو نگاه کن و باهم مقایسه کن!</h3>
                <div className="flex justify-center items-center gap-20">
                    {selector.cryptoData.map((value: Value, index: number) => (
                        <>
                            {index >= 3 &&
                                <CryptoCart key={index} value={value}/>
                            }
                        </>
                    ))}
                </div>
                <div className="void h-16"></div>
            </section>
        </>
    );
}

