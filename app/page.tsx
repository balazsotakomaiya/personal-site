import {Fragment} from "react";
import {MiniHeader} from "@/app/components/MiniHeader/MiniHeader";
import {HeroTitle} from "@/app/components/HeroTitle/HeroTitle";
import {Portrait} from "@/app/components/Portrait/Portrait";

export default function Home() {
    return (
        <Fragment>
            <MiniHeader/>

            <HeroTitle />

            <Portrait />
        </Fragment>
    );
}
