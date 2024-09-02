import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

export interface TituloPrincipalProps {
  texto: string;
  textColor: string;
}

export default function TituloPrincipal({ texto, textColor }: TituloPrincipalProps) {
  return (
    <h1
      className={`${poppins.className} leading-[60px] text-${textColor} text-[55px] font-black`}
    >
      {texto}
    </h1>
  );
}
