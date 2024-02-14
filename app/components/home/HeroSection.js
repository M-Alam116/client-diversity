import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[1rem] h-screen">
      <h1 className="text-[40px] md:text-[75px] leading-[45px] md:leading-[70px] font-[800] opacity-90 text-center">
        Diversify Now
      </h1>
      <p className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-[400] opacity-90 text-center">
        Improve Ethereum&apos;s resilience by using a minority client
      </p>
      <div className="flex items-center justify-center flex-wrap gap-[1rem] my-[1rem]">
        <button className="bg-black px-[24px] py-[12px] text-white rounded-[10px] text-[18px] opacity-90">
          Switch Clients
        </button>
        <button className="px-[24px] py-[10px] text-black rounded-[10px] text-[18px] border-[1px] border-black">
          Dashboard
        </button>
      </div>
      <Link href="" className="flex items-center gap-[5px]">
        <p className="text-[18px] opacity-80 underline">Learn More</p>
        <GoArrowRight className="text-[18px] opacity-80" />
      </Link>
    </div>
  );
};

export default HeroSection;
