import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

interface MenuMobileProps {
   isOpen: boolean;
   toggleMenu: () => void;
}

const MenuMobile = ({ isOpen, toggleMenu }: MenuMobileProps) => {
   const route = useRouter();

   return (
      <section
         className={`fixed inset-0 z-50 text-white backdrop-blur-sm ${isOpen ? "animate-opacity" : "animate-closeopacity"} `}
      >
         <div
            className={`absolute right-0 top-0 z-50 h-screen w-[75%] max-w-[500px] border-l border-blue-900 bg-tertiary ${isOpen ? "animate-menubar" : "animate-closemenubar"}`}
         >
            <div className="flex justify-between p-5 text-white hover:text-red-500">
               <span className="text-xl">Menu</span>

               <button>
                  <IoClose onClick={toggleMenu} className="size-6" />
               </button>
            </div>

            <nav className="flex w-full flex-col items-center gap-10 px-5 pt-10">
               <button
                  onClick={() => {
                     if (window.location.pathname === "/") {
                        toggleMenu();
                     }
                     route.push("/");
                  }}
                  className="w-full px-5 py-1 text-center text-xl font-semibold hover:bg-[#1e72e0a4]"
               >
                  Inicio
               </button>

               <button
                  onClick={() => {
                     if (window.location.pathname === "/prices") {
                        toggleMenu();
                     }
                     route.push("/prices");
                  }}
                  className="w-full px-5 py-1 text-center text-xl font-semibold hover:bg-[#1e72e0a4]"
               >
                  Preço
               </button>

               <button
                  onClick={() => {
                     if (window.location.pathname === "/contact") {
                        toggleMenu();
                     }
                     route.push("/contact");
                  }}
                  className="w-full px-5 py-1 text-center text-xl font-semibold hover:bg-[#1e72e0a4]"
               >
                  Contato
               </button>

               <div className="flex flex-col gap-7">
                  <button
                     onClick={() => {
                        if (window.location.pathname === "/login") {
                           toggleMenu();
                        }
                        route.push("/login");
                     }}
                     className="w-[117px] rounded-2xl bg-[#F7A932] py-1 text-center font-semibold"
                  >
                     Entrar
                  </button>

                  <button
                     onClick={() => {
                        if (window.location.pathname === "/register") {
                           toggleMenu();
                        }
                        route.push("/register");
                     }}
                     className="w-[117px] rounded-2xl bg-[#F7A932] py-1 text-center font-semibold"
                  >
                     Cadastrar
                  </button>
               </div>
            </nav>
         </div>
      </section>
   );
};

export default MenuMobile;
