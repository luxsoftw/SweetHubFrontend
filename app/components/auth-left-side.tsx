"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TfiClose } from "react-icons/tfi";

interface AuthLeftSideProps {
   // handleClose: () => void;
   title: string;
   subtitle?: string;
}

export function AuthLeftSide({ title, subtitle }: AuthLeftSideProps) {
   const route = useRouter();

   const handleClose = () => {
      route.back();
   };

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
         <h1 className="mb-4 text-4xl font-normal">{title}</h1>
         <p className="mb-4 text-xl font-light">{subtitle}</p>
      </div>
   );
}
