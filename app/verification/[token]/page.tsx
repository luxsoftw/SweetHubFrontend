"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { VscLoading } from "react-icons/vsc";

interface VerificationPageProps {
   params: {
      token: string;
   };
}

const VerificationPage = ({ params: { token } }: VerificationPageProps) => {
   const route = useRouter();

   const verifyToken = async () => {
      const response = await fetch(
         `https://sweethubbackend.onrender.com/auth/email-validate/`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
         },
      );

      if (response.status !== 201) {
         console.log("Failed to validate user", response);
         return;
      }

      route.push("/login");
   };

   useEffect(() => {
      verifyToken();
   }, []);

   return (
      <div className="flex h-screen w-full items-center justify-center">
         <VscLoading className="size-40 animate-spin" />
      </div>
   );
};

export default VerificationPage;
