import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export interface Titulo2Props {
  texto: string;
  textoColor: string;
}

export default function Titulo2({ texto, textoColor}: Titulo2Props) {
  return (
    <p
      className={`${poppins.className} text-${textoColor} bg-clip-text bg-gradient-to-r from-red-600 from-2% via-red-800 to-red-900 mx-3 lg:mx-0 font-black tracking-tighter leading-[65px] text-[50px] sm:text-[55px] lg:text-[60px] duration-300 transition-all`}
    >
      {texto}
    </p>
  );
}
