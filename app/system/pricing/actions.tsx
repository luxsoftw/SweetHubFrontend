"use server";

/*
   When back-end still finish we go to use this file to make fetch
*/
export async function workForceFormAction(data: FormData) {
   const parsedData = Object.fromEntries(data);
   console.log(parsedData);
}

export async function salesCostsFormAction(data: FormData) {
   const parsedData = Object.fromEntries(data);
   console.log(parsedData);
}

export async function salesTargetFormAction(data: FormData) {
   const parsedData = Object.fromEntries(data);
   console.log(parsedData);
}

export async function priceFormationFormAction(data: FormData) {
   const parsedData = Object.fromEntries(data);
   console.log(parsedData);
}
