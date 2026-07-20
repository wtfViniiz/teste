"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Shield, CheckCircle2, Scale, ShieldCheck, Users, Briefcase, Mail, AlertTriangle } from "lucide-react";

const pilares = [
  {
    icon: Shield,
    title: "Prevenção",
    text: "Disseminação de valores éticos por meio de treinamentos periódicos, alinhamento de conduta e identificação preventiva de riscos operacionais e de conformidade."
  },
  {
    icon: Scale,
    title: "Detecção",
    text: "Canais corporativos de comunicação, auditorias internas contínuas e fiscalização de processos para identificar qualquer irregularidade ou desvio técnico."
  },
  {
    icon: ShieldCheck,
    title: "Remediação",
    text: "Investigação ágil realizada pelo colegiado, aplicação de penalidades disciplinares cabíveis e melhoria imediata dos planos de controle e contingência."
  }
];

const diretrizes = [
  "Transparência em todas as licitações e execuções de contratos públicos.",
  "Tolerância zero para atos de corrupção, suborno, fraudes ou facilitação ilegal.",
  "Garantia de igualdade, respeito às leis trabalhistas e prevenção do assédio.",
  "Respeito às licenças e parâmetros legais da proteção ambiental e florestal.",
  "Rigorosa integridade e prestação de contas contábeis e fiscais auditáveis.",
  "Sigilo de dados comerciais e proteção da informação segundo a LGPD."
];

export function CompliancePage() {
  return (
    <>
      <PageHeader
        title="Governança e Compliance"
        subtitle="Nosso compromisso inegociável com a ética corporativa, gestão responsável e integridade operacional."
        breadcrumbs={[{ label: "Governança e Compliance" }]}
      />

      {/* 1. Cultura de Integridade */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Cultura Corporativa</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              Sustentando Obras com Ética e Transparência
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na VR Lopes, acreditamos que a solidez de uma construção inicia-se nas bases éticas que sustentam nossa gestão. Nosso Programa de Compliance foi estabelecido para garantir que todas as nossas atividades sejam orientadas pela retidão, honestidade e absoluto cumprimento das leis brasileiras.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Atuamos com responsabilidade e conformidade ativa, garantindo que parceiros comerciais, órgãos públicos e clientes tenham a certeza de estar trabalhando com uma empresa idônea. Este compromisso dita a forma como gerenciamos nossas equipes nos canteiros, negociamos com fornecedores e entregamos infraestrutura no Amazonas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Estrutura de Governança */}
      <section className="py-24 bg-muted/30 border-t border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Gestão Responsável</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Governança Corporativa</h2>
            <p className="text-muted-foreground text-sm mb-12 max-w-xl">
              Estruturamos nossos processos de tomada de decisão com foco em mitigar riscos operacionais, tributários e jurídicos.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border rounded-sm flex flex-col gap-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">Comitê de Ética e Conduta</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Um comitê interno composto por representantes das diretorias administrativa e jurídica. É encarregado de apurar comunicações internas, gerir riscos de conduta profissional e manter atualizado o manual corporativo de práticas da VR Lopes.
                </p>
              </div>

              <div className="p-8 bg-card border rounded-sm flex flex-col gap-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">Auditoria Contábil e Contratual</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Todos os processos de compra de insumos, contratação de terceirizados e execuções licitatórias seguem estritas diretrizes de escrituração contábil, permitindo rastreabilidade financeira completa e prestação de contas auditável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pilares */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Funcionamento</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground">Pilares do Programa de Compliance</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pilares.map((pilar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-sm border bg-card relative overflow-hidden hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="absolute top-4 right-4 opacity-5 text-primary">
                  <pilar.icon size={80} />
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                    <pilar.icon size={20} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">{pilar.title}</h3>
                  <p className="leading-relaxed text-muted-foreground text-xs">{pilar.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Diretrizes e Lei Anticorrupção */}
      <section className="py-24 bg-muted/30 border-t border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Parâmetros Éticos</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-12">Nossas Diretrizes de Conduta</h2>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {diretrizes.map((diretriz, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-xs leading-relaxed">{diretriz}</p>
                </motion.div>
              ))}
            </div>

            {/* Aviso Anticorrupção */}
            <div className="mt-16 flex gap-4 p-6 bg-primary/10 border border-primary/20 rounded-sm text-foreground max-w-3xl mx-auto">
              <AlertTriangle className="text-primary shrink-0 mt-0.5" size={20} />
              <div className="text-xs leading-relaxed">
                <strong className="text-foreground block mb-1">Declaração de Rigor Técnico e Legal:</strong>
                A VR Lopes cumpre integralmente os preceitos da Lei Anticorrupção Brasileira (Lei nº 12.846/2013). Não toleramos nenhum tipo de facilitação, vantagens ilícitas ou suborno na relação com agentes públicos ou privados. Todo colaborador está instruído a recusar de forma absoluta qualquer prática ilegal nos processos.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comitê de Ética CTA */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <h3 className="text-2xl font-display font-bold mb-4">Relatos ou Consulta sobre Conduta</h3>
          <p className="text-white/60 mb-8 text-xs leading-relaxed">
            Nosso Código de Conduta e Integridade é um regulamento corporativo interno. Para reportar suspeitas de descumprimento ético ou esclarecer dúvidas de governança, entre em contato seguro com o nosso comitê técnico.
          </p>
          <a
            href="mailto:compliance@vrlopes.com.br"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-sm font-semibold transition-all text-xs uppercase tracking-wider font-bold"
          >
            <Mail size={16} />
            <span>Contatar Comitê de Ética</span>
          </a>
        </div>
      </section>
    </>
  );
}
