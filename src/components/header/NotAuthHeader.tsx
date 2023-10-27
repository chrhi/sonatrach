import Image from "next/image";
import logo from "~/assets/logo.png";
import { NotAuth } from "./NotAuth";
import React from "react";

export const NotAuthHeader = () => {
  return (
    <div
      className={`sticky top-0 !z-[50] flex h-14 w-full items-center justify-start  bg-white px-4  `}
    >
      <div className="flex h-full w-[5%] items-center justify-start">
        <Image alt="logo" src={"/logo.png"} width={35} height={35} />
      </div>
    </div>
  );
};
