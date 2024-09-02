import CardNossaEquipe from "@/components/cardNossaEquipe";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import HorarioCronograma from "@/components/horarioCronograma";
import IconeSessaoBarrinha from "@/components/iconeSessaoBarrinha";
import Paragrafo from "@/components/texts/paragrafo";
import ParagrafoPrincipal from "@/components/texts/paragrafoPrincipal";
import ParagrafoSessao from "@/components/texts/paragrafoSessao";
import Titulo from "@/components/texts/titulo";
import Titulo2 from "@/components/texts/titulo2";
import Titulo3 from "@/components/texts/titulo3";
import TituloPrincipal from "@/components/texts/tituloPrincipal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    {/* 1 */}
    <section className="w-full h-[120vh] md:h-[90vh] bg-black flex flex-col items-center bg-gradient-to-bl from-red-900 from-1% via-black to-black relative">
        <div className=" md:w-[100%] lg:max-w-[1100px] h-full  flex relative">
          {/* Container textos */}
          <div className=" z-30  w-full max-w-[410px]  md:ml-[50px] xl:ml-0 mt-10 p-6 md:p-0  md:mt-[170px] ">
            <TituloPrincipal texto="AULA SECRETA CONEXÕES ÉPICAS" textColor="white"/>
            <div className="w-[290px] my-5">
              <ParagrafoPrincipal texto="Conecte experiências, pessoas e ideias para o seu sucesso pessoal e profissional." />
            </div>
            <Button variant={"default"} size={"default"}>COMPRAR INGRESSO | LOTE 9</Button>
          </div>
          {/* Container Imagem */}
          <div className="hidden md:flex absolute z-10 top-0 right-0">
            <img
              src="/Iva-Cardinal.png"
              width={10000}
              height={10000}
              className="w-[513px] "
            />
          </div>
        </div>
        <div className=" flex md:hidden absolute z-10 bottom-0 right-0">
          <img
            src="/Iva-Cardinal.png"
            width={10000}
            height={10000}
            className="w-[350px] "
          />
        </div>
        <div className=" flex absolute z-10 top-0 left-0">
          <img
            src="/Folha.png"
            width={10000}
            height={10000}
            className="w-[200px] md:w-[280px] brightness-75 md:brightness-100"
          />
        </div>
    </section>
    {/* 2 */}
    <section className="duration-300 transition-all bg-gradient-to-r from-red-600 from-4% via-red-800 to-red-900 flex flex-col md:flex-row justify-center items-center w-full">
        <div className="duration-300 transition-all mx-2 my-2 ">
          <p className="duration-300 transition-all text-white text-center  text-[17px]">
            40% DOS INGRESSOS VENDIDOS À R$97
          </p>
        </div>
        <div className="duration-300 transition-all mx-2 my-2 hidden md:flex ">
          <p className="duration-300 transition-all text-white text-center  text-[17px]">
            •
          </p>
        </div>
        <div className="duration-300 transition-all mx-2 my-2 hidden md:flex">
          <p className="duration-300 transition-all text-white text-center text-[17px]">
           40% DOS INGRESSOS VENDIDOS À R$97 
          </p>
        </div>
        <div className="duration-300 transition-all mx-2 my-2 hidden xl:flex">
          <p className="duration-300 transition-all text-white text-center  text-[17px]">
            •
          </p>
        </div>
        <div className="duration-300 transition-all mx-2 my-2 hidden xl:flex">
          <p className="duration-300 transition-all text-white text-center text-[17px]">
           40% DOS INGRESSOS VENDIDOS À R$97 
          </p>
        </div>
        <div className="duration-300 transition-all mx-2 my-2 hidden 2xl:flex">
          <p className="duration-300 transition-all text-white text-center  text-[17px]">
            •
          </p>
        </div>
        <div className="duration-300 transition-all mx-2 my-2 hidden 2xl:flex">
          <p className="duration-300 transition-all text-white text-center text-[17px]">
           40% DOS INGRESSOS VENDIDOS À R$97 
          </p>
        </div>
    </section>
    {/* 3 */}
    <section className="py-20 lg:py-32 flex items-center justify-center w-full bg-white">
          <div className="w-[95%] max-w-[900px]  flex flex-col items-center md:flex-row md:justify-between">
            {/* Container texto */}
            <div className="w-full max-w-[430px] md:max-w-[428px] flex flex-col text-start ">
              <Titulo textoColor="black" texto="TRANSFORME SUAS RELAÇÕES EM OPORTUNIDADES" />
              <div className="md:w-[428px] mt-5 text-start">
                <Paragrafo textColor="black" text="Nesta aula exclusiva, Iva Cardinal irá compartilhar estratégias poderosas que toda mulher precisa para mapear, fortalecer e expandir sua rede de contatos. Transforme conexões em parcerias de sucesso e avance em sua carreira." />
              </div>
              
            </div>

            {/* Container Img - Imagem fica do lado do texto depois do Media Queries lg*/}
            <div className="mt-10 md:mt-0 flex justify-end items-center">
              <img
                src={"/Iva-Cardinal-2.png"}
                alt="Imagem da empresa"
                width={450}
                height={0}
                className="rounded-2xl"
              />
            </div>
          </div>
    </section>
    {/* 4 */}
    <section className="py-20 lg:py-32 flex items-center justify-center w-full bg-black">
          <div className=" w-[95%] max-w-[900px] flex flex-col items-center md:flex-row md:justify-between">

            {/* Container texto */}
            <div className=" w-[95%] max-w-[430px] md:max-w-[320px] flex flex-col  ">
              <div className="">
                <img src="/Zoom-29-de-Setembro.png" alt="" width={250} className="mx-3 mb-5"/>
                <Titulo2 textoColor="white" texto="O QUE VOCÊ VAI APRENDER?" />
              </div>
              <div className="md:w-[300px] mt-5 ">
                <Paragrafo textColor="white" text="Prepare-se para uma jornada transformadora em quatro partes, que irá mudar a forma como voce enxerga e utiliza sua rede de contatos." />
              </div>
              
            </div>

            {/* Container im */}
            <div className=" w-[95%] max-w-[430px] md:max-w-[480px]  flex flex-col items-end justify-center mt-10 md:mt-0 ">
              <img src="/1.png" alt="" className="mt-0 " />
              <img src="/2.png" alt="" className="mt-3 " />
              <img src="/3.png" alt="" className="mt-3 " />
              <img src="/4.png" alt="" className="mt-3 " />
            </div>
          </div>

          
          <img src="/Logo-Zoom-Desfoque.png" alt="" width={2000} className="w-[150px] lg:w-[200px] 2xl:w-[300px] mb-[750px] md:mb-[600px] -rotate-17 absolute left-0"/>
          <img src="/Logo-Zoom-Desfoque.png" alt="" width={2000} className="w-[150px] lg:w-[200px] 2xl:w-[300px] mt-[750px] md:mt-[550px] rotate-17 absolute right-0"/>
          
          
    </section>

    {/* 5 */}   
    <section className="py-20 lg:py-32 flex items-center justify-center w-full bg-white">
          <div className=" w-[95%] max-w-[900px]  flex flex-col items-center md:flex-row md:justify-between">
            {/* Container texto */}
            <div className=" w-full max-w-[430px] md:max-w-[428px] flex flex-col text-start ">
              <div className="">
                <Titulo2 textoColor="transparent" texto="PARA QUEM É ESSA AULA?" />
              </div>
              <div className="lg:w-[420px] mt-3">
                <Paragrafo textColor="black" text="Esta aula secreta é para Mulheres Corojosas como Você!" />
              </div>
              <div className="lg:w-[420px] mt-3">
                <Paragrafo textColor="black" text="Se voce 6 uma profissional liberal, autinoma. empreendedora, cestora ou está em transicão de carreira, e deseja transformar suas reloções em oportunidades estratégicas, esta aula é feita para você" />
              </div>
              <div className="lg:w-[420px] mt-3">
                <Paragrafo textColor="black" text="Esta é a chance de avançar em seus objetivos pesscais e protissionais com as terramentas certos para o sucesso." />
              </div>
              
            </div>

            {/* Container Img - Imagem fica do lado do texto depois do Media Queries lg*/}
            <div className=" mt-10 md:mt-0 flex justify-end items-center">
              <img
                src={"/Notebook-Mockup.png"}
                alt="Imagem da empresa"
                width={450}
                height={0}
                className="rounded-2xl"
              />
            </div>
          </div>
    </section>
             
    {/* 6 */}
    <section className="py-20 lg:py-32 flex flex-col items-center justify-center w-full bg-black">
        <div className="w-[95%] max-w-[1220px] flex flex-col items-center lg:flex-row lg:justify-between">
          {/* Container texto */}
          <div className="mb-[70px] lg:mx-10 mt-10 lg:mt-0 w-[95%]  flex flex-col text-center  lg:items-center">
            <Titulo3 textoColor="white" texto="4 MOTIVOS DO PORQUE VOCÊ DEVE PARTICIPAR" />
          </div>

          
        </div>
        <div className=" flex justify-center flex-wrap">
            <img src="/Marketing-Estrategico.png" alt="" width={300} className="mx-3 my-5 "/>
            <img src="/Posicionamento-de-Autoridade.png" alt="" width={300} className="mx-3 my-5 "/>
            <img src="/Oportunidade-de-Negocio.png" alt="" width={300} className="mx-3 my-5 "/>
            <img src="/Agilidade.png" alt="" width={300} className="mx-3 my-5 "/>
        </div>
        <div className="mt-16">
          <Button variant={"default"} size={"default"}>COMPRAR INGRESSO | LOTE 9</Button>
        </div>
    </section>

    {/* 7 */}
    <section className="py-20 lg:py-26 flex flex-col items-center justify-center w-full bg-white">
        <div className="w-[95%] max-w-[1220px] flex flex-col items-center lg:flex-row lg:justify-between">
          {/* Container texto */}
          <div className="mb-[70px] lg:mx-10 mt-10 lg:mt-0 w-[95%]  flex flex-col text-center  lg:items-center">
            <Titulo3 textoColor="black" texto="O QUE OUTRAS MULHERES ESTÃO DIZENDO?" />
          </div>
        </div>
        <div className=" flex justify-center flex-wrap">
          <iframe  className="mx-3 my-5 w-[350px] sm:w-[560px] h-[197px] sm:h-[315px]" src="https://www.youtube.com/embed/cRqsyr6Z1OY?si=ZcSAysgqbRhZx5kX&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe  className="mx-3 my-5 w-[350px] sm:w-[560px] h-[197px] sm:h-[315px]" src="https://www.youtube.com/embed/cRqsyr6Z1OY?si=ZcSAysgqbRhZx5kX&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe  className="mx-3 my-5 w-[350px] sm:w-[560px] h-[197px] sm:h-[315px]" src="https://www.youtube.com/embed/cRqsyr6Z1OY?si=ZcSAysgqbRhZx5kX&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            
        </div>
        <IconeSessaoBarrinha />
    </section>

    {/* 8 */}
    <section className="py-20 lg:py-32 flex flex-col items-center justify-center w-full bg-black bg-gradient-to-l from-red-900 from-0% via-black to-black">
        <div className="w-[95%] max-w-[1000px] flex flex-col items-center lg:flex-row lg:justify-between">
          {/* Container texto */}
          <div className="mb-[70px] lg:mx-10 mt-10 lg:mt-0 w-[95%]  flex flex-col text-center  items-center">
            <Titulo3 textoColor="white" texto="GARANTA SUA VAGA!" />
            <div className="w-[95%] max-w-[1100px] mt-10">
              <ParagrafoSessao texto="As vagas são limitadas para garantir uma experiência personalizada e interativa. Reserve seu lugar agora e comece a transformar suas conexões em recultados concratos"/>
            </div>
          </div>
        </div>
        <Button variant={"default"} size={"default"}>COMPRAR INGRESSO | LOTE 9</Button>
    </section>

    {/* 9 FAQ */}
    <section className="py-20 flex justify-center">
      <div className="w-[90%] max-w-[1220px] flex flex-col items-center justify-center lg:flex-row  lg:justify-between">
        <div className="w-full max-w-[600px] my-5 px-5">
          <Titulo2 textoColor="black" texto="PERGUNTAS FREQUENTES" />
          <Faq></Faq>
        </div>
        <div className="my-20">
          <CardNossaEquipe></CardNossaEquipe>
        </div>
      </div>
    </section>

    <Footer />
    </main>
  );
}
