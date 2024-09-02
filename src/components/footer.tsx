import ParagrafoFooter from "./texts/paragrafoFooter";


export default function Footer(){
    return (
    <footer className="flex justify-center items-center py-32 bg-black">
      <div className=" w-[85%] max-w-[1100px] flex flex-col items-center justify-center md:flex-row md:justify-between ">
        <div className="flex w-[290px] mr-2">
          <img src="/ic_branco.png" alt="" width={80}/>
          <div className="ml-4">
            <ParagrafoFooter text="© 2024 Iva Cardinal." textColor="white"/>
            <ParagrafoFooter text="Todos os direitos reservados" textColor="white"/>
          </div>
        </div>          
          <div className="w-[290px] border-l-2 border-white pl-3 mt-7 md:mt-0">
            <ParagrafoFooter text="Termos e Condições" textColor="white"/>
            <ParagrafoFooter text="Política de Privacidade" textColor="white"/>
            <ParagrafoFooter text="Contato" textColor="white"/>
          </div>
      </div>
    </footer>
    )
}