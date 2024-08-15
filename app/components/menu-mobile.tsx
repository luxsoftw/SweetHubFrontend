import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";

interface MenuMobileProps {
   isOpen: boolean;
   toggleMenu: () => void;
}

const MenuMobile = ({ isOpen, toggleMenu }: MenuMobileProps) => {
   const route = useRouter();

   return (
      <section
         className={`fixed inset-0 backdrop-blur-sm ${isOpen ? "animate-opacity" : "animate-closeopacity"} `}
      >
         <div
            className={`absolute right-0 top-0 z-50 h-screen w-[75%] max-w-[500px] border-l border-blue-900 bg-tertiary ${isOpen ? "animate-menubar" : "animate-closemenubar"}`}
         >
            <div className="flex justify-end p-5 text-primary hover:text-red-500">
               <button>
                  <IoClose onClick={toggleMenu} className="size-6" />
               </button>
            </div>

            <nav className="flex w-full flex-col items-end gap-2 px-5">
               <div
                  onClick={() => {
                     if (window.location.pathname === "/") {
                        toggleMenu();
                     }
                     route.push("/");
                  }}
                  className="w-full border border-[#dbdadab4] px-5 py-1 text-start text-lg hover:bg-[#1e72e0a4]"
               >
                  Inicio
               </div>

               <div
                  onClick={() => {
                     if (window.location.pathname === "/prices") {
                        toggleMenu();
                     }
                     route.push("/prices");
                  }}
                  className="w-full border border-[#dbdadab4] px-5 py-1 text-start text-lg hover:bg-[#1e72e0a4]"
               >
                  Preço
               </div>

               <div
                  onClick={() => {
                     if (window.location.pathname === "/contact") {
                        toggleMenu();
                     }
                     route.push("/contact");
                  }}
                  className="w-full border border-[#dbdadab4] px-5 py-1 text-start text-lg hover:bg-[#1e72e0a4]"
               >
                  Contato
               </div>

               <div
                  onClick={() => {
                     if (window.location.pathname === "/login") {
                        toggleMenu();
                     }
                     route.push("/login");
                  }}
                  className="mt-2 flex w-full items-center gap-2 border border-[#dbdadab4] px-5 py-1 text-start text-lg hover:bg-[#1e72e0a4]"
               >
                  <MdOutlineLogin className="size-5" /> Login
               </div>
            </nav>
         </div>
      </section>
   );
};

export default MenuMobile;
