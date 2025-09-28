import { Heading } from "../Heading/Heading";
import FriendCard from "./FriendCard";

const Friends: React.FC = () => {
  return (
    <div className="space-y-12">
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
      
      {/* Friend Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <FriendCard 
          logo="/assets/images/logos/1.png" 
          alt="JBL logo"
          className="w-full"
        />
        <FriendCard 
          logo="/assets/images/logos/2.png" 
          alt="Booking.com logo"
          className="w-full"
        />
        <FriendCard 
          logo="/assets/images/logos/3.png" 
          alt="Typeform logo"
          className="w-full"
        />
        <FriendCard 
          logo="/assets/images/logos/4.png" 
          alt="Royal Ascot logo"
          className="w-full"
        />
        <FriendCard 
          logo="/assets/images/logos/5.png" 
          alt="Skybet logo"
          className="w-full"
        />
        <FriendCard 
          logo="/assets/images/logos/6.png" 
          alt="OTP Bank logo"
          className="w-full"
        />
        <FriendCard 
          logo="/assets/images/logos/7.png" 
          alt="TOTUM logo"
          className="w-full"
        />
        <FriendCard 
          logo="/assets/images/logos/8.png" 
          alt="PokerStars logo"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Friends;
