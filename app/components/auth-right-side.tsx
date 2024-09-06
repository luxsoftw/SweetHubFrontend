import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import MenuMobile from "./menu-mobile";

interface AuthRightSideProps {
   title?: string;
   isOpen: boolean;
   handleToggleMenu: () => void;
   children: React.ReactNode;
}

export function AuthRightSide({
   title = "Registrar",
   isOpen,
   handleToggleMenu,
   children,
}: AuthRightSideProps) {
   return (
      <div className="flex w-full flex-col p-4 md:w-1/2 md:flex-grow md:p-8">
         <div className="flex w-full flex-col gap-10 p-4 md:flex-grow md:p-6">
            <header className="flex flex-row items-center justify-between md:flex md:items-center md:justify-between">
               <FaArrowLeft size={30} className="md:hidden" />
               <div className="flex flex-col items-center justify-center gap-2 md:flex md:items-start md:justify-start md:gap-5">
                  <h2 className="pb-2 text-3xl font-semibold md:text-5xl md:font-bold">
                     {title}
                  </h2>
                  <div className="h-2 w-24 rounded-md bg-blue-600 md:h-3 md:w-20 md:rounded-md"></div>
               </div>

               <button className="md:hidden" onClick={handleToggleMenu}>
                  <IoMenu className="size-8 text-secondary" />
               </button>

               {isOpen && (
                  <MenuMobile isOpen={isOpen} toggleMenu={handleToggleMenu} />
               )}

               <div className="hidden gap-2 md:flex md:flex-row md:items-center">
                  <FaArrowRight size={18} className="text-[#00559E]" />
                  <button className="text-blue-600">
                     Já possui uma conta?
                  </button>
               </div>
            </header>
            {children}
         </div>
      </div>
   );
}
