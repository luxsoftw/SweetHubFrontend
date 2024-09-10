"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MenuMobile from "./menu-mobile";
import { useRouter } from "next/navigation";

interface HeaderProps {
   color: string;
}

const Header = ({ color }: HeaderProps) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const route = useRouter();

   const handleRoute = (path: string) => {
      if (window.location.pathname === path) {
         return;
      }
      route.push(path);
   };

   return (
      <header className="flex h-14 items-center justify-between px-5 md:px-20 lg:justify-normal lg:gap-28 lg:pt-12">
         <div>
            <h1 className="text-xl lg:text-secondary">Logo</h1>
         </div>

         <div className="hidden w-full items-center justify-between text-secondary lg:flex">
            <nav className="flex items-center gap-6 text-xl font-semibold">
               <button onClick={() => handleRoute("/")}>Home</button>
               <button onClick={() => handleRoute("/prices")}>Preço</button>
               <button onClick={() => handleRoute("/contact")}>Contato</button>
            </nav>

            <nav className="flex items-center gap-4 text-xl">
               <button
                  onClick={() => handleRoute("/login")}
                  className="rounded-3xl bg-[#F7A932] px-5 py-1 text-lg font-semibold"
               >
                  Entrar
               </button>
               <button
                  onClick={() => handleRoute("/register")}
                  className="rounded-3xl bg-[#F7A932] px-5 py-1 text-lg font-semibold"
               >
                  Cadastrar
               </button>
            </nav>
         </div>

         <button onClick={toggleMenu} className="lg:hidden">
            <IoMenu className={`size-8 ${color} `} />
         </button>

         {isOpen && <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />}
      </header>
   );
};

export default Header;
