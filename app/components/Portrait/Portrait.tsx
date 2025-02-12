import React from "react";
import Image from "next/image";
import portrait from '@/public/assets/images/portrait.png';

export const Portrait: React.FC = () => {
    return (
        <div className='relative'>
            <Image className='relative z-20 rounded-md mt-8 lg:rounded-none w-full lg:w-128' src={portrait} alt='Portrait'/>
            <div className='absolute z-10 bg-custom-gold lg:w-128 h-full top-3 left-3' />
        </div>
    );
}