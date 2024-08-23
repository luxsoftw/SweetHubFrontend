interface ItensProps {
   text: string;
}

export const ItemList = ({ text }: ItensProps) => {
   return (
      <>
         <li className="bg-red-100 py-1 pl-1 text-xs font-light text-gray-900">
            {text}
         </li>
      </>
   );
};
