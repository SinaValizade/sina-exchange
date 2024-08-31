import React from 'react';

interface Value {
    name: string;
    image: string;
    price: number;
}
interface Props {
    value: Value;
    key: number;
}

export const CryptoCart = (props:Props) => {
    return (
        <>
            <div className="cart flex flex-col bg-white rounded-xl p-10 px-14 gap-3 text-2xl">
                <img src={props.value.image} alt={props.value.name}
                     className="h-32 w-32 mb-7"/>
                <h3>{props.value.name}</h3>
                <p>{props.value.price}</p>
            </div>
        </>
    );
};

