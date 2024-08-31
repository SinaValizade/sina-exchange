import React from "react";
import {useSelector} from 'react-redux';
import {CryptoCart} from "./cart/cryptoCart";

interface Value {
    name: string;
    image: string;
    price: number;
}

export const Slide21 = () => {
    const selector = useSelector((state: any) => state.sinaExchange)
    return (
        <>
            <section dir="rtl" className=" h-full flex flex-col justify-between items-center py-7">
                <h3 className="text-white text-3xl">قیمت به روز ارز هارو نگاه کن و باهم مقایسه کن!</h3>
                <div className="flex justify-center items-center gap-20">
                    {selector.cryptoData.map((value: Value, index: number) => (
                        <>
                            {index < 3 &&
                                // <div className="cart flex flex-col bg-white rounded-xl p-10 px-14 gap-3 text-2xl">
                                //     <img src={value.image} alt={value.name}
                                //          className="h-32 w-32 mb-7"/>
                                //     <h3>{value.name}</h3>
                                //     <p>{value.price}</p>
                                //
                                // </div>
                                <CryptoCart key={index} value={value}/>
                            }
                        </>
                    ))}
                </div>
                <div className="void h-11"></div>
            </section>
        </>
    );
}

