"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, CheckCircle2, Shield, Settings, FileText, HelpCircle, Calendar, Hammer, Building2 } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import engCondominiosImg from "@assets/generated_images/eng-condominios.jpg";

const beneficios = [
  {
    title: "Mínima Interferência",
    desc: "Plano de trabalho estruturado para gerar o menor impacto possível na rotina, trânsito e ruído dos moradores."
  },
  {
    title: "Equipe Própria Certificada",
    desc: "Mão de obra contratada e qualificada sob a supervisão direta de engenheiro civil responsável técnico."
  },
  {
    title: "Segurança Total",
    desc: "Uso rigoroso de linhas de vida, redes de contenção e EPIs conforme as normas regulamentadoras."
  },
  {
    title: "Apoio a Assembleias",
    desc: "Fornecemos relatórios e mídias visuais explicativas para facilitar a votação de obras pelo conselho condominial."
  }
];

const etapas = [
  { num: "01", title: "Vistoria Técnica", desc: "Inspeção in-loco para elaboração do diagnóstico de anomalias com imagens térmicas." },
  { num: "02", title: "Planejamento", desc: "Definição de cronograma, segurança de canteiro e facilidades de parcelamento para aprovação." },
  { num: "03", title: "Execução Isolada", desc: "Isolamento acústico/visual temporário, sinalização ativa e aplicação dos materiais homologados." },
  { num: "04", title: "ART & Manuais", desc: "Entrega de laudo de conclusão de obra, manuais de conservação de acabamento e emissão de ART." }
];

export function AtuacaoCondominiosPage() {
  return (
    <>
      <PageHeader
        title="Engenharia para Condomínios"
        subtitle="Manutenção preventiva, corretiva e reformas de fachadas para condomínios residenciais e comerciais com foco em valorização patrimonial."
        breadcrumbs={[{ label: "Áreas de Atuação", href: "/atuacao" }, { label: "Eng. para Condomínios" }]}
      />

      {/* 1. O que é */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Gestão Patrimonial</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Manutenção predial inteligente e segura.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Manutenções e reformas prediais em condomínios requerem planejamento diferenciado. A VR Lopes LTDA possui larga vivência em executar impermeabilizações, pinturas de fachadas e reformas estruturais em condomínios residenciais e comerciais fechados.
                </p>
                <p>
                  Aliamos segurança extrema nas atividades em altura (NR-35) com controle rígido de poeira e resíduos, respeitando integralmente as convenções internas e a tranquilidade dos coproprietários.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-sm overflow-hidden border">
              <img src={engCondominiosImg.src} alt="Obras em Condomínios" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Benefícios */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Diferenciais Condominiais</h2>
            <p className="text-muted-foreground mt-2">Segurança e valorização do condomínio sem dores de cabeça para o síndico.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((ben, i) => (
              <div key={i} className="p-6 bg-card border rounded-sm hover:border-primary/40 transition-colors flex flex-col gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                  <Building2 size={20} />
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Fluxo de Trabalho</h2>
            <p className="text-muted-foreground mt-2">Nosso passo a passo do primeiro contato técnico à entrega do laudo.</p>
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
                    <h4 className="font-bold text-foreground">Termografia Infravermelha</h4>
                    <p className="text-muted-foreground text-sm">Câmeras especiais que identificam pontos ocultos de umidade e infiltrações nas fachadas antes de qualquer demolição.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Settings className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">Plataformas Suspensas Certificadas</h4>
                    <p className="text-muted-foreground text-sm">Balancins e fachadeiros suspensos motorizados com travas mecânicas duplas contra quedas.</p>
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
                    <h4 className="font-bold text-foreground">NBR 5674</h4>
                    <p className="text-muted-foreground text-sm">Norma de manutenção de edificações, norteando as diretrizes de durabilidade patrimonial.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FileText className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">NBR 16280</h4>
                    <p className="text-muted-foreground text-sm">Normativa oficial que estabelece o sistema de gestão do controle de reformas prediais.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Nossas Experiências</h2>
            <p className="text-muted-foreground mt-2">Condomínios de alto padrão que confiaram na VR Lopes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-sm bg-card">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Recuperação Estrutural e Impermeabilização</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Remoção de infiltrações persistentes em lajes comuns expostas e juntas de dilatação de garagens subterrâneas com aplicação de mantas asfálticas testadas em estanqueidade.</p>
            </div>

            <div className="p-8 border rounded-sm bg-card">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Revitalização de Fachadas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Tratamento de trincas externas, hidrojateamento de alta pressão e repintura completa de torres residenciais utilizando tintas elásticas resistentes ao intemperismo tropical.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground">Perguntas Frequentes</h2>
            <p className="text-muted-foreground mt-2">As respostas para as dúvidas mais comuns dos conselhos de administração condominial.</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-card border rounded-sm p-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Todas as obras são acompanhadas por responsável técnico e ART?</AccordionTrigger>
              <AccordionContent>
                Sim. Todas as intervenções executadas pela VR Lopes são obrigatoriamente acompanhadas por engenheiros civis responsáveis, com emissão de Anotação de Responsabilidade Técnica (ART) registrada no CREA.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como é gerida a segurança dos operários nas fachadas prediais?</AccordionTrigger>
              <AccordionContent>
                Seguimos à risca a NR-35 (Trabalho em Altura). Nossos profissionais são devidamente treinados, munidos de cinturões integrados, trava-quedas automáticos e ancorados em linhas de vida totalmente testadas antes do início das atividades.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-foreground">Buscando soluções de manutenção predial seguras?</h3>
            <p className="text-primary-foreground/70 mt-1">Agende uma vistoria técnica preliminar sem compromisso para seu condomínio.</p>
          </div>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-sm font-bold hover:bg-zinc-800 transition-colors whitespace-nowrap">
            Agendar Vistoria <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
