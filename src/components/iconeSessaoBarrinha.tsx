import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Paragrafo from "./texts/paragrafo"
import { Button } from "./ui/button"



export default function IconeSessaoBarrinha(){
    return(
      <div className="flex bg-white mt-10">
        <div className="w-[10px] h-[10px] rounded-[100px] bg-black mx-3"></div>
        <div className="w-[60px] h-[10px] rounded-[100px] bg-gradient-to-r from-red-700 via-red-800 to-red-900"></div>
        <div className="w-[10px] h-[10px] rounded-[100px] bg-black mx-3"></div>
      </div>
    )
}