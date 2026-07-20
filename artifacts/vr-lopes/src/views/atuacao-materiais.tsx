"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, CheckCircle2, Shield, Settings, FileText, HelpCircle, Calendar, Hammer, Package } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const diferenciais = [
  {
    title: "Logística Fluvial Própria",
    desc: "Estrutura própria de balsas e empurradores que garantem o abastecimento regular de canteiros no interior do Amazonas."
  },
  {
    title: "Materiais Certificados",
    desc: "Rigorosa triagem de fornecedores para assegurar que cimentos, agregados e madeiras possuam laudos técnicos oficiais."
  },
  {
    title: "Conformidade Fiscal",
    desc: "Processos integrados de Notas Fiscais Eletrônicas (NF-e) que simplificam as prestações de contas governamentais."
  },
  {
    title: "Contratos de Suprimentos",
    desc: "Opção de fornecimento programado recorrente com garantia de congelamento de preços por volume."
  }
];

const etapas = [
  { num: "01", title: "Cotação & Escopo", desc: "Análise da planilha de insumos quantitativos de engenharia e prazos do canteiro." },
  { num: "02", title: "Faturamento & NF-e", desc: "Processamento e liberação com pleno cumprimento das exigências fiscais e tributárias." },
  { num: "03", title: "Embarque & Logística", desc: "Transporte rodoviário ou carregamento de balsas para travessias fluviais no Amazonas." },
  { num: "04", title: "Conferência", desc: "Descarregamento assistido e validação de peso e cubagem de agregados e cimento." }
];

export function AtuacaoMateriaisPage() {
  return (
    <>
      <PageHeader
        title="Fornecimento de Materiais"
        subtitle="Suprimento de agregados, cimento, madeiras e insumos civis com excelência de logística rodoviária e fluvial no Amazonas."
        breadcrumbs={[{ label: "Áreas de Atuação", href: "/atuacao" }, { label: "Fornecimento de Materiais" }]}
      />

      {/* 1. O que é */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Abastecimento de Obras</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Os insumos certos para o andamento do seu projeto.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O atraso de materiais é o maior inimigo do cronograma de obras. A VR Lopes LTDA estruturou uma cadeia de suprimentos ágil e confiável para fornecer areia, seixo, cimento, madeiras certificadas e materiais elétricos/hidráulicos para projetos públicos e privados.
                </p>
                <p>
                  Atendemos tanto construtoras de grande porte na capital quanto contratos governamentais em municípios de difícil acesso no interior do estado do Amazonas, oferecendo pontualidade e conformidade de lote.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-sm overflow-hidden border p-8 bg-zinc-950 text-white flex flex-col justify-center min-h-[320px]">
              <h4 className="font-display font-bold text-primary mb-4 text-lg">Insumos Abastecidos</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Areia lavada fina/média/grossa e seixo rolado.
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Cimento Portland (ensacado e granel) e cal de pintura.
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Blocos cerâmicos, tijolos estruturais e cimento-cola.
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Madeiramento para formas, escoramentos e vigas.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Benefícios */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Diferenciais Logísticos</h2>
            <p className="text-muted-foreground mt-2">Capacidade operacional rodoviária e fluvial para suportar grandes volumes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((ben, i) => (
              <div key={i} className="p-6 bg-card border rounded-sm hover:border-primary/40 transition-colors flex flex-col gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                  <Package size={20} />
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Fluxo de Suprimento</h2>
            <p className="text-muted-foreground mt-2">Da cotação formalizada até a descarga no canteiro de obras.</p>
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
                    <h4 className="font-bold text-foreground">Rastreamento de Balsas via Satélite</h4>
                    <p className="text-muted-foreground text-sm">Monitoramento 24h da frota fluvial de insumos nas calhas dos rios Solimões e Negro para precisão de datas.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Settings className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">Pesagem Eletrônica Integrada</h4>
                    <p className="text-muted-foreground text-sm">Carregadeiras calibradas com pesagem de precisão para garantir a cubagem exata de agregados minerais.</p>
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
                    <h4 className="font-bold text-foreground">NBR 7211</h4>
                    <p className="text-muted-foreground text-sm">Normativa técnica de agregados minerais para a fabricação de concretos estruturais.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FileText className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">NR-11</h4>
                    <p className="text-muted-foreground text-sm">Diretrizes de segurança na movimentação, transporte, armazenamento e descarga de insumos pesados.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Principais Atendimentos</h2>
            <p className="text-muted-foreground mt-2">Diferentes escalas de suprimento operadas pela nossa construtora.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-sm bg-card">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Abastecimento de Obras Públicas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Fornecimento em larga escala de tijolos estruturais, vergalhões de aço, areia lavada e cimento para canteiros escolares no interior do Amazonas.</p>
            </div>

            <div className="p-8 border rounded-sm bg-card">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Logística e Suprimento Corporativo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Contratos anuais de fornecimento para construtoras parceiras com agendamento de entregas de areia fina e média por m³.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground">Perguntas Frequentes</h2>
            <p className="text-muted-foreground mt-2">Dúvidas comuns sobre o fornecimento de agregados e insumos da construção civil.</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-card border rounded-sm p-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Vocês faturam e emitem Notas Fiscais Eletrônicas em dia?</AccordionTrigger>
              <AccordionContent>
                Sim. Todo o fornecimento é 100% formalizado, com emissão de Notas Fiscais Eletrônicas de venda ou remessa contendo a rastreabilidade fiscal necessária para comprovação em relatórios de medição.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como é feito o frete dos insumos para o interior do Amazonas?</AccordionTrigger>
              <AccordionContent>
                A carga é consolidada em carretas em nosso estoque e encaminhada aos portos fluviais de Manaus, onde é estivada em balsas e encaminhada via bacia amazônica conforme o regime de cheia dos rios.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-foreground">Precisa abastecer seu canteiro de obras?</h3>
            <p className="text-primary-foreground/70 mt-1">Solicite uma cotação de insumos rápida com nosso departamento comercial.</p>
          </div>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-sm font-bold hover:bg-zinc-800 transition-colors whitespace-nowrap">
            Solicitar Cotação <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
