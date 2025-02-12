import React from "react";

export const HeroTitle: React.FC = () => {
    const desktopLineBreak = <br className='hidden lg:inline'/>;

    return (
        <div className='flex align-middle mt-10'>
            <span className='text-custom-cream text-3xl/11 lg:text-7xl/20'>
                &nbsp;A Senior Frontend Engineer {desktopLineBreak}
                &nbsp;<span className='font-serif text-custom-gold pr-1'>from</span> budapest&nbsp;{desktopLineBreak}
                building a <span className='font-serif text-custom-gold pr-1'>beautiful</span> {desktopLineBreak}
                internet
            </span>
        </div>

    );
}