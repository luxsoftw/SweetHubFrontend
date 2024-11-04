"use client";

import { useEffect } from "react";
import { AuthButton } from "@/app/components/auth-button";
import { useRouter } from "next/navigation";
import { Input } from "@/app/components/input-form/index";
import { ChangeEvent, useState } from "react";
import InvolveInputError from "@/app/components/involve-input-error";
import InputErrorMessage from "@/app/components/input-error-message";
import { VscLoading } from "react-icons/vsc";
import { useFormState, useFormStatus } from "react-dom";
import { singUpUser } from "./actions";
import { withMask } from "use-mask-input";
import { getCep } from "@/app/http/get-cep";

const initialState = {
   success: false,
   message: null,
   errors: null,
};

export function AddressForm() {
   const route = useRouter();
   const [addressData, setAddressData] = useState({
      cep: "",
      fullAddress: "",
      city: "",
      state: "",
      neighborhood: "",
   });

   const [error, setError] = useState<string>("");

   const { pending } = useFormStatus();
   const [{ success, message, errors }, formAction] = useFormState(
      singUpUser,
      initialState,
   );

   const fetchAddress = async (cep: string) => {
      try {
         const cleanCep = cep.replace(/\D/g, ""); // Remove caracteres não numéricos

         if (cleanCep.length !== 8) {
            throw new Error("CEP inválido");
         }

         const data = await getCep({ cep: cleanCep });

         setAddressData((prev) => ({
            ...prev,
            fullAddress: data.logradouro || "",
            neighborhood: data.bairro || "",
            city: data.localidade || "",
            state: data.uf || "",
         }));

         setError("");
      } catch (err) {
         setError(err instanceof Error ? err.message : "Erro ao buscar CEP");
      }
   };

   const handleInputCepChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setAddressData((prev) => ({ ...prev, cep: value }));

      if (value.replace(/\D/g, "").length === 8) {
         fetchAddress(value);
      }
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setAddressData((prev) => ({ ...prev, [name]: value }));
   };

   useEffect(() => {
      if (success) {
         route.push("/system/pricing");
      }
   }, [success, route]);

   return (
      <>
         <div className="flex flex-row items-center justify-center gap-5">
            <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
            <h4 className="text-nowrap font-light text-black/50">
               Informações de Localidade
            </h4>
            <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
         </div>
         <form
            action={formAction}
            className="mt-4 flex w-full flex-grow flex-col space-y-8 md:mt-8"
         >
            {/* TODO: make a alert or something else to show message error */}
            {!success && message && <h1 className="text-red-500">{message}</h1>}
            <div className="relative w-full">
               <Input.Root>
                  <Input.Form
                     ref={withMask("99999-999")}
                     value={addressData.cep}
                     name="cep"
                     id="cep"
                     onChange={handleInputCepChange}
                     type="text"
                     placeholder="CEP"
                  />
               </Input.Root>

               {errors?.cep && (
                  <InvolveInputError>
                     <InputErrorMessage>{errors.cep[0]}</InputErrorMessage>
                  </InvolveInputError>
               )}

               {error && (
                  <InvolveInputError>
                     <InputErrorMessage>{error}</InputErrorMessage>
                  </InvolveInputError>
               )}
            </div>

            <div className="relative w-full">
               <Input.Root>
                  <Input.Form
                     name="state"
                     id="state"
                     value={addressData.state}
                     onChange={handleInputChange}
                     type="text"
                     placeholder="ESTADO"
                  />
               </Input.Root>
               {errors?.state && (
                  <InvolveInputError>
                     <InputErrorMessage>{errors.state[0]}</InputErrorMessage>
                  </InvolveInputError>
               )}
            </div>

            <div className="relative w-full">
               <Input.Root>
                  <Input.Form
                     name="city"
                     value={addressData.city}
                     onChange={handleInputChange}
                     id="city"
                     type="text"
                     placeholder="CIDADE"
                  />
               </Input.Root>
               {errors?.city && (
                  <InvolveInputError>
                     <InputErrorMessage>{errors.city[0]}</InputErrorMessage>
                  </InvolveInputError>
               )}
            </div>

            <div className="relative w-full">
               <Input.Root>
                  <Input.Form
                     value={addressData.fullAddress}
                     onChange={handleInputChange}
                     name="fullAddress"
                     id="fullAddress"
                     type="text"
                     placeholder="ENDEREÇO COMPLETO"
                  />
               </Input.Root>
               {errors?.fullAddress && (
                  <InvolveInputError>
                     <InputErrorMessage>
                        {errors.fullAddress[0]}
                     </InputErrorMessage>
                  </InvolveInputError>
               )}
            </div>

            <div className="flex gap-4">
               <div className="relative w-2/3">
                  <Input.Root>
                     <input
                        name="neighborhood"
                        onChange={handleInputChange}
                        value={addressData.neighborhood}
                        id="neighborhood"
                        type="text"
                        placeholder="BAIRRO"
                        className="flex h-10 w-28 flex-grow rounded-md bg-transparent px-5 outline-none"
                     />
                  </Input.Root>
                  {errors?.neighborhood && (
                     <InvolveInputError>
                        <InputErrorMessage>
                           {errors.neighborhood[0]}
                        </InputErrorMessage>
                     </InvolveInputError>
                  )}
               </div>

               <div className="relative w-1/3">
                  <Input.Root>
                     <input
                        id="addressNumber"
                        onChange={handleInputChange}
                        name="addressNumber"
                        type="text"
                        placeholder="NÚMERO"
                        className="h-10 w-28 rounded-md bg-transparent px-5 outline-none"
                     />
                  </Input.Root>
                  {errors?.addressNumber && (
                     <InvolveInputError>
                        <InputErrorMessage>
                           {errors.addressNumber[0]}
                        </InputErrorMessage>
                     </InvolveInputError>
                  )}
               </div>
            </div>

            {pending ? (
               <button
                  disabled={pending}
                  className="flex w-full items-center justify-center gap-2 rounded bg-orange-400 p-2 text-white transition-colors hover:bg-orange-500 md:max-w-48 md:self-end md:rounded-3xl md:text-base"
               >
                  <VscLoading className="size-4 animate-spin" />
                  Finalizando...
               </button>
            ) : (
               <AuthButton type="submit" title="Finalizar" />
            )}
         </form>
      </>
   );
}
