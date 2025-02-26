import React from "react";
import {Heading} from "@/app/components/Heading/Heading";
import {AbstractIcon1, AbstractIcon2, AbstractIcon3, AbstractIcon4} from "@/app/components/Icons/AbstractIcons";

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

            <div className='mb-16 lg:mb-32'/>

            <div className='w-full aspect-square lg:size-250 relative m-auto'>
                <div
                    className="grainy-glass-card relative z-20 aspect-square lg:size-250 bg-white/16 rounded-3xl backdrop-blur-xl border border-white/30 p-4 lg:p-8">
                    <Heading
                        alignment="left"
                        className='text-custom-gray'
                    >
                        Expertise <Heading.Serif className='text-custom-gray'>and</Heading.Serif>
                    </Heading>
                    <Heading
                        alignment="right"
                        className='text-custom-gray'
                    >
                        Services
                    </Heading>

                    <div className='mb-8'/>

                    <div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24'>
                        <div className='flex flex-col gap-4'>
                            <AbstractIcon1
                                className='fill-custom-gray w-24 h-full'
                            />
                            <h4 className='text-xl lg:text-2xl text-custom-gray'>Mobile Development</h4>
                            <p className='font-mono tracking-tight text-sm text-custom-gray'>
                                Native and cross-platform applications built with Flutter. Performance-first approach
                                with
                                pixel-perfect execution.
                            </p>
                        </div>

                        <div className='flex flex-col gap-4 text-right items-end md:translate-y-24'>
                            <AbstractIcon2
                                className='fill-custom-gray w-24 h-full'
                            />
                            <h4 className='text-xl lg:text-2xl text-custom-gray'>Web Development</h4>
                            <p className='font-mono tracking-tight text-sm text-custom-gray'>
                                Scalable web applications using React and modern TypeScript. From simple e-commerce to
                                enterprise solutions.
                            </p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <AbstractIcon3
                                className='fill-custom-gray w-24 h-full'
                            />
                            <h4 className='text-xl lg:text-2xl text-custom-gray'>Creative Direction</h4>
                            <p className='font-mono tracking-tight text-sm text-custom-gray'>
                                That transcends platforms, from fashion campaigns to crafting breathtaking digital
                                experiences and design systems.
                            </p>
                        </div>

                        <div className='flex flex-col gap-4 text-right items-end md:translate-y-24'>
                            <AbstractIcon4
                                className='fill-custom-gray w-24 h-full'
                            />
                            <h4 className='text-xl lg:text-2xl text-custom-gray'>Technical Strategy</h4>
                            <p className='font-mono tracking-tight text-sm text-custom-gray'>
                                Platform selection, architecture planning, and scaling strategies for startups and
                                scale-ups.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="z-10 rotate-0 lg:rotate-4 absolute left-0 -right-2 lg:right-0 bottom-0 top-4 lg:top-0 h-full lg:size-250 bg-custom-gold rounded-3xl m-auto"/>
            </div>

        </div>
    )
}