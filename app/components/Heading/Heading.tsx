import React from "react";

interface HeadingProps {
    children: React.ReactNode;
    alignment?: 'left' | 'center' | 'right';
}

interface SerifProps {
    children: React.ReactNode;
}

const Serif: React.FC<SerifProps> = ({children}) => {
    return <span className='font-serif text-custom-gold pr-1'>{children}</span>;
};

const DesktopLinebreak: React.FC = () => {
    return <br className='hidden lg:inline'/>;
};

const MobileLinebreak: React.FC = () => {
    return <br className='inline lg:hidden'/>;
};

const Linebreak: React.FC = () => {
    return <br/>;
};

export const Heading: React.FC<HeadingProps> & {
    Serif: React.FC<SerifProps>;
    DesktopLinebreak: React.FC;
    MobileLinebreak: React.FC;
    Linebreak: React.FC;
} = ({children, alignment = 'left'}) => {
    const alignmentClasses = alignment === 'center'
        ? 'text-center justify-center' : alignment === 'right'
            ? 'text-right justify-end' : 'text-left justify-start';

    return (
        <div className={`flex align-middle mt-10 mb-8 ${alignmentClasses}`}>
            <span className='text-custom-cream text-3xl/11 lg:text-8xl/28 3xl:text-9xl/36'>
                {children}
            </span>
        </div>
    );
};

Heading.Serif = Serif;
Heading.DesktopLinebreak = DesktopLinebreak;
Heading.MobileLinebreak = MobileLinebreak;
Heading.Linebreak = Linebreak;