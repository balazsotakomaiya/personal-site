import React from "react";
import Image from "next/image";
import portrait from '@/public/assets/images/portrait.png';

export const Portrait: React.FC = () => {
    return (
        <div className='relative'>
            <Image
                className='relative z-20 rounded-md lg:rounded-none w-full h-full lg:w-128 3xl:w-168'
                src={portrait}
                alt='Portrait'
            />
            <div
                className='absolute z-10 bg-custom-gold w-full rounded-md lg:rounded-none lg:w-128 3xl:w-168 h-full top-2 left-2 lg:top-3 lg:left-3'
            />
        </div>
    );
}