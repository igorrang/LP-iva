import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export interface ParagrafoSessaoProps {
  texto: string;
}

export default function ParagrafoSessao({ texto }: ParagrafoSessaoProps) {
  return (
    <p
      className={`${poppins.className} leading-7 text-white text-[20px] font-black`}
    >
      {texto}
    </p>
  );
}
