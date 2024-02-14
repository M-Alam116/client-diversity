import Link from "next/link";
import React from "react";
import ConsensusClients from "./ConsensusClients";
import ExecutionClients from "./ExecutionClients";

const ClientDistribution = () => {
  return (
    <div className="flex flex-col items-center py-[3rem] md:py-[7rem]">
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="text-[32px] md:text-[40px] leading-[35px] font-[800] opacity-90 text-center">
          Client Distribution
        </h1>
        <Link
          href="https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&poolType=all"
          target="_blank"
        >
          <button className="bg-black px-[15px] py-[8px] rounded-[8px] text-white text-[15px] opacity-90">
            View Staking Pool Diversity
          </button>
        </Link>
        <h2 className="text-[20px] font-[300] opacity-70 mt-[5px]">
          Goal: {"<"}33% | Danger: {">"}50%
        </h2>
      </div>

      <div className="flex w-full flex-col lg:flex-row items-center lg:items-stretch justify-evenly gap-[2rem] mt-[3rem]">
        <ConsensusClients />
        <ExecutionClients />
      </div>
    </div>
  );
};

export default ClientDistribution;
