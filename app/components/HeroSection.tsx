import React from "react";
import {Portrait} from "@/app/components/Portrait/Portrait";
import {Introduction} from "@/app/components/Introduction/Introduction";
import {Heading} from "@/app/components/Heading/Heading";

export const HeroSection: React.FC = () => {
    return (
        <div>
            <div className='mt-10'/>

            {/* Desktop Heading */}
            <Heading className="hidden lg:block">
                &nbsp;&nbsp;A Senior Frontend Engineer<br/>
                <span className="inline-block w-2"></span><Heading.Serif>from </Heading.Serif>budapest<br/>building
                a <Heading.Serif>beautiful </Heading.Serif><br/>internet
            </Heading>

            {/* Mobile Heading */}
            <Heading className="block lg:hidden">
                A Sr Frontend Engineer<br/>
                <span className="inline-block w-2"></span><Heading.Serif>from </Heading.Serif>budapest, building<br/>
                a <Heading.Serif>beautiful </Heading.Serif>internet
            </Heading>

            <div className='mt-10'/>

            <div className='flex flex-col lg:hidden'>
                <Portrait/>
                <div className='mb-12'/>
                <Introduction/>
            </div>

            <div className='hidden lg:flex items-end justify-end gap-12'>
                <div className="w-80">
                    <Introduction/>
                </div>

                <div className='flex-none w-max'>
                    <Portrait/>
                </div>
            </div>
        </div>
    );
}