"use client";

import { PageHeader } from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

const generalFaqs = [
  {
    question: "Quanto custa um projeto ou a execução de uma obra?",
    answer: "O custo total de um projeto ou obra é variável, dependendo de fatores como área construída, complexidade estrutural, padrão de acabamento e a logística de localização (especialmente em municípios do interior). Trabalhamos com orçamentos rigorosamente detalhados através de planilhas de quantitativos e análise de B.D.I. (Benefícios e Despesas Indiretas) para garantir transparência."
  },
  {
    question: "Quanto tempo demora a execução de um empreendimento?",
    answer: "Cada empreendimento possui um cronograma exclusivo planejado em softwares de gestão como MS Project. Obras residenciais de médio a alto padrão costumam durar de 6 a 12 meses. Obras comerciais, industriais ou públicas de infraestrutura têm prazos ajustados de acordo com o escopo licitado ou contratado."
  },
  {
    question: "Vocês atendem outros estados além do Amazonas?",
    answer: "Nossa sede e base operacional central de suprimentos estão localizadas em Manaus - AM, o que nos confere grande expertise em logística terrestre e fluvial por toda a bacia amazônica. Mobilizações para outros estados da Região Norte são avaliadas sob consulta técnica, conforme a viabilidade e escala do projeto."
  },
  {
    question: "A VR Lopes realiza ou facilita financiamentos?",
    answer: "Não financiamos as obras diretamente, mas oferecemos suporte técnico completo para a contratação de linhas de crédito em instituições bancárias (como a Caixa Econômica Federal nas modalidades de Aquisição de Terreno e Construção). Nossa equipe elabora toda a documentação de engenharia exigida pelos bancos, como a planilha PFUI (Proposta de Financiamento de Unidade Individual), cronogramas e projetos."
  },
  {
    question: "Como funciona o processo de elaboração do orçamento?",
    answer: "O processo inicia-se com o recebimento dos projetos executivos (arquitetônico, estrutural, elétrico e hidrossanitário) fornecidos pelo cliente. Realizamos a conferência de quantitativos e cotação de materiais e serviços. Caso você ainda não possua os projetos, nossa equipe de engenharia e arquitetura pode desenvolvê-los do zero para dar base ao orçamento de construção."
  },
  {
    question: "A empresa oferece garantia após a entrega das chaves?",
    answer: "Sim. Em total conformidade com o Código Civil brasileiro e as diretrizes da NBR 15575 (Norma de Desempenho), fornecemos garantia técnica de até 5 anos para elementos estruturais e impermeabilizações, além de um manual de uso, operação e manutenção preventiva da edificação."
  },
  {
    question: "Como é garantida a segurança do trabalho nos canteiros da construtora?",
    answer: "Mantemos uma política de tolerância zero a riscos de acidentes. Nossas equipes são sistematicamente equipadas com EPIs e EPCs certificados, e os canteiros contam com supervisão direta técnica para cumprimento irrestrito das normas regulamentadoras federais (como a NR-18 e NR-35)."
  }
];

export function FAQPage() {
  return (
    <>
      <PageHeader
        title="Perguntas Frequentes (FAQ)"
        subtitle="Esclareça suas principais dúvidas sobre o processo de orçamento, prazos, formas de contratação e suporte técnico da VR Lopes."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle className="text-primary" size={28} />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Dúvidas Comuns</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {generalFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-item-${index}`}
                className="bg-card border rounded-sm px-6 py-2 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors text-base py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2 pb-4 border-t mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 bg-muted/40 border rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">Ainda tem alguma dúvida?</h3>
              <p className="text-muted-foreground text-sm">Fale diretamente com o nosso time de atendimento técnico e tire suas dúvidas específicas.</p>
            </div>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-sm hover:bg-primary/90 transition-colors text-sm shrink-0"
            >
              <MessageCircle size={18} />
              Entrar em Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
