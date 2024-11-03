interface getCepRequest {
   cep: string;
}

export type getCepResponse = {
   uf: string;
   localidade: string;
   logradouro: string;
   bairro: string;
};

export async function getCep({ cep }: getCepRequest) {
   const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
   const data = (await response.json()) as getCepResponse;
   return data;
}
