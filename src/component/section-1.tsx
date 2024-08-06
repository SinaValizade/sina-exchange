import React from 'react';
import { Header } from "./header";
import logo from "../files/logo.png";
import scroll from "../files/scroll.png";
import bitcoin from "../files/bitcoin.png";
import btc from "../files/btc1.png";

export const Section1 = () => {
    return (
        <>
            <section className="bg-[#FCFCFC] h-full relative flex flex-col justify-between">
                <Header />
                <div className="contain flex justify-between items-center">
                    <div className='w-1'>
                        <div className='w-64 opacity-90'>
                            <img src={btc} alt="bitcoin" />
                        </div>
                    </div>
                    <div className="title">
                        <div className="flex justify-center">
                            <img src={logo} alt="Sina Exchange" />
                        </div>
                    </div>
                    <div className='w-1'></div>
                </div>
                <div className="text flex justify-center text-blue-700 text-xl pb-10" dir='rtl'>
                    <p className='pt-3.5 pr-7'>برای مشاهده ادامه سایت صفحه رو اسکرول کن!</p>
                    <div className="scroll h-5">
                        <img src={scroll} alt="scroll" className='h-16' />
                    </div>
                </div>
                <div className="logo absolute bottom-5 right-10">
                    <img src={bitcoin} alt="crypto" className='h-80' />
                </div>

            </section>
        </>
    );
};

