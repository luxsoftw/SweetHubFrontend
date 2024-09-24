import type { Metadata } from "next";
import { AuthLayout } from "../components/auth-layout";
import { AuthLeftSide } from "../components/auth-left-side";
import { AuthRightSide } from "../components/auth-right-side";

export const metadata: Metadata = {
   title: "Registro",
   description: "Página de Registro",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <AuthLayout>
            <AuthLeftSide
               title="Prazer em conhece-lo :)"
               subtitle="Basta se registrar para se juntar a nós"
            />
            <AuthRightSide>{children}</AuthRightSide>
         </AuthLayout>
      </>
   );
}
