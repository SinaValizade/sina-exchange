import React from 'react';
import { Button } from 'antd';

export const Header = () => {
    return (
        <>
            <header className="flex justify-between bg-[#FCFCFC] py-5 px-8 ">
                <div className="login flex gap-2 w-[10rem]">
                    <Button type='text'>Log in</Button>
                    <Button type='primary'>Sing Up</Button>
                </div>
                <div className="navigation flex justify-center items-center">
                    <ul className="flex gap-6">
                        <li className='flex justify-center items-center'><a href="#" className='p-1 hover:text-blue-600'>NFT</a></li>
                        <li className='flex justify-center items-center'><a href="#" className='p-1 hover:text-blue-600'>price</a></li>
                        <li className='flex justify-center items-center'><a href="#" className='p-1 hover:text-blue-600'>product</a></li>
                        <li className='flex justify-center items-center'><a href="#" className='p-1 hover:text-blue-600'>Learn</a></li>
                        <li className='flex justify-center items-center'><a href="#" className='p-1 hover:text-blue-600'>About Us</a></li>
                    </ul>
                </div>
                <div className="logo text-blue-600 w-[10rem] flex justify-center items-center">
                    <h1 className='text-2xl'><a href="#">Sina Exchange</a></h1>
                </div>
            </header>
        </>
    );
};

