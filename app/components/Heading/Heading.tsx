import React from "react";

interface HeadingProps {
    lines: React.ReactNode[];
    alignment?: 'left' | 'center' | 'right';
    subheading?: React.ReactNode;
    className?: string;
    animated?: boolean;
    delay?: number;
}

interface SerifProps {
    children: React.ReactNode;
    className?: string;
}

interface SubheadingProps {
    children: React.ReactNode;
    className?: string;
}

const Serif: React.FC<SerifProps> = ({children, className}) => {
    return <span className={`font-serif text-custom-gold pr-1 ${className}`}>{children}</span>;
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

const Subheading: React.FC<SubheadingProps> = ({children, className}) => {
    return <div className={`font-mono tracking-tight text-custom-cream text-xs lg:text-xl ${className}`}>{children}</div>;
};

export const Heading: React.FC<HeadingProps> & {
    Serif: React.FC<SerifProps>;
    DesktopLinebreak: React.FC;
    MobileLinebreak: React.FC;
    Linebreak: React.FC;
    Subheading: React.FC<SubheadingProps>;
} = ({lines, alignment = 'left', subheading, className, animated = false}) => {
    const alignmentClasses = alignment === 'center'
        ? 'text-center justify-center' : alignment === 'right'
            ? 'text-right justify-end' : 'text-left justify-start';

    const getDelayClass = (index: number) => {
        if (index === 0) return '';
        const delayMs = index * 200;
        return `animate-delay-${delayMs}`;
    };

    if (animated) {
        return (
            <div className={`flex flex-col align-middle ${alignmentClasses} ${className}`}>
                <div className={`text-custom-cream text-4xl/11 lg:text-8xl/28 3xl:text-9xl/36 ${className}`}>
                    {lines.map((line, lineIndex) => (
                        <div key={`line-${lineIndex}`} className="text-reveal-line">
                            <span className={`text-reveal-content ${getDelayClass(lineIndex)}`}>
                                {line}
                            </span>
                        </div>
                    ))}
                </div>
                {subheading && (
                    <div className={`animate-fade-up animate-delay-${(lines.length + 1) * 200}`}>
                        <Subheading className={className}>{subheading}</Subheading>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className={`flex flex-col align-middle ${alignmentClasses} ${className}`}>
            <div className={`text-custom-cream text-4xl/11 lg:text-8xl/28 3xl:text-9xl/36 ${className}`}>
                {lines.map((line, lineIndex) => (
                    <div key={`line-${lineIndex}`}>
                        {line}
                    </div>
                ))}
            </div>
            {subheading && <Subheading className={className}>{subheading}</Subheading>}
        </div>
    );
};

Heading.Serif = Serif;
Heading.DesktopLinebreak = DesktopLinebreak;
Heading.MobileLinebreak = MobileLinebreak;
Heading.Linebreak = Linebreak;
Heading.Subheading = Subheading;