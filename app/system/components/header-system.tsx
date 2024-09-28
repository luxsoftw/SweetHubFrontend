import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from "@/app/components/ui/avatar";
import { ReactNode } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { SelectLanguageList } from "./select-language-list";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

interface HeaderSystemProps {
   children: ReactNode;
}

export function HeaderSystem({ children }: HeaderSystemProps) {
   return (
      <>
         <div className="flex flex-row justify-between px-7 pb-2 pt-5">
            {/*Barra de Pesquisa*/}
            <label className="flex flex-row items-center gap-5 rounded-full border border-[#D5D5D5] bg-[#F5F6FA] px-5">
               <FaMagnifyingGlass size={20} className="text-black/30" />
               <input
                  type="text"
                  placeholder="Pesquisar"
                  className="w-max-80 w-min-60 w-72 bg-transparent outline-none"
               />
            </label>

            {/*Informações do usário*/}
            <div className="flex flex-row items-center gap-10">
               {/* Ícone de Notificação temporário*/}
               <IoNotifications size={20} />

               {/*Mudar a bandeira de acordo com a lingua selecionada*/}
               <div className="flex flex-row gap-5">
                  <Image
                     className="rounded-lg"
                     alt="flag"
                     width={35}
                     height={35}
                     src={"/br-flag.svg"}
                  />
                  <SelectLanguageList />
               </div>

               <Avatar className="h-[3em] w-[3em]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>FE</AvatarFallback>
               </Avatar>

               <div>
                  <h1 className="font-bold">Moni Roy</h1>
                  <h2>Admin</h2>
               </div>
               <button className="flex h-[25px] w-[25px] flex-col items-center justify-center rounded-full border border-black/30">
                  <MdKeyboardArrowDown size="20" />
               </button>
            </div>
         </div>
         {children}
      </>
   );
}
