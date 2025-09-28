import Image from 'next/image';
import React from 'react';

interface FriendCardProps {
  logo: string;
  alt?: string;
  className?: string;
}

const FriendCard: React.FC<FriendCardProps> = ({ 
  logo, 
  alt = "Company logo", 
  className = "" 
}) => {
  return (
    <div className={`friend-card relative rounded-2xl w-1/3 aspect-[3/2] bg-white/10 backdrop-blur-[3px] border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] overflow-hidden ${className}`}>
      {/* Content */}
      <div className="relative z-10 p-6 flex items-center justify-center h-full">
        <Image
          src={logo}
          alt={alt}
          fill
          className="object-contain brightness-0 invert p-4"
          priority
        />
      </div>
    </div>
  );
};

export default FriendCard;
