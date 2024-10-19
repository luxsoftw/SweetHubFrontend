"use client";

import Image from "next/image";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineAvTimer } from "react-icons/md";
import { CiHeart, CiSettings, CiPower } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";
import { TfiViewList } from "react-icons/tfi";
import SymbroLogo from "@/public/SymbroLogo.svg";
import { Separator } from "@/app/components/ui/separator";
import { ItemNavigation } from "./item-navigation";
import { DropDownItem, DropdownNavigation } from "./dropdown-navigation";
import { PiSquaresFourLight } from "react-icons/pi";

interface SidebarProps {
   className?: string;
}

export function Sidebar({ className }: SidebarProps) {
   return (
      <aside className={`${className} bg-white p-4 text-black`}>
         <div className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex flex-col items-center space-y-2">
               <Image width={150} height={150} alt="Logo" src={SymbroLogo} />

               {/*As propriedades desses items podem ser facilmente alterados assim como o seu caminho (href) e ícones*/}
               {/*Por enquanto vou deixar nomes temporários*/}

               {/*TODO: Mudar Icones para seguir um padrao */}
               <nav>
                  <ul className="flex flex-col items-start justify-center space-y-2 px-10 py-4">
                     <ItemNavigation
                        href="/system/dashboard"
                        name="Dashboard"
                        icon={MdOutlineAvTimer}
                     />

                     <DropdownNavigation
                        title="Precificação"
                        icon={PiSquaresFourLight}
                     >
                        <DropDownItem href="/system/pricing">
                           Configurações
                        </DropDownItem>
                        <DropDownItem href="/system/pricing/ingredients">
                           Ingredientes
                        </DropDownItem>
                     </DropdownNavigation>

                     <ItemNavigation
                        href="/system/favorites"
                        name="Favorites"
                        icon={CiHeart}
                     />
                     <ItemNavigation
                        href="/system/inbox"
                        name="Inbox"
                        icon={LuMessagesSquare}
                     />
                     <ItemNavigation
                        href="/system/orderlist"
                        name="Order List"
                        icon={FaListCheck}
                     />
                     <ItemNavigation
                        href="/system/productstock"
                        name="Product Stock"
                        icon={TfiViewList}
                     />
                  </ul>
               </nav>
            </div>

            <div className="flex flex-col items-center pb-20">
               <Separator />
               <ul className="flex flex-col items-start pl-2 pr-10">
                  <ItemNavigation
                     href="/system/settings"
                     name="Settings"
                     icon={CiSettings}
                  />
                  {/*Nesse item deve conter uma ação que no caso é deslogar e não uma rota*/}
                  {/*TODO: implementar função de deslogar*/}
                  <ItemNavigation
                     href="/system/log-out"
                     name="Logout"
                     icon={CiPower}
                  />
               </ul>
            </div>
         </div>
      </aside>
   );
}
