import React from "react";
import {Portrait} from "@/app/components/Portrait/Portrait";
import {Introduction} from "@/app/components/Introduction/Introduction";
import {Heading} from "@/app/components/Heading/Heading";

export const HeroSection: React.FC = () => {
    return (
        <div>
            <Heading>
                &nbsp;A Senior Frontend Engineer <Heading.DesktopLinebreak/>
                &nbsp;<Heading.Serif>from</Heading.Serif>budapest&nbsp;<Heading.DesktopLinebreak/>building
                a <Heading.Serif>beautiful&nbsp;</Heading.Serif><Heading.DesktopLinebreak/>internet
            </Heading>

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