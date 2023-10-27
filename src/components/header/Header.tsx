import DropDowsMenu from "./dropDown/DropDownManu";
import Image from "next/image";
import logo from "~/assets/logo.png";
import React from "react";
import { PagesNav } from "./PagesNav";
import { MobileSideBar } from "./mobile";
import Invitation from "./dropDown/Invitation";
import TaskNotifictions from "./dropDown/TaskNotifictions";
import SearchBar from "./dropDown/SearchBar";
import MessageNofinications from "./dropDown/MessageNofinications";

export const Header = () => {
  return (
    <div
      className={`sticky top-0 !z-[50] flex h-14 w-full items-center justify-between border-b  border-gray-300 bg-white px-4 shadow-sm dark:border-stone-900 dark:bg-neutral-900 lg:justify-start `}
    >
      <div className=" h-full w-[30%] items-center justify-start pt-2   lg:flex lg:w-[5%] lg:pt-0">
        <Image alt="/logo.png" src={logo} width={35} height={35} />
      </div>
      <PagesNav />

      <div className="mr-2  hidden  h-[60px]  w-[25%] items-center justify-end md:flex md:gap-x-4   ">
        <SearchBar />
        <MessageNofinications />
        <TaskNotifictions />
        <Invitation />
        <DropDowsMenu />
      </div>
      <MobileSideBar />
    </div>
  );
};
