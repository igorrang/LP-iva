import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export interface TituloProps {
  texto: string;
  textoColor: string;
}

export default function Titulo({ texto, textoColor}: TituloProps) {
  return (
    <p
      className={`${poppins.className} text-${textoColor} mx-3 lg:mx-0 font-black tracking-tighter leading-[50px] text-start text-[38px] sm:text-[40px] lg:text-[45px] duration-300 transition-all`}
    >
      {texto}
    </p>
  );
}
