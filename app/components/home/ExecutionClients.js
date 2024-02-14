"use client";

import React, { useState } from "react";
import { IoIosWarning } from "react-icons/io";
import Bar from "./Bar";
import { Supermajority } from "@/app/data/ProgressBarData";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const ExecutionClients = () => {
  const [activeRadio, setActiveRadio] = useState(true);

  return (
    <div className="flex flex-col justify-between border-[1px] border-gray-300 rounded-[8px] w-full max-w-[450px] px-[2rem] py-[3rem]">
      <div className="">
        <h1 className="text-[26px] font-[600] opacity-90 text-center mb-[2rem]">
          Execution Clients
        </h1>
        {activeRadio ? (
          <>
            <div className="bg-[#f8d7da] flex items-center gap-[10px] py-[9px] px-[15px] rounded-[8px] my-[2rem]">
              <IoIosWarning className="w-[26px] h-[26px] opacity-80" />
              <p className="text-[16px] font-[400] opacity-90 text-center">
                Geth has a supermajority, switch to a minority client!
              </p>
            </div>
            {Supermajority.map((item) => (
              <Bar
                key={item.title}
                title={item.title}
                percentage={item.percentage}
                color={item.color}
              />
            ))}

            <div className="my-[1rem]">
              <p className="text-[14px] opacity-90 text-center">
                Data provided by{" "}
                <Link
                  href="https://supermajority.info/"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  supermajority.info
                </Link>{" "}
                — updated manually.
              </p>

              <p className="text-[14px] opacity-90 text-center">
                Data may not be 100% accurate. (
                <Link href="/methodology" className="text-blue-600 underline">
                  Read more
                </Link>
                )
              </p>

              <h2 className="text-[14px] font-[700] text-center mt-[1rem]">
                Network coverage: 54.1%
              </h2>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-[1rem]">
              <p className="font-[400] text-[15px]">
                The{" "}
                <Link
                  href="https://ethernodes.org/"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Ethernodes
                </Link>{" "}
                data has been removed.
              </p>

              <p className="font-[400] text-[15px]">
                The data is a representation of what clients are showing free
                peers and it&apos;s not well understood how this correlates to
                an overall picture of what clients are currently in use. For
                now, survey data (from{" "}
                <Link
                  href="https://supermajority.info/"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  execution-diversity.info
                </Link>
                ) is considered the most reliable source of information for the
                state of execution client diversity.
              </p>

              <Link
                href="https://paragraph.xyz/@ethstaker/new-clientdiversity-data"
                target="_blank"
                className="text-blue-600 text-[16px] font-[400] flex items-center gap-[5px]"
              >
                <p className="underline">Read more</p>
                <GoArrowRight />
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="opacity-80 bg-[#b6e7f1] border-[1px] border-cyan-500 rounded-[8px] flex flex-col items-center py-[10px] px-[20px]">
        <h2 className="text-[16px] font-[800]">
          Data source (
          <Link href="/methodology" className="underline">
            read more
          </Link>
          ):
        </h2>
        <div className="flex justify-around w-full flex-wrap items-center">
          <div
            className="flex items-center gap-[5px]"
            onClick={() => setActiveRadio(true)}
          >
            <input
              type="radio"
              name="progressbar"
              id="info"
              checked={activeRadio === true}
            />
            <label htmlFor="info" className="text-[15px] font-[500]">
              Supermajority.info
            </label>
          </div>
          <div
            className="flex items-center gap-[5px]"
            onClick={() => setActiveRadio(false)}
          >
            <input
              type="radio"
              name="progressbar"
              id="ethernodes"
              checked={activeRadio === false}
            />
            <label htmlFor="ethernodes" className="text-[15px] font-[500]">
              Ethernodes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutionClients;
