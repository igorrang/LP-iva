import local from "next/font/local";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export interface ParagrafoProps {
  text: string;
  textColor: string;
}

export default function Paragrafo({ text , textColor}: ParagrafoProps) {
  return (
    <p className={`${poppins.className} mx-3 lg:mx-0 text-${textColor} tracking-tighet mt-1 text-[16px] lg:text-[16px] duration-300 transition-all`}>
      {text}
    </p>
  );
}
