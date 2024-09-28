import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementType } from "react";
interface ItemNavigationProps {
   name: string;
   icon: ElementType;
   href: string;
}

export const ItemNavigation = ({
   name,
   href,
   icon: Icon,
}: ItemNavigationProps) => {
   const pathname = usePathname();
   const isActive = pathname === href;

   return (
      <li>
         <Link
            href={href}
            replace
            className={`flex flex-row items-center space-x-2 px-4 ${
               isActive
                  ? "rounded-md bg-[#F7A932] text-white"
                  : "text-black hover:text-gray-600"
            }`}
         >
            <Icon className="text-black" size={20} />
            <h1 className="flex-nowrap p-3 text-base">{name}</h1>
         </Link>
      </li>
   );
};
