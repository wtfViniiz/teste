"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, CheckCircle2, Shield, Settings, FileText, HelpCircle, Calendar, Hammer, MapPin } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import engPublicaImg from "@assets/generated_images/eng-publica.jpg";

const beneficios = [
  {
    title: "Conformidade Legal",
    desc: "Pleno alinhamento com as normas de licitações públicas, contratos administrativos e exigências dos tribunais de contas."
  },
  {
    title: "Agilidade na Medição",
    desc: "Emissão ágil de relatórios fotográficos e laudos técnicos para simplificar as medições e liberações de recursos."
  },
  {
    title: "Logística no Interior",
    desc: "Know-how especializado para transportar equipes, materiais e maquinários pesados via rios para locais isolados."
  },
  {
    title: "Segurança Certificada",
    desc: "Seguimento rigoroso de todas as NRs de segurança ocupacional nos canteiros de obras de órgãos governamentais."
  }
];

const etapas = [
  { num: "01", title: "Estudo & Licitação", desc: "Análise detalhada do edital e desenvolvimento de proposta técnica e orçamentária rigorosa." },
  { num: "02", title: "Mobilização", desc: "Instalação rápida do canteiro de obras e transporte fluvial de maquinários e materiais." },
  { num: "03", title: "Execução & Controle", desc: "Diário de obra digitalizado e supervisão técnica contínua para prevenir retrabalho." },
  { num: "04", title: "Medição & Entrega", desc: "Emissão de relatórios e documentação técnica completa para o recebimento do órgão público." }
];

export function AtuacaoPublicaPage() {
  return (
    <>
      <PageHeader
        title="Engenharia Pública"
        subtitle="Execução de obras civis e serviços de infraestrutura governamental com total conformidade e rigor técnico."
        breadcrumbs={[{ label: "Áreas de Atuação", href: "/atuacao" }, { label: "Engenharia Pública" }]}
      />

      {/* 1. O que é */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Setor Público</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Infraestrutura urbana e predial robusta.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A VR Lopes LTDA atua na execução de obras públicas nos âmbitos municipal, estadual e federal. Nosso departamento de Engenharia Pública é estruturado para atender as rígidas exigências técnicas e administrativas que os contratos governamentais demandam.
                </p>
                <p>
                  Atuamos na construção e reforma de escolas, creches, unidades de saúde (UBS), arenas esportivas e pavimentação asfáltica urbana, garantindo durabilidade máxima mesmo nas condições climáticas desafiadoras da Região Norte.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-sm overflow-hidden border">
              <img src={engPublicaImg.src} alt="Obras de Engenharia Pública" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Benefícios */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Por que escolher a VR Lopes</h2>
            <p className="text-muted-foreground mt-2">Diferenciais técnicos e administrativos na contratação governamental.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((ben, i) => (
              <div key={i} className="p-6 bg-card border rounded-sm hover:border-primary/40 transition-colors flex flex-col gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                  <Shield size={20} />
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
            <p className="text-muted-foreground mt-2">Nossa metodologia de trabalho pautada na transparência e prazos.</p>
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
                    <h4 className="font-bold text-foreground">Modelagem BIM</h4>
                    <p className="text-muted-foreground text-sm">Integração tridimensional de arquitetura e estruturas para predição de erros e orçamentos exatos.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Settings className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">Controle Tecnológico de Solos</h4>
                    <p className="text-muted-foreground text-sm">Ensaios in-loco de compactação e caracterização de agregados para durabilidade asfáltica.</p>
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
                    <h4 className="font-bold text-foreground">NR-18</h4>
                    <p className="text-muted-foreground text-sm">Diretrizes de segurança do trabalho específicas para a indústria da construção civil.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FileText className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-foreground">DNIT 013/2004-ES</h4>
                    <p className="text-muted-foreground text-sm">Normativa federal para especificações técnicas de pavimentação asfáltica e subleito.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Casos de Sucesso</h2>
            <p className="text-muted-foreground mt-2">Alguns dos projetos executados em total conformidade governamental.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-sm bg-card">
              <div className="flex items-center gap-2 text-primary mb-3">
                <MapPin size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Amaturá - AM</span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Quadras Esportivas e Pavimentação</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Instalação de complexos poliesportivos e pavimentação asfáltica de vias urbanas com mobilização logística de balsas.</p>
            </div>

            <div className="p-8 border rounded-sm bg-card">
              <div className="flex items-center gap-2 text-primary mb-3">
                <MapPin size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Manaus - AM</span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Hospital Militar de Área de Manaus</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Contratos recorrentes de manutenção corretiva, engenharia civil estrutural e predial em instalações do Exército Brasileiro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground">Perguntas Frequentes</h2>
            <p className="text-muted-foreground mt-2">Dúvidas comuns sobre nossos contratos com órgãos públicos.</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-card border rounded-sm p-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>A VR Lopes possui CND e atestados técnicos regularizados?</AccordionTrigger>
              <AccordionContent>
                Sim, mantemos a regularidade jurídica, fiscal e trabalhista atualizada, com todas as Certidões Negativas de Débitos (CNDs) ativas e atestados técnicos devidamente averbados no CREA.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como é feito o planejamento logístico para o interior do Amazonas?</AccordionTrigger>
              <AccordionContent>
                Possuímos frota terceirizada de balsas empurradoras e logística própria de abastecimento de agregados, cimento e madeiras, o que nos permite mobilizar canteiros de forma rápida para as calhas dos rios Solimões e Negro.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-foreground">Precisa de suporte em licitações ou contratos?</h3>
            <p className="text-primary-foreground/70 mt-1">Converse com nossos engenheiros especialistas em engenharia pública.</p>
          </div>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-sm font-bold hover:bg-zinc-800 transition-colors whitespace-nowrap">
            Falar com a Equipe <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
