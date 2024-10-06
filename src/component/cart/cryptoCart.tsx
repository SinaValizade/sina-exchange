import React from 'react';
import '../../App.css'
import dollar from '../../files/dollar.png';
import GradientButton from "../gradientButton";
import {css} from "antd-style";


interface Value {
    name: string;
    image: string;
    price: number;
}

interface Props {
    value: Value;
    key: number;
}

export const CryptoCart = (props: Props) => {

    return (
        <>
            <div className="cart flex flex-col bg-white rounded-xl p-7 px-14 gap-3 text-2xl">
                <img src={props.value.image} alt={props.value.name}
                     className="h-32 w-32 mb-3"/>
                <h3>{props.value.name}</h3>
                <div className="flex justify-center items-center">
                    <p>{props.value.price}</p>
                    <img className="size-6" src={dollar} alt="dollar"/>
                </div>
                <div className="mt-3">
                    <GradientButton/>
                </div>
            </div>
        </>
    );
};

