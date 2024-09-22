"use client";

import { AuthButton } from "@/app/components/auth-button";
import { AuthLayout } from "@/app/components/auth-layout";
import { AuthLeftSide } from "@/app/components/auth-left-side";
import { AuthRightSide } from "@/app/components/auth-right-side";
import InputErrorMessage from "@/app/components/input-error-message";
import { Input } from "@/app/components/input-form/index";
import InvolveInputError from "@/app/components/involve-input-error";
import api from "@/app/lib/axios";
import InformationsFormType from "@/app/types/informations-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";

const GeneralInformationRegisterPage = () => {
   const route = useRouter();
   const [isOpen, setIsOpen] = useState(false);

   const handleClose = () => {
      route.back();
   };

   const handleToggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<InformationsFormType>();

   const registerWithMask = useHookFormMask(register);

   const handleInformations = async (data: InformationsFormType) => {
      try {
         const response = await api.post(
            "/auth/sign-up/validate/company-info",
            {
               body: {
                  cnpj: data.cnpj,
                  cpf: data.cpf,
                  companyName: data.corporateName,
                  fantasyName: data.fantasyName,
               },
            },
         );

         if (response.status !== 201) {
            console.log("Falide request", response);
            return;
         }

         sessionStorage.setItem("userInformations", JSON.stringify(data));
         route.push("/register/address");
      } catch (error) {
         console.log("Failed to register user", error);
      }
   };

   return (
      <AuthLayout>
         <AuthLeftSide
            title="Prazer em conhece-lo :)"
            subtitle="Basta se registrar para se juntar a nós"
            handleClose={handleClose}
         />
         <AuthRightSide isOpen={isOpen} handleToggleMenu={handleToggleMenu}>
            <form
               onSubmit={handleSubmit(handleInformations)}
               className="flex flex-col items-center gap-10"
            >
               <div className="flex flex-row items-center justify-center gap-5">
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
                  <h4 className="text-nowrap font-light text-black/50">
                     Informações gerais
                  </h4>
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
               </div>
               <div className="relative w-full">
                  <Input.Root>
                     <Input.Form
                        {...registerWithMask("cnpj", "cnpj", {
                           required: true,
                           pattern: {
                              value: /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/,
                              message: "CNPJ inválido",
                           },
                        })}
                        type="text"
                        placeholder="CNPJ"
                        className="flex-grow"
                     />
                     <Input.IconSearch
                        onClick={() => {
                           console.log("Search for CNPJ");
                        }}
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.cnpj?.type === "required" && (
                        <InputErrorMessage>
                           CNPJ é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.cnpj?.type === "pattern" && (
                        <InputErrorMessage>
                           {String(errors.cnpj.message)}
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="relative w-full">
                  <Input.Root>
                     <Input.Form
                        {...registerWithMask("cpf", "cpf", {
                           required: true,
                           pattern: {
                              value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                              message: "CPF inválido",
                           },
                        })}
                        name="cpf"
                        placeholder="CPF"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.cpf?.type === "required" && (
                        <InputErrorMessage>CPF é obrigatório</InputErrorMessage>
                     )}

                     {errors.cpf?.type === "pattern" && (
                        <InputErrorMessage>
                           {String(errors.cpf.message)}
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="relative w-full">
                  <Input.Root>
                     <Input.Form
                        {...register("corporateName", {
                           required: true,
                           maxLength: 20,
                           minLength: 2,
                        })}
                        name="corporateName"
                        placeholder="Razão Social"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.corporateName?.type === "required" && (
                        <InputErrorMessage>
                           Razão Social é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.corporateName?.type === "minLength" && (
                        <InputErrorMessage>
                           Razão Social deve ter no mínimo 2 caracteres
                        </InputErrorMessage>
                     )}

                     {errors.corporateName?.type === "maxLength" && (
                        <InputErrorMessage>
                           Razão Social deve ter no máximo 20 caracteres
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="relative w-full">
                  <Input.Root>
                     <Input.Form
                        {...register("fantasyName", {
                           required: true,
                           maxLength: 20,
                           minLength: 2,
                        })}
                        name="fantasyName"
                        placeholder="Nome Fantasia"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.fantasyName?.type === "required" && (
                        <InputErrorMessage>
                           Nome Fantasia é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.fantasyName?.type === "minLength" && (
                        <InputErrorMessage>
                           Nome Fantasia deve ter no mínimo 2 caracteres
                        </InputErrorMessage>
                     )}

                     {errors.fantasyName?.type === "maxLength" && (
                        <InputErrorMessage>
                           Nome Fantasia deve ter no máximo 20 caracteres
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <AuthButton title="CONTINUAR" />
            </form>
         </AuthRightSide>
      </AuthLayout>
   );
};

export default GeneralInformationRegisterPage;
