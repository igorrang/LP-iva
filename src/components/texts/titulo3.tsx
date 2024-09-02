import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export interface Titulo3Props {
  texto: string;
  textoColor: string;
}

export default function Titulo3({ texto, textoColor}: Titulo3Props) {
  return (
    <p
      className={`${poppins.className} text-${textoColor} mx-3 lg:mx-0 font-black tracking-tighter leading-[50px] text-center  text-[40px] sm:text-[45px] lg:text-[50px] duration-300 transition-all`}
    >
      {texto}
    </p>
  );
}
