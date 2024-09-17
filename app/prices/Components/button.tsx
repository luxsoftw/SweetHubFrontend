interface ButtonProps {
   handleRoute: () => void;
}

export const ButtonHire = ({ handleRoute }: ButtonProps) => {
   return (
      <button
         onClick={handleRoute}
         className="mt-4 self-start rounded-2xl border bg-amber-400 px-6 py-1 text-sm font-bold text-white"
      >
         Contratar
      </button>
   );
};
