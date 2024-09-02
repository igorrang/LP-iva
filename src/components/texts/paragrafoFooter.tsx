import local from "next/font/local";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export interface ParagrafoFooterProps {
  text: string;
  textColor: string;
}

export default function ParagrafoFooter({ text , textColor}: ParagrafoFooterProps) {
  return (
    <p className={`${poppins.className}  text-${textColor} tracking-tighet mt-1 text-[13px] duration-300 transition-all`}>
      {text}
    </p>
  );
}
