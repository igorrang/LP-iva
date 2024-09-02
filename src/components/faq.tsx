import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Faq(){
    return(
        <Accordion type="single" collapsible className="mx-3">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-start">A Aula Secreta ficará gravada?</AccordionTrigger>
              <AccordionContent>
                Não, a Aula Secreta CONEXÕES ÉPICAS será ao vivo, proporcionando uma experiência única e interativa. Participar ao vivo permite que você faça perguntas, interaja diretamente com Iva Cardinal e outras participantes, aproveitando ao máximo o conteúdo exclusivo que será compartilhado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-start">Qual o valor da inscrição?</AccordionTrigger>
              <AccordionContent>
                O valor da inscrição para participar da Aula Secreta CONEXÕES ÉPICAS é R$ 97, podendo ser pago à vista ou parcelado no cartão de crédito. Basta clicar no botão COMPRAR INGRESSO
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-start">Quem pode participar da Aula Secreta CONEXÕES ÉPICAS?</AccordionTrigger>
              <AccordionContent>
                A aula é destinada exclusivamente para mulheres que buscam fortalecer suas redes de contatos de forma estratégica. Profissionais liberais, autônomas, empreendedoras, gestoras, e aquelas em transição de carreira encontrarão nesta aula ferramentas essenciais para impulsionar seus objetivos pessoais e profissionais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-start">Preciso ter algum conhecimento prévio para participar?</AccordionTrigger>
              <AccordionContent>
                Não é necessário ter conhecimento prévio. A aula foi elaborada para atender desde iniciantes até profissionais experientes. Iva Cardinal irá abordar conceitos e práticas acessíveis a todos os níveis, com foco em maximizar o potencial de suas conexões independentemente do seu ponto de partida.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
    )
}