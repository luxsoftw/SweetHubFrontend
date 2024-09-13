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

interface AddressCepType {
   city: string;
   state: string;
   street: string;
}

const AddressRegisterPage = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isCep, setIsCep] = useState("");
   const [address, setAddress] = useState<AddressCepType>({
      city: "",
      state: "",
      street: "",
   });

   const router = useRouter();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<AddressFormType>();

   const registerWithMask = useHookFormMask(register);

   const closePage = () => {
      router.back();
   };

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const handleInputCepChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsCep(e.target.value);
   };

   const searchCep = async () => {
      const response = await axios.get(
         `https://viacep.com.br/ws/${isCep}/json/`,
      );

      if (response.status === 400) {
         console.log("CEP não encontrado");
      }

      setAddress({
         city: response.data.localidade,
         state: response.data.estado,
         street: response.data.logradouro,
      });
   };

   const handleAddress = (data: AddressFormType) => {
      console.log(data);
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
                        value={address.state}
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
                        value={address.city}
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
                        value={address.street}
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

               <AuthButton type="submit" title="Continuar" />
            </form>
         </AuthRightSide>
      </AuthLayout>
   );
};

export default AddressRegisterPage;
