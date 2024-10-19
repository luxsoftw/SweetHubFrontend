"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";
import { IoChevronDown } from "react-icons/io5";
import { ElementType } from "react";

interface DropdownItemProps {
   href: string;
   children: ReactNode;
}

export const DropDownItem = ({ href, children }: DropdownItemProps) => {
   const [isActive, setIsActive] = useState<boolean>(false);

   const pathname = usePathname();
   useEffect(() => {
      setIsActive(pathname === href);
   }, [href, pathname]);

   return (
      <>
         <Link href={href}>
            <li
               className={`"py-1 text-xs" hover:text-orange-500 ${isActive && "text-orange-500"}`}
            >
               {children}
            </li>
         </Link>
      </>
   );
};

interface DropdownNavigationProps {
   children: ReactNode;
   icon: ElementType;
   title: string;
}

// TODO:: fix color dropdownButton
export function DropdownNavigation({
   title,
   children,
   icon: Icon,
}: DropdownNavigationProps) {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const pathname = usePathname();
   const isPricingActive = pathname.startsWith("/system/pricing");

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="">
         <div
            className={`group flex flex-row items-center space-x-2 px-4 ${
               isPricingActive
                  ? "rounded-md bg-[#F7A932] text-white"
                  : "text-black hover:text-gray-600"
            }`}
            onClick={toggleDropdown}
         >
            <Icon
               className={`${isPricingActive ? "text-white group-hover:text-white" : "text-black group-hover:text-[#F7A932]"}`}
               size={20}
            />
            <h2
               className={`flex-nowrap p-3 text-base ${
                  isPricingActive ? "text-white" : "group-hover:text-[#F7A932]"
               }`}
            >
               {title}
            </h2>
            <IoChevronDown
               className={`transition-transform ${
                  isOpen ? "rotate-180" : ""
               } ${isPricingActive ? "text-white" : "group-hover:text-[#F7A932]"}`}
            />
         </div>
         {isOpen && (
            <div className="pl-14">
               <ul className="mt-2 flex flex-col gap-2">{children}</ul>
            </div>
         )}
      </div>
   );
}
