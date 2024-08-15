"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MenuMobile from "./menu-mobile";

const Header = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <header className="flex h-14 items-center justify-between px-5">
         <div>
            <h1 className="text-xl">Logo</h1>
         </div>

         <button onClick={toggleMenu}>
            <IoMenu className="size-8 text-secondary" />
         </button>

         {isOpen && <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />}
      </header>
   );
};

export default Header;
