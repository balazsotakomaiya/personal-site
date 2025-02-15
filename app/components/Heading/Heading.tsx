import React from "react";

interface HeadingProps {
    children: React.ReactNode;
    alignment?: 'left' | 'center' | 'right';
    subheading?: React.ReactNode;
}

interface SerifProps {
    children: React.ReactNode;
}

interface SubheadingProps {
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

const Subheading: React.FC<SubheadingProps> = ({children}) => {
    return <div className='font-mono tracking-tight text-custom-cream text-xs lg:text-xl'>{children}</div>;
};

export const Heading: React.FC<HeadingProps> & {
    Serif: React.FC<SerifProps>;
    DesktopLinebreak: React.FC;
    MobileLinebreak: React.FC;
    Linebreak: React.FC;
    Subheading: React.FC<SubheadingProps>;
} = ({children, alignment = 'left', subheading,}) => {
    const alignmentClasses = alignment === 'center'
        ? 'text-center justify-center' : alignment === 'right'
            ? 'text-right justify-end' : 'text-left justify-start';

    return (
        <div className={`flex flex-col align-middle mt-10 mb-8 ${alignmentClasses}`}>
            <span className='text-custom-cream text-3xl/11 lg:text-8xl/28 3xl:text-9xl/36'>
                {children}
            </span>
            {subheading && <Subheading>{subheading}</Subheading>}
        </div>
    );
};

Heading.Serif = Serif;
Heading.DesktopLinebreak = DesktopLinebreak;
Heading.MobileLinebreak = MobileLinebreak;
Heading.Linebreak = Linebreak;
Heading.Subheading = Subheading;