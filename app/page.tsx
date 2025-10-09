import {Fragment} from "react";
import {MiniHeader} from "@/app/components/MiniHeader/MiniHeader";
import {HeroSection} from "@/app/components/HeroSection";
// import {ServicesSection} from "@/app/components/ServicesSection/ServicesSection";
import Friends from "./components/Friends/Friends";

export default function Home() {
    return (
        <Fragment>
            <MiniHeader/>

            <HeroSection/>

            {/* <div className='mb-24 lg:mb-64'/> */}

            {/* <ServicesSection /> */}

            <div className='mb-24 lg:mb-64'/>

            <Friends />
        </Fragment>
    );
}
