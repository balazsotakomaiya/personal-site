import React from "react";
import {Heading} from "@/app/components/Heading/Heading";

export const ServicesSection: React.FC = () => {
    return (
        <div>
            <Heading alignment="center">
                Building experiences<Heading.Linebreak />
                That make users<Heading.Linebreak />
                fall in <Heading.Serif>love</Heading.Serif>
            </Heading>
        </div>
    )
}