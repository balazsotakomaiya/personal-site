import React from "react";

export const Introduction: React.FC = () => {
    return (
        <div className='flex flex-col text-custom-cream'>
            <h3 className='font-sans text-4xl mb-4'>THE FIRST IMPRESSION</h3>
            <div className='font-mono text-xs tracking-tight opacity-90'>
                Born in Budapest, my path wound through Manchester's tech scene for five years before returning to Hungary's
                capital. With a BSc in Computer Science & Business from The Open University, I've driven digital
                transformation for global brands like JBL, Booking.com, Typeform, and PokerStars. But code isn't my only
                {/* todo: Link to EZZRA */}
                passion – I founded EZZRA, a genderless jewelry brand challenging jewellery norms.

                <br /><br />

                When not crafting digital experiences or building my brand, you'll find me front row at fashion shows and
                training in boxing and Muay Thai. And after years of making Uber drivers my personal chauffeurs, I'm finally
                learning to drive – turns out there's more to life than having a 5-star passenger rating.
            </div>
        </div>
    );
}