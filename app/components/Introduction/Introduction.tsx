import React from "react";

export const Introduction: React.FC = () => {
    return (
        <div className='flex flex-col text-custom-cream'>
            <h3 className='font-sans text-4xl mb-4'>THE FIRST IMPRESSION</h3>
            <div className='font-mono text-xs lg:text-sm tracking-tight opacity-90'>
                Born in Budapest, I started my first web development agency at 14. By 16, I had joined DEPT, a leading
                digital agency in Manchester, kickstarting a five-year UK tech adventure before returning to Hungary's
                capital.
                I've driven digital transformation for global brands like JBL, Booking.com, Typeform, and PokerStars. I
                simultaneously completed my BSc in Computer Science & Business from The Open University.

                <br/><br/>

                At 20, I{/* todo: Link to EZZRA */} founded EZZRA, a genderless jewelry brand. Today, I'm a Senior Frontend
                Engineer at OTP Bank, the largest bank in Central and Eastern Europe.

                <br/><br/>

                Outside of that you'll find me front row at
                fashion shows or training in boxing and Muay Thai.
            </div>
        </div>
    );
}