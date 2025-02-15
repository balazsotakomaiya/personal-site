import {Fragment} from "react";
import {MiniHeader} from "@/app/components/MiniHeader/MiniHeader";
import {HeroTitle} from "@/app/components/HeroTitle/HeroTitle";
import {Portrait} from "@/app/components/Portrait/Portrait";
import {Introduction} from "@/app/components/Introduction/Introduction";

export default function Home() {
    return (
        <Fragment>
            <MiniHeader/>

            <HeroTitle/>

            <div className='flex flex-col lg:hidden'>
                <Portrait/>
                <div className='mb-12' />
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
        </Fragment>
    );
}
