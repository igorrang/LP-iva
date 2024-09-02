import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Paragrafo from "./texts/paragrafo"
import { Button } from "./ui/button"



export default function CardNossaEquipe(){
    return(
      <div className=" p-10 w-[340px] rounded-2xl flex items-center justify-center flex-col bg-black relative">
        <img src="/Suporte.png" alt="" width={80} className="absolute mb-[295px]"/>
        <p className="text-white text-center mt-5 text-2xl w-[85%]">Se ainda estiver com dúvidas nossa equipe está a disposição:</p>
        <Button variant="flrEquipe" size="flrEquipe">FALAR COM SUPORTE</Button>
        
      </div>
    )
}