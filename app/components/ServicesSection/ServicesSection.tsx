import React from "react";
import {Heading} from "@/app/components/Heading/Heading";

export const ServicesSection: React.FC = () => {
    return (
        <div>
            <Heading
                alignment="center"
                subheading={
                    <Heading.Subheading>
                        ..and competitors loose sleep
                    </Heading.Subheading>
                }
            >
                Building experiences<Heading.Linebreak/>
                That make users<Heading.Linebreak/>
                fall in <Heading.Serif>love</Heading.Serif>
            </Heading>

            <div className='size-250 relative m-auto'>
                <div
                    className="grainy-glass-card relative z-20 size-250 bg-white/16 rounded-3xl backdrop-blur-2xl border border-white/30">

                </div>

                <div className="z-10 rotate-4 absolute left-0 right-0 bottom-0 top-0 size-250 bg-custom-gold rounded-3xl m-auto">

                </div>
            </div>

        </div>
    )
}