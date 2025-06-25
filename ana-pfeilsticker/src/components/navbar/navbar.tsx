import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { LuHouse } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

function Navbar() {
  return (
    <header className="w-fit min-w-[300px] bg-white-005 p-4 rounded-xl">
      <ul className="flex items-center justify-around min-w-full gap-2 text-2xl">
        <li>
          <a href="#home">
            {" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <LuHouse href="#home" />
                </TooltipTrigger>
                <TooltipContent className="px-4 py-1 text-sm rounded-full bg-white-005">
                  Home
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </li>
        <li>
          <a href="#projects">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="">
                  <MdOutlineWorkOutline />
                </TooltipTrigger>
                <TooltipContent className="px-4 py-1 text-sm rounded-full bg-white-005">
                  Integrantes
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </li>
        <li>
          <a href="#blog">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <TbEdit />
                </TooltipTrigger>
                <TooltipContent className="px-4 py-1 text-sm rounded-full bg-white-005">
                  Blog
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </li>
        <li>
          <a href="#contact">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <FiPhone />
                </TooltipTrigger>
                <TooltipContent className="px-4 py-1 text-sm rounded-full bg-white-005">
                  Contact Me
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
