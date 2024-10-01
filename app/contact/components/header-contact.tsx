"use client";

import MenuMobile from "@/app/components/menu-mobile";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const HeaderContact = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <header className="flex h-14 items-center justify-between text-white">
         <div>
            <h1 className="font-semibol pb-3 text-3xl">Contato</h1>
            <div className="h-1.5 w-20 rounded-md bg-blue-600"></div>
         </div>

         <button onClick={toggleMenu}>
            <IoMenu className="size-8" />
         </button>

         {isOpen && <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />}
      </header>
   );
};

export default HeaderContact;
