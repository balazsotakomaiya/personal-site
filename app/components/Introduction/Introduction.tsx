import React from "react";

export const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col text-custom-cream">
      <h3 className="font-sans text-4xl mb-4">THE FIRST IMPRESSION</h3>
      <div className="font-mono text-xs lg:text-sm tracking-tight opacity-90">
        Born in Budapest, I started my first web development agency at 15. By
        17, I had joined DEPT, a leading digital agency in Manchester,
        kickstarting a five-year UK tech adventure before returning to Hungary&apos;s
        capital. I&apos;ve driven digital transformation for global brands like
        Booking.com, Typeform, PokerStars, and JBL. I simultaneously completed
        my BSc in Computer Science & Business from The Open University.
        <br />
        <br />
        At 20, I founded EZZRA, a men&apos;s jewelry brand. Today, I&apos;m a Senior
        Frontend Engineer at OTP Bank, the largest bank in Central and Eastern
        Europe.
        <br />
        <br />
        Outside of that you&apos;ll find me training in boxing and Muay Thai, or
        obsessively consuming UFC content.
      </div>
    </div>
  );
};
