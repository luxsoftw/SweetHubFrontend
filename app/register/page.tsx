"use client";

import { Input } from "../components/input-form/index";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthLayout } from "../components/auth-layout";
import { AuthLeftSide } from "../components/auth-left-side";
import { AuthRightSide } from "../components/auth-right-side";
import { AuthButton } from "../components/auth-button";
import { useForm } from "react-hook-form";
import validator from "validator";
import { useHookFormMask } from "use-mask-input";
import InvolveInputError from "../components/involve-input-error";
import InputErrorMessage from "../components/input-error-message";
import RegisterFormType from "../types/register-form";
import { CheckBoxTerm } from "../components/checkbox-term";
import api from "../lib/axios";

const RegisterPage = () => {
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
      getValues,
      handleSubmit,
      formState: { errors },
   } = useForm<RegisterFormType>();

   const registerWithMask = useHookFormMask(register);

   const handleRegister = async (data: RegisterFormType) => {
      const cleanedData = {
         name: data.name,
         email: data.email,
         phone: data.phone.replace(/[^\d]/g, ""),
         password: data.password,
         comfirmPassword: data.confirmPassword,
      };
      try {
         const response = await api.post("/auth/sign-up/validate/user-info", {
            body: {
               ...cleanedData,
            },
         });

         if (response.status !== 201) {
            console.log("Falide request", response);
            return;
         }

         sessionStorage.setItem("userInfo", JSON.stringify(cleanedData));
         route.push("/register/informations");
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
               className="mt-4 flex w-full flex-grow flex-col space-y-8 md:mt-8"
               onSubmit={handleSubmit(handleRegister)}
            >
               <div className="flex flex-row items-center justify-center gap-5">
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
                  <h4 className="text-nowrap font-light text-black/50">
                     Registrar por email
                  </h4>
                  <div className="h-0.5 w-14 rounded bg-black/30 md:h-[0.080rem] md:w-20"></div>
               </div>
               <a
                  className="cursor-pointer text-center text-blue-600 md:hidden"
                  onClick={() => console.log("Navigate to login page")}
               >
                  Já possui conta? Entre aqui!
               </a>

               <div className="relative">
                  <Input.Root>
                     <Input.Form
                        {...register("name", {
                           required: true,
                           maxLength: 20,
                           minLength: 3,
                        })}
                        type="text"
                        placeholder="Nome"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.name?.type === "required" && (
                        <InputErrorMessage>
                           Nome é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.name?.type === "minLength" && (
                        <InputErrorMessage>
                           Nome deve ter no mínimo 3 caracteres
                        </InputErrorMessage>
                     )}

                     {errors.name?.type === "maxLength" && (
                        <InputErrorMessage>
                           Nome deve ter no máximo 20 caracteres
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="relative">
                  <Input.Root>
                     <Input.Form
                        {...register("email", {
                           required: true,
                           validate: (value) => {
                              return validator.isEmail(value);
                           },
                        })}
                        type="email"
                        placeholder="E-mail"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.email?.type === "required" && (
                        <InputErrorMessage>
                           Email é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.email?.type === "validate" && (
                        <InputErrorMessage>Email inválido</InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="relative">
                  <Input.Root>
                     <Input.Form
                        {...registerWithMask("phone", "(99) 99999-9999", {
                           required: true,
                           validate: (value) => {
                              return validator.isMobilePhone(value, "pt-BR");
                           },
                        })}
                        type="tel"
                        placeholder="Número"
                        title="Please enter a valid phone number (10-11 digits)"
                     />
                  </Input.Root>

                  <InvolveInputError>
                     {errors.phone?.type === "required" && (
                        <InputErrorMessage>
                           Número de telefone é obrigatório
                        </InputErrorMessage>
                     )}

                     {errors.phone?.type === "validate" && (
                        <InputErrorMessage>
                           Número de telefone inválido
                        </InputErrorMessage>
                     )}
                  </InvolveInputError>
               </div>

               <div className="flex gap-4">
                  <div className="relative w-full">
                     <Input.Root>
                        <input
                           {...register("password", {
                              required: true,
                              minLength: 8,
                           })}
                           type="password"
                           placeholder="Senha"
                           className="h-10 w-28 rounded-md bg-transparent px-5 outline-none"
                        />
                     </Input.Root>

                     <InvolveInputError>
                        {errors.password?.type === "required" && (
                           <InputErrorMessage>
                              Senha é obrigatória
                           </InputErrorMessage>
                        )}

                        {errors.password?.type === "minLength" && (
                           <InputErrorMessage>
                              Senha deve ter no mínimo 8 caracteres
                           </InputErrorMessage>
                        )}
                     </InvolveInputError>
                  </div>

                  <div className="relative w-full">
                     <Input.Root>
                        <input
                           {...register("confirmPassword", {
                              required: true,
                              validate: (value) => {
                                 return value === getValues("password");
                              },
                           })}
                           type="password"
                           placeholder="Repita a senha"
                           className="flex h-10 w-28 flex-grow rounded-md bg-transparent px-5 outline-none"
                        />
                     </Input.Root>

                     <InvolveInputError>
                        {errors.confirmPassword?.type === "required" && (
                           <InputErrorMessage>
                              Confirmação de senha é obrigatória
                           </InputErrorMessage>
                        )}

                        {errors.confirmPassword?.type === "validate" && (
                           <InputErrorMessage>
                              Senhas não coincidem
                           </InputErrorMessage>
                        )}
                     </InvolveInputError>
                  </div>
               </div>

               <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-2">
                  <div className="relative">
                     <CheckBoxTerm {...register("terms", { required: true })}>
                        Aceito os termos de uso
                     </CheckBoxTerm>

                     <InvolveInputError>
                        {errors.terms?.type === "required" && (
                           <InputErrorMessage>
                              Aceitar os termos é obrigatório
                           </InputErrorMessage>
                        )}
                     </InvolveInputError>
                  </div>

                  <AuthButton title="CONTINUAR" />
               </div>
            </form>
         </AuthRightSide>
      </AuthLayout>
   );
};

export default RegisterPage;
