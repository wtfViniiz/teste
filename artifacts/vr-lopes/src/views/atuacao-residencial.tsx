"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, CheckCircle2, Shield, Settings, FileText, HelpCircle, Calendar, Hammer, Home } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import engResidencialImg from "@assets/generated_images/eng-residencial.jpg";

const beneficios = [
  {
    title: "Chave na Mão (Turnkey)",
    desc: "Gerenciamos toda a cadeia: desde o desenvolvimento dos projetos arquitetônicos e complementares até a entrega final."
  },
  {
    title: "Precisão Orçamentária",
    desc: "Planejamento orçamentário transparente que evita gastos imprevistos e garante que a obra caiba no planejado."
  },
  {
    title: "Acabamento Refinado",
    desc: "Equipe especializada na instalação de revestimentos nobres, marcenarias e projetos de iluminação sofisticados."
  },
  {
    title: "Garantia Estrutural",
    desc: "Segurança de quem constrói dentro das normas mais rígidas, oferecendo 5 anos de garantia em todas as edificações."
  }
];

const etapas = [
  { num: "01", title: "Briefing & Conceito", desc: "Alinhamento de expectativas, estudo de viabilidade técnica no lote e definição do design." },
  { num: "02", title: "Projetos & Licenças", desc: "Desenho estrutural, arquitetura 3D complementar e aprovação junto aos órgãos municipais." },
  { num: "03", title: "Construção Ativa", desc: "Execução física com engenheiro residente, mestre de obras e rigoroso controle de prazos." },
  { num: "04", title: "Acabamento & Chaves", desc: "Vistoria detalhada de pintura, elétrica e revestimentos para entrega limpa do imóvel." }
];

export function AtuacaoResidencialPage() {
  return (
    <>
      <PageHeader
        title="Engenharia Residencial"
        subtitle="Construção de residências de alto padrão e reformas completas com alto nível de acabamento e pontualidade."
        breadcrumbs={[{ label: "Áreas de Atuação", href: "/atuacao" }, { label: "Engenharia Residencial" }]}
      />

      {/* 1. O que é */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Residências Nobres</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Seu lar construído com o máximo rigor técnico.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O lar de alto padrão exige atenção a cada milímetro. A VR Lopes LTDA possui uma divisão especializada em Engenharia Residencial, focada em transformar projetos arquitetônicos inovadores em estruturas duráveis, confortáveis e seguras.
                </p>
                <p>
                  Atuamos desde a fundação (infraestrutura) até o acabamento de altíssimo nível. Nossas equipes são coordenadas por profissionais experientes em lidar com materiais de excelência e soluções sustentáveis voltadas ao clima do Amazonas.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-sm overflow-hidden border">
              <img src={engResidencialImg.src} alt="Obras de Engenharia Residencial" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Benefícios */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">A Vantagem VR Lopes</h2>
            <p className="text-muted-foreground mt-2">Diferenciais na execução de moradias inteligentes e sofisticadas.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((ben, i) => (
              <div key={i} className="p-6 bg-card border rounded-sm hover:border-primary/40 transition-colors flex flex-col gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                  <Home size={20} />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg">{ben.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Como funciona & Etapas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Etapas de Execução</h2>
            <p className="text-muted-foreground mt-2">Da definição conceitual à entrega formal das chaves de sua casa.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapas.map((etapa, i) => (
              <div key={i} className="relative flex flex-col gap-4">
                <span className="text-5xl font-display font-black text-primary/20 leading-none">{etapa.num}</span>
                <h3 className="font-display font-bold text-foreground text-lg">{etapa.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{etapa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tecnologias & 5. Normas */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Tecnologias Utilizadas</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Settings className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">Softwares de Estruturas</h4>
                    <p className="text-muted-foreground text-sm">Uso de TQS e Eberick para dimensionamento exato das armaduras de aço e concreto.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Settings className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">Locação a Laser</h4>
                    <p className="text-muted-foreground text-sm">Niveladores e medidores digitais para garantir prumos perfeitos em paredes e revestimentos.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Normas Técnicas Seguidas</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <FileText className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">NBR 6118</h4>
                    <p className="text-muted-foreground text-sm">Normativa oficial para o cálculo e dimensionamento de estruturas de concreto armado.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FileText className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">NBR 5410</h4>
                    <p className="text-muted-foreground text-sm">Regulamentação técnica para a segurança em instalações elétricas prediais de baixa tensão.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Exemplos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Casos Reais</h2>
            <p className="text-muted-foreground mt-2">Diferentes tipologias residenciais atendidas com padrão de excelência.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-sm bg-card">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Construção de Mansões Personalizadas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Desenvolvimento e execução de moradias com múltiplos pavimentos, sistemas de automação integrada, áreas gourmet e piscinas estruturadas em concreto.</p>
            </div>

            <div className="p-8 border rounded-sm bg-card">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Reformas de Alto Padrão</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Intervenções complexas em imóveis residenciais, com modificação estrutural de ambientes, troca completa de acabamentos e vedações acústicas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground">Perguntas Frequentes</h2>
            <p className="text-muted-foreground mt-2">Esclareça suas principais dúvidas sobre o processo de construção de sua casa.</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-card border rounded-sm p-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como é feito o controle financeiro para não estourar o orçamento?</AccordionTrigger>
              <AccordionContent>
                Desenvolvemos uma planilha de composição de custos unitários e cronograma físico-financeiro. O cliente realiza desembolsos conforme medições técnicas aprovadas, garantindo transparência total.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Qual o prazo médio de garantia oferecido pela construtora?</AccordionTrigger>
              <AccordionContent>
                Oferecemos 5 anos de garantia estrutural para rachaduras, infiltrações ou defeitos graves de solidez, conforme preconiza a legislação civil e normas técnicas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-foreground">Pronto para dar o primeiro passo da sua obra?</h3>
            <p className="text-primary-foreground/70 mt-1">Converse com nossos especialistas e elabore um orçamento detalhado.</p>
          </div>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-sm font-bold hover:bg-zinc-800 transition-colors whitespace-nowrap">
            Falar com a Equipe <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
