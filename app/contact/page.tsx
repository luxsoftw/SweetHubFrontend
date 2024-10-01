"use client";

import { useForm } from "react-hook-form";
import HeaderContact from "./components/header-contact";

import validator from "validator";
import { useHookFormMask } from "use-mask-input";
import InvolveInputError from "../components/involve-input-error";
import InputErrorMessage from "../components/input-error-message";
import { TfiClose } from "react-icons/tfi";
import { useRouter } from "next/navigation";
import ContactFormType from "../types/contact-form";
import { InputFormContact } from "./components/input-form-contact";

const Contact = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ContactFormType>();

   const registerWithMask = useHookFormMask(register);

   const route = useRouter();

   const handleFormSubmit = (data: ContactFormType) => {
      console.log(data);
   };

   const handleGoBack = () => {
      route.back();
   };

   return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#00559E] px-4 sm:px-6 lg:px-8">
         <div className="h-full w-full rounded-lg bg-blue-900 p-8 shadow-lg md:max-w-4xl md:rounded-3xl lg:h-[700px]">
            <div className="lg:hidden">
               <HeaderContact />
            </div>

            <button onClick={handleGoBack} className="hidden lg:flex">
               <TfiClose size={25} className="text-white" />
            </button>

            <section className="hidden text-white lg:flex lg:flex-col">
               <h1 className="text-center text-5xl font-bold">
                  Diga Olá para nós
               </h1>

               <h1 className="pt-2 text-center text-[25px] font-normal">
                  Entre em contato conosco a qualquer momento e responderemos o
                  mais rápido possível.
               </h1>
            </section>

            <section className="w-full">
               <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  className="mt-7 flex w-full flex-col gap-y-5 md:grid md:grid-cols-2 md:flex-row md:gap-4 md:gap-y-10"
               >
                  <div className="relative">
                     <InputFormContact
                        type="text"
                        {...register("name", {
                           required: true,
                           maxLength: 50,
                           minLength: 3,
                        })}
                        placeholder="Qual seu nome? *"
                     />

                     <InvolveInputError>
                        {errors.name?.type === "required" && (
                           <InputErrorMessage>
                              Nome é obrigatorio
                           </InputErrorMessage>
                        )}

                        {errors.name?.type === "maxLength" && (
                           <InputErrorMessage>
                              Nome deve ter nom máximo 50 caracteres
                           </InputErrorMessage>
                        )}

                        {errors.name?.type === "minLength" && (
                           <InputErrorMessage>
                              Nome deve ter no mínimo 3 caracteres
                           </InputErrorMessage>
                        )}
                     </InvolveInputError>
                  </div>

                  <div className="relative">
                     <InputFormContact
                        type="email"
                        {...register("email", {
                           required: true,
                           validate: (value) => {
                              return validator.isEmail(value);
                           },
                        })}
                        placeholder="Qual seu e-mail? *"
                     />

                     <div className="botton-[-10px] left-0 mb-[-10px] md:absolute">
                        {errors.email?.type === "required" && (
                           <InputErrorMessage>
                              Email é obrigatorio
                           </InputErrorMessage>
                        )}

                        {errors.email?.type === "validate" && (
                           <InputErrorMessage>Email inválido</InputErrorMessage>
                        )}
                     </div>
                  </div>

                  <div className="relative">
                     <InputFormContact
                        {...registerWithMask("phone", "(99) 99999-9999", {
                           required: true,
                           validate: (value) => {
                              return validator.isMobilePhone(value, "pt-BR");
                           },
                        })}
                        type="tel"
                        placeholder="Qual seu telefone?"
                     />

                     <InvolveInputError>
                        {errors.phone?.type === "required" && (
                           <InputErrorMessage>
                              Telefone é obrigatorio
                           </InputErrorMessage>
                        )}

                        {errors.phone?.type === "validate" && (
                           <InputErrorMessage>
                              Telefone inválido
                           </InputErrorMessage>
                        )}
                     </InvolveInputError>
                  </div>

                  <div className="relative">
                     <InputFormContact
                        type="text"
                        {...register("company", {
                           maxLength: 50,
                           minLength: 2,
                        })}
                        placeholder="Qual é a sua empresa?"
                     />

                     <InvolveInputError>
                        {errors.company?.type === "maxLength" && (
                           <InputErrorMessage>
                              Nome da empresa deve ter nom máximo 50 caracteres
                           </InputErrorMessage>
                        )}

                        {errors.company?.type === "minLength" && (
                           <InputErrorMessage>
                              Nome da empresa deve ter no mínimo 3 caracteres
                           </InputErrorMessage>
                        )}
                     </InvolveInputError>
                  </div>

                  <div className="relative col-span-2">
                     <textarea
                        {...register("message", {
                           required: true,
                           maxLength: 500,
                           minLength: 10,
                        })}
                        placeholder="Escreva sua mensagem aqui"
                        className="w-full rounded-md border border-white bg-transparent p-4 text-white placeholder:text-white focus:border-none focus:text-[#F7A932] focus:outline-none focus:ring-2 focus:ring-[#F7A932] focus:placeholder:text-[#F7A932]"
                        rows={4}
                     ></textarea>

                     <InvolveInputError>
                        {errors.message?.type === "required" && (
                           <InputErrorMessage>
                              Mensagem é obrigatorio
                           </InputErrorMessage>
                        )}

                        {errors.message?.type === "maxLength" && (
                           <InputErrorMessage>
                              Mensagem deve ter nom máximo 500 caracteres
                           </InputErrorMessage>
                        )}

                        {errors.message?.type === "minLength" && (
                           <InputErrorMessage>
                              Mensagem deve ter no mínimo 10 caracteres
                           </InputErrorMessage>
                        )}
                     </InvolveInputError>
                  </div>

                  <section className="col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                     <div className="relative">
                        <div className="flex items-center gap-3 md:gap-4">
                           <input
                              {...register("terms", { required: true })}
                              type="checkbox"
                              className="h-6 w-6 accent-[#F7A932]"
                           />
                           <p className="text-sm font-normal text-white md:text-base">
                              Li e aceito os Termos de Serviço e a{" "}
                              <span className="text-[#F7A932]">
                                 Política de Privacidade
                              </span>
                           </p>
                        </div>

                        <InvolveInputError>
                           {errors.terms?.type === "required" && (
                              <InputErrorMessage>
                                 Aceite os termos para continuar
                              </InputErrorMessage>
                           )}
                        </InvolveInputError>
                     </div>

                     <button
                        type="submit"
                        className="mt-0 hidden h-[50px] w-[250px] items-center justify-center rounded-3xl bg-[#F7A932] text-center font-normal text-white hover:bg-yellow-500 md:flex"
                     >
                        ENVIAR MENSAGEM
                     </button>

                     <button
                        type="submit"
                        className="mx-auto mt-3 flex h-[45px] w-full items-center justify-center rounded-md bg-[#F7A932] px-4 text-center font-normal text-white hover:bg-yellow-500 md:hidden"
                     >
                        ENVIAR
                     </button>
                  </section>
               </form>
            </section>
         </div>
      </div>
   );
};

export default Contact;
