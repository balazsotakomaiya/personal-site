import React from "react";

export const MiniHeader: React.FC = () => {
    return (
        <div className='flex text-custom-cream opacity-80 justify-between items-center'>
            <span>BALAZS</span>
            <div className="h-0.5 bg-custom-cream opacity-80 w-full mx-4"/>
            <span>OTAKOMAIYA</span>
        </div>
    );
}