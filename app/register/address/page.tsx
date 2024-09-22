"use client";

import { AuthButton } from "@/app/components/auth-button";
import { AuthRightSide } from "@/app/components/auth-right-side";
import { useRouter } from "next/navigation";
import { Input } from "@/app/components/input-form/index";
import { ChangeEvent, useState } from "react";
import { AuthLayout } from "@/app/components/auth-layout";
import { AuthLeftSide } from "@/app/components/auth-left-side";
import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import InvolveInputError from "@/app/components/involve-input-error";
import InputErrorMessage from "@/app/components/input-error-message";
import AddressFormType from "@/app/types/address-form";
import axios from "axios";

const AddressRegisterPage = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isCep, setIsCep] = useState("");

   const route = useRouter();

   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm<AddressFormType>();

   const registerWithMask = useHookFormMask(register);

   const closePage = () => {
      route.back();
   };

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

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

         setValue("estado", response.data.estado);
         setValue("cidade", response.data.localidade);
         setValue("endereço", response.data.logradouro);
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
         neighborhood: "Não informado",
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

      route.push("/register/validation");
   };

   return (
      <AuthLayout>
         <AuthLeftSide
            title="Prazer em conhece-lo :)"
            subtitle="Basta se registrar para se juntar a nós"
            handleClose={closePage}
         />
         <AuthRightSide isOpen={isOpen} handleToggleMenu={toggleMenu}>
            <div className="flex flex-row items-center justify-center gap-5">
               <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
               <h4 className="text-nowrap font-light text-black/50">
                  Informações de Localidade
               </h4>
               <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
            </div>
            <form
               onSubmit={handleSubmit(handleAddress)}
               className="flex flex-col items-center gap-6"
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
                        {...register("estado", {
                           required: true,
                           minLength: 2,
                           maxLength: 20,
                        })}
                        type="text"
                        placeholder="ESTADO"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.estado?.type === "required" && (
                        <InputErrorMessage>
                           Estado é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.estado?.type === "minLength" && (
                        <InputErrorMessage>
                           Estado deve conter no mínimo 2 caracteres
                        </InputErrorMessage>
                     )}

                     {errors.estado?.type === "maxLength" && (
                        <InputErrorMessage>
                           Estado deve conter no máximo 20 caracteres
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="relative w-full">
                  <Input.Root>
                     <Input.Form
                        {...register("cidade", {
                           required: true,
                           minLength: 2,
                           maxLength: 20,
                        })}
                        type="text"
                        placeholder="CIDADE"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.cidade?.type === "required" && (
                        <InputErrorMessage>
                           Cidade é obrigatória
                        </InputErrorMessage>
                     )}

                     {errors.cidade?.type === "minLength" && (
                        <InputErrorMessage>
                           Cidade deve conter no mínimo 2 caracteres
                        </InputErrorMessage>
                     )}

                     {errors.cidade?.type === "maxLength" && (
                        <InputErrorMessage>
                           Cidade deve conter no máximo 20 caracteres
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="relative w-full">
                  <Input.Root>
                     <Input.Form
                        {...register("endereço", {
                           required: true,
                           minLength: 2,
                           maxLength: 50,
                        })}
                        type="text"
                        placeholder="ENDEREÇO COMPLETO"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.endereço?.type === "required" && (
                        <InputErrorMessage>
                           Endereço é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.endereço?.type === "minLength" && (
                        <InputErrorMessage>
                           Endereço deve conter no mínimo 2 caracteres
                        </InputErrorMessage>
                     )}

                     {errors.endereço?.type === "maxLength" && (
                        <InputErrorMessage>
                           Endereço deve conter no máximo 50 caracteres
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="relative w-full">
                  <Input.Root>
                     <Input.Form
                        {...register("numero", {
                           required: true,
                           maxLength: 20,
                        })}
                        type="text"
                        placeholder="NÚMERO"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.numero?.type === "required" && (
                        <InputErrorMessage>
                           Estado é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.numero?.type === "maxLength" && (
                        <InputErrorMessage>
                           Estado deve conter no máximo 20 caracteres
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <AuthButton type="submit" title="Continuar" />
            </form>
         </AuthRightSide>
      </AuthLayout>
   );
};

export default AddressRegisterPage;
