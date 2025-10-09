import React from "react";
import { Portrait } from "@/app/components/Portrait/Portrait";
import { Introduction } from "@/app/components/Introduction/Introduction";
import { Heading } from "@/app/components/Heading/Heading";

export const HeroSection: React.FC = () => {
  return (
    <div>
      <div className="mt-10" />

      {/* Desktop Heading */}
      <Heading
        className="hidden lg:block"
        animated={true}
        lines={[
          <>A Senior Frontend Engineer</>,
          <>
            <span className="inline-block w-2"></span>
            <Heading.Serif>from </Heading.Serif>budapest
          </>,
          <>
            building a <Heading.Serif>beautiful </Heading.Serif>
          </>,
          <>internet</>,
        ]}
      />

      {/* Mobile Heading */}
      <Heading
        className="block lg:hidden"
        animated={true}
        lines={[
          <>A Sr Frontend Engineer</>,
          <>
            <span className="inline-block w-2"></span>
            <Heading.Serif>from </Heading.Serif>budapest, building
          </>,
          <>
            a <Heading.Serif>beautiful </Heading.Serif>internet
          </>,
        ]}
      />

      <div className="mt-10" />

      <div className="flex flex-col lg:hidden">
        <div className="animate-fade-up animate-delay-800">
          <Portrait />
        </div>
        <div className="mb-12" />
        <div className="animate-fade-up animate-delay-1000">
          <Introduction />
        </div>
      </div>

      <div className="hidden lg:flex items-end justify-end gap-12">
        <div className="w-80 animate-fade-up animate-delay-800">
          <Introduction />
        </div>

        <div className="flex-none w-max animate-fade-up animate-delay-1000">
          <Portrait />
        </div>
      </div>
    </div>
  );
};
