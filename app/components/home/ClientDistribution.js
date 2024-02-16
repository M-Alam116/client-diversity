import Link from "next/link";
import React, { useEffect } from "react";
import ConsensusClients from "./ConsensusClients";
import ExecutionClients from "./ExecutionClients";
import { useCustomTheme } from "./GetTheme";

const ClientDistribution = () => {
  const resolvedTheme = useCustomTheme();

  return (
    <div
      className="flex flex-col items-center py-[3rem] md:py-[7rem]"
      id="distribution"
    >
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="text-[32px] md:text-[40px] leading-[35px] font-[800] opacity-90 text-center">
          Client Distribution
        </h1>
        <Link
          href="https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&poolType=all"
          target="_blank"
        >
          <button
            className={`px-[15px] py-[8px] rounded-[8px] text-[15px] opacity-90 ${
              resolvedTheme === "light"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
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
