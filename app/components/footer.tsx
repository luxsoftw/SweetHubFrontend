import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import Image from "next/image";

const Footer = () => {
   return (
      <footer className="md:text-bold mt-10 flex h-full flex-col items-center gap-8 bg-footer bg-cover bg-no-repeat text-white md:bg-footer-desktop md:text-2xl">
         <h1 className="pt-36">Está esperando o que?</h1>

         <div className="flex flex-col items-center justify-center gap-10">
            <button className="rounded-xl bg-[#F7A932] p-1 px-5 text-xs text-secondary md:rounded-full md:px-8 md:py-2 md:text-base">
               COMEÇAR
            </button>

            <Image
               src="/Logo.svg"
               height={80}
               width={80}
               alt="Logo"
               className="md:hidden"
            />
         </div>

         <div className="flex flex-col items-center justify-center gap-8 md:flex-row-reverse md:items-center md:justify-center md:gap-28 md:p-12">
            <div className="mt-10 flex items-center gap-4 md:mt-0">
               <a className="rounded-full bg-[#F7A932] p-1">
                  <FaFacebookF />
               </a>

               <a className="rounded-full bg-[#F7A932] p-1">
                  <RiLinkedinBoxFill />
               </a>

               <a className="rounded-full bg-[#F7A932] p-1">
                  <FaTwitter />
               </a>

               <a className="rounded-full bg-[#F7A932] p-1">
                  <AiFillInstagram />
               </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
               <Image
                  src="/Logo.svg"
                  height={80}
                  width={80}
                  alt="Logo"
                  className="hidden md:flex"
               />
               <p className="mb-2 text-[10px]">© Lux Company 2024</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
