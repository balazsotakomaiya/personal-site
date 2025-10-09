import { Heading } from "../Heading/Heading";
import FriendCard from "./FriendCard";

const Friends: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Mobile header - centered */}
      <div className="flex justify-center lg:hidden">
        <Heading
          alignment="center"
          lines={[
            <>Meet some of</>,
            <>
              my <Heading.Serif>friends</Heading.Serif>
            </>,
          ]}
        />
      </div>
      
      {/* Desktop headers - left and right */}
      <div className="hidden lg:flex lg:flex-row lg:justify-between">
        <Heading
          lines={[
            <>Meet some of</>,
            <>
              my <Heading.Serif>friends</Heading.Serif>
            </>,
          ]}
        />
        <Heading
          alignment="right"
          lines={[
            <>The grand</>,
            <>
             <Heading.Serif>salon</Heading.Serif>
            </>,
          ]}
        />
      </div>
      
      {/* Friend Cards */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-10 xl:gap-16">
        <FriendCard 
          logo="/assets/images/logos/1.png" 
          alt="JBL logo"
          className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.667rem)] xl:w-[calc(25%-3rem)]"
        />
        <FriendCard 
          logo="/assets/images/logos/2.png" 
          alt="Booking.com logo"
          className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.667rem)] xl:w-[calc(25%-3rem)]"
        />
        <FriendCard 
          logo="/assets/images/logos/3.png" 
          alt="Typeform logo"
          className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.667rem)] xl:w-[calc(25%-3rem)]"
        />
        <FriendCard 
          logo="/assets/images/logos/4.png" 
          alt="Royal Ascot logo"
          className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.667rem)] xl:w-[calc(25%-3rem)]"
        />
        <FriendCard 
          logo="/assets/images/logos/5.png" 
          alt="Skybet logo"
          className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.667rem)] xl:w-[calc(25%-3rem)]"
        />
        <FriendCard 
          logo="/assets/images/logos/6.png" 
          alt="OTP Bank logo"
          className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.667rem)] xl:w-[calc(25%-3rem)]"
        />
        <FriendCard 
          logo="/assets/images/logos/7.png" 
          alt="TOTUM logo"
          className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.667rem)] xl:w-[calc(25%-3rem)]"
        />
        <FriendCard 
          logo="/assets/images/logos/8.png" 
          alt="PokerStars logo"
          className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.667rem)] xl:w-[calc(25%-3rem)]"
        />
      </div>
    </div>
  );
};

export default Friends;
