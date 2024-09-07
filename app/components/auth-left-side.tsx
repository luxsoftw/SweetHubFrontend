import Image from "next/image";
import { TfiClose } from "react-icons/tfi";

interface AuthLeftSideProps {
   handleClose: () => void;
}

export function AuthLeftSide({ handleClose }: AuthLeftSideProps) {
   return (
      <div className="relative hidden md:flex md:w-1/2 md:flex-col md:items-center md:justify-center md:gap-6 md:rounded-l-3xl md:border-blue-800 md:bg-blue-800 md:p-6 md:text-center md:text-white">
         <button
            onClick={handleClose}
            className="absolute left-6 top-6 text-2xl text-white"
         >
            <TfiClose />
         </button>
         <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="Logo"
            className="pb-10"
         />
         <h1 className="mb-4 text-4xl font-normal">Prazer em conhece-lo :)</h1>
         <p className="mb-4 text-xl font-light">
            Basta se registrar para se juntar a nós
         </p>
      </div>
   );
}
