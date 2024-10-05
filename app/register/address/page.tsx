"use client";

import { AuthButton } from "@/app/components/auth-button";
import { useRouter } from "next/navigation";
import { Input } from "@/app/components/input-form/index";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import InvolveInputError from "@/app/components/involve-input-error";
import InputErrorMessage from "@/app/components/input-error-message";
import AddressFormType from "@/app/types/address-form";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";

const AddressRegisterPage = () => {
   const [isCep, setIsCep] = useState("");

   const route = useRouter();

   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors, isSubmitting },
   } = useForm<AddressFormType>();

   const registerWithMask = useHookFormMask(register);

   const handleInputCepChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsCep(e.target.value);
   };

   const searchCep = async () => {
      try {
         const response = await axios.get(
            `https://viacep.com.br/ws/${isCep}/json/`,
         );

         if (response.data.erro) {
            console.log("CEP não encontrado");
            return;
         }

         setValue("state", response.data.estado);
         setValue("city", response.data.localidade);
         setValue("fullAddress", response.data.logradouro);
         setValue("neighborhood", response.data.bairro);
      } catch (error) {
         console.log("Erro ao buscar CEP:", error);
      }
   };

   const handleAddress = async (data: AddressFormType) => {
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
      const userInformations = JSON.parse(
         sessionStorage.getItem("userInformations") || "{}",
      );

      if (!userInfo || !userInformations) {
         console.log("User information not found");
         return;
      }

      const cleanedData = {
         ...userInfo,
         ...userInformations,
         ...data,
         cep: data.cep.replace(/[^\d]/g, ""),
      };

      const response = await fetch(
         "https://sweethubbackend.onrender.com/auth/sign-up",

         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               ...cleanedData,
            }),
         },
      );

      if (response.status !== 201) {
         console.log("Falide request", response);
         return;
      }

      route.push("/validation");
   };

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
            onSubmit={handleSubmit(handleAddress)}
            className="mt-4 flex w-full flex-grow flex-col space-y-8 md:mt-8"
         >
            <div className="relative w-full">
               <Input.Root>
                  <Input.Form
                     {...registerWithMask("cep", "99999-999", {
                        required: true,
                        minLength: 8,
                     })}
                     value={isCep}
                     onChange={handleInputCepChange}
                     type="text"
                     placeholder="CEP"
                  />
                  <Input.IconSearch onClick={searchCep} />
               </Input.Root>

               <InvolveInputError>
                  {errors.cep?.type === "required" && (
                     <InputErrorMessage>CEP é obrigatório</InputErrorMessage>
                  )}

                  {errors.cep?.type === "minLength" && (
                     <InputErrorMessage>
                        CEP deve conter 8 caracteres
                     </InputErrorMessage>
                  )}
               </InvolveInputError>
            </div>

            <div className="relative w-full">
               <Input.Root>
                  <Input.Form
                     {...register("state", {
                        required: true,
                        minLength: 2,
                        maxLength: 20,
                     })}
                     type="text"
                     placeholder="ESTADO"
                  />
               </Input.Root>

               <InvolveInputError>
                  {errors.state?.type === "required" && (
                     <InputErrorMessage>Estado é obrigatório</InputErrorMessage>
                  )}

                  {errors.state?.type === "minLength" && (
                     <InputErrorMessage>
                        Estado deve conter no mínimo 2 caracteres
                     </InputErrorMessage>
                  )}

                  {errors.state?.type === "maxLength" && (
                     <InputErrorMessage>
                        Estado deve conter no máximo 20 caracteres
                     </InputErrorMessage>
                  )}
               </InvolveInputError>
            </div>

            <div className="relative w-full">
               <Input.Root>
                  <Input.Form
                     {...register("city", {
                        required: true,
                        minLength: 2,
                        maxLength: 20,
                     })}
                     type="text"
                     placeholder="CIDADE"
                  />
               </Input.Root>

               <InvolveInputError>
                  {errors.city?.type === "required" && (
                     <InputErrorMessage>Cidade é obrigatória</InputErrorMessage>
                  )}

                  {errors.city?.type === "minLength" && (
                     <InputErrorMessage>
                        Cidade deve conter no mínimo 2 caracteres
                     </InputErrorMessage>
                  )}

                  {errors.city?.type === "maxLength" && (
                     <InputErrorMessage>
                        Cidade deve conter no máximo 20 caracteres
                     </InputErrorMessage>
                  )}
               </InvolveInputError>
            </div>

            <div className="relative w-full">
               <Input.Root>
                  <Input.Form
                     {...register("fullAddress", {
                        required: true,
                        minLength: 2,
                        maxLength: 50,
                     })}
                     type="text"
                     placeholder="ENDEREÇO COMPLETO"
                  />
               </Input.Root>

               <InvolveInputError>
                  {errors.fullAddress?.type === "required" && (
                     <InputErrorMessage>
                        Endereço é obrigatório
                     </InputErrorMessage>
                  )}

                  {errors.fullAddress?.type === "minLength" && (
                     <InputErrorMessage>
                        Endereço deve conter no mínimo 2 caracteres
                     </InputErrorMessage>
                  )}

                  {errors.fullAddress?.type === "maxLength" && (
                     <InputErrorMessage>
                        Endereço deve conter no máximo 50 caracteres
                     </InputErrorMessage>
                  )}
               </InvolveInputError>
            </div>

            <div className="flex gap-4">
               <div className="relative w-2/3">
                  <Input.Root>
                     <input
                        {...register("neighborhood", {
                           required: true,
                        })}
                        type="text"
                        placeholder="BAIRRO"
                        className="flex h-10 w-28 flex-grow rounded-md bg-transparent px-5 outline-none"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.neighborhood?.type === "required" && (
                        <InputErrorMessage>
                           Estado é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.neighborhood?.type === "maxLength" && (
                        <InputErrorMessage>
                           Estado deve conter no máximo 20 caracteres
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="relative w-1/3">
                  <Input.Root>
                     <input
                        {...register("addressNumber", {
                           required: true,
                           maxLength: 20,
                        })}
                        type="text"
                        placeholder="NÚMERO"
                        className="h-10 w-28 rounded-md bg-transparent px-5 outline-none"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.addressNumber?.type === "required" && (
                        <InputErrorMessage>
                           Senha é obrigatória
                        </InputErrorMessage>
                     )}

                     {errors.addressNumber?.type === "minLength" && (
                        <InputErrorMessage>
                           Senha deve ter no mínimo 8 caracteres
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>
            </div>

            {isSubmitting ? (
               <button
                  disabled
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
};

export default AddressRegisterPage;
