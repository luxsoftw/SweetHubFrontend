import { setupWorker } from "msw/browser";
import { env } from "process";
//import { sigInFunction } from './sing-in-function';

export const worker = setupWorker(/*singinFunciton*/);

export async function enableMSW() {
   if (env.NODE_ENV !== "test") return;
   await worker.start();
}
