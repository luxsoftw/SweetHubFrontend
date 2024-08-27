"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MenuMobile from "../components/menu-mobile";

interface HeaderRegisterProps {
   title: string;
   text: string;
}

export function HeaderRegister({ title, text }: HeaderRegisterProps) {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="flex flex-col gap-8">
         <div className="flex flex-row justify-between pb-5">
            <div className="flex-col">
               <h1 className="pb-2 text-3xl font-semibold">{title}</h1>
               <div className="h-1.5 w-20 rounded-md bg-blue-600"></div>
            </div>

            <button onClick={toggleMenu}>
               <IoMenu className="size-8 text-secondary" />
            </button>

            {isOpen && <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />}
         </div>

         <div className="flex flex-row items-center justify-around gap-1">
            <div className="h-0.5 w-14 rounded bg-black/50"></div>
            <h4 className="text-nowrap font-light text-black/50">{text}</h4>
            <div className="h-0.5 w-14 rounded bg-black/50"></div>
         </div>
      </div>
   );
}
