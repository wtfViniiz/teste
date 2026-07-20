"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Target, Compass, Heart, CheckCircle2, ArrowRight, Award, Lightbulb, Users, ShieldCheck } from "lucide-react";

const valores = [
  "Ética e transparência em todas as relações.",
  "Excelência técnica e compromisso com a qualidade.",
  "Segurança das pessoas em primeiro lugar.",
  "Cumprimento de prazos e responsabilidade contratual.",
  "Respeito ao meio ambiente.",
  "Valorização das pessoas e do trabalho em equipe.",
  "Inovação e melhoria contínua.",
  "Responsabilidade social.",
  "Desenvolvimento do esporte e da cultura.",
  "Compromisso com o cliente e com a sociedade.",
];

const pilaresSobre = [
  {
    icon: Award,
    title: "Excelência",
    desc: "Buscamos o mais alto rigor técnico e controle de qualidade em cada etapa, desde os testes de laboratório em materiais até o acabamento final das obras."
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    desc: "Utilizamos tecnologias modernas de planejamento, gestão integrada e métodos construtivos eficientes para otimizar prazos e reduzir desperdícios."
  },
  {
    icon: Users,
    title: "Responsabilidade",
    desc: "Comprometimento ativo com a segurança em canteiros de obras, conformidade ambiental rigorosa e suporte social contínuo à comunidade local."
  }
];

const certificacoes = [
  {
    title: "PBQP-H Nível A",
    desc: "Conformidade e certificação máxima no Programa Brasileiro da Qualidade e Produtividade do Habitat para construtoras."
  },
  {
    title: "ISO 9001:2015",
    desc: "Padrão internacional de sistema de gestão de qualidade que valida a excelência nos processos e governança."
  },
  {
    title: "Gestão Ambiental Ativa",
    desc: "Selos e conformidades pelas melhores práticas em gestão de resíduos sólidos e preservação ambiental nas obras."
  }
];

export function SobrePage() {
  return (
    <>
      <PageHeader
        title="Nossa Essência"
        subtitle="Nascemos com o propósito de transformar espaços em oportunidades e obras em legado."
        breadcrumbs={[{ label: "Sobre" }]}
      />

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Quem Somos</span>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                A VR Lopes LTDA nasceu com o propósito de transformar espaços em oportunidades e obras em legado.
              </p>
              <p>
                Somos uma empresa de engenharia que une excelência técnica, inovação e responsabilidade social para entregar soluções completas nos setores público e privado. Atuamos desde o planejamento até a execução de obras, reformas, manutenção predial, fornecimento de materiais e serviços especializados, sempre com foco na qualidade, segurança e eficiência.
              </p>
              <p>
                Acreditamos que engenharia vai além da construção de edificações: ela transforma cidades, melhora a qualidade de vida das pessoas e cria oportunidades para o desenvolvimento econômico e social.
              </p>
              <p>
                Por isso, também investimos em iniciativas esportivas, culturais e sociais, entendendo que o fortalecimento da comunidade é parte essencial da construção de um futuro melhor.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missão / Visão / Propósito */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Identidade Corporativa</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-4xl font-display font-bold text-foreground">Missão, Visão e Propósito</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Missão",
                text: "Planejar, construir e transformar ambientes com excelência técnica, inovação e responsabilidade socioambiental, oferecendo soluções completas em engenharia, infraestrutura, manutenção e fornecimento de materiais, contribuindo para o desenvolvimento das cidades e para a melhoria da qualidade de vida das pessoas, promovendo também ações que incentivem o esporte, a cultura e a formação de cidadãos.",
                highlight: false,
              },
              {
                icon: Compass,
                title: "Visão",
                text: "Ser reconhecida até 2035 como uma das principais empresas de engenharia da Região Norte, referência nacional em obras públicas, empreendimentos residenciais de alto padrão, manutenção predial e soluções integradas de engenharia, destacando-se pela qualidade, inovação, ética e compromisso com o desenvolvimento social.",
                highlight: false,
              },
              {
                icon: Heart,
                title: "Propósito",
                text: "Construir infraestrutura que transforma vidas e desenvolver pessoas capazes de transformar a sociedade.",
                highlight: true,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-sm border relative overflow-hidden ${item.highlight ? "bg-zinc-950 border-zinc-800 text-white" : "bg-card"}`}
              >
                <div className={`absolute top-4 right-4 opacity-5`}>
                  <item.icon size={100} />
                </div>
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 ${item.highlight ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"}`}>
                  <item.icon size={24} />
                </div>
                <h3 className={`text-2xl font-display font-bold mb-4 ${item.highlight ? "text-white" : "text-foreground"}`}>{item.title}</h3>
                <p className={`leading-relaxed ${item.highlight ? "text-white/70" : "text-muted-foreground"}`}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares Corporativos (Excelência, Inovação, Responsabilidade) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Pilares de Gestão</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Nossos Pilares Operacionais</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              As bases que garantem a sustentabilidade do nosso crescimento e a satisfação contínua de nossos parceiros.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {pilaresSobre.map((pilar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-card border rounded-sm hover:border-primary/40 transition-all flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                    <pilar.icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">{pilar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pilar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">O que nos guia</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Nossos Valores</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              Os princípios que sustentam cada metro quadrado que construímos e cada relação que estabelecemos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {valores.map((valor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-4 p-5 bg-card border rounded-sm hover:border-primary/40 transition-colors"
                >
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="font-medium text-foreground">{valor}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prêmios e Certificações */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Conformidade e Qualidade</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Prêmios e Certificações</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              A atestação independente da nossa busca contínua pela melhoria de processos, sustentabilidade e conformidade.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {certificacoes.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-card border rounded-sm hover:border-primary/40 transition-all flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-foreground">Conheça nossas áreas de atuação</h3>
            <p className="text-primary-foreground/70 mt-1">Engenharia pública, residencial, condomínios e mais.</p>
          </div>
          <Link href="/atuacao" className="inline-flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-sm font-bold hover:bg-zinc-800 transition-colors whitespace-nowrap">
            Ver Atuação <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
