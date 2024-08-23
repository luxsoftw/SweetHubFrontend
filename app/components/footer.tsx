import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
   return (
      <footer className="mt-10 flex h-full flex-col items-center gap-12 bg-footer bg-cover bg-no-repeat text-white">
         <h1 className="pt-36">Está esperando o que?</h1>

         <button className="rounded-xl bg-[#F7A932] p-1 px-5 text-xs text-secondary">
            COMEÇAR
         </button>

         <div className="mt-10 flex items-center gap-4">
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

         <p className="mb-2 text-[10px]">© Lux Company 2024</p>
      </footer>
   );
};

export default Footer;
