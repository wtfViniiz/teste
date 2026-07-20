"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, Trophy, Palette, BookOpen, TreePine, Users, Heart } from "lucide-react";

const pilares = [
  {
    icon: Trophy,
    title: "Esporte",
    desc: "Apoio a atletas locais e projetos esportivos de base, promovendo saúde, disciplina e oportunidades para crianças e jovens da Amazônia. Acreditamos que o esporte é um agente transformador de vidas.",
  },
  {
    icon: Palette,
    title: "Cultura",
    desc: "Patrocínio e incentivo a manifestações culturais regionais, valorizando a rica identidade e a diversidade do povo amazônida. A cultura fortalece laços e preserva memórias.",
  },
  {
    icon: BookOpen,
    title: "Educação e Inclusão",
    desc: "Programas de capacitação profissional e contratação local prioritária nas áreas onde nossas obras são executadas, gerando emprego e renda para a população local.",
  },
  {
    icon: TreePine,
    title: "Sustentabilidade",
    desc: "Gestão rigorosa de resíduos da construção civil, mitigação de impactos ambientais e adoção de práticas sustentáveis que respeitam a flora e a fauna amazônica.",
  },
  {
    icon: Users,
    title: "Desenvolvimento Comunitário",
    desc: "Projetos que incentivam a cidadania, a educação e o desenvolvimento humano em comunidades onde a VR Lopes atua, construindo não apenas obras, mas oportunidades.",
  },
  {
    icon: Heart,
    title: "Responsabilidade Social",
    desc: "Compromisso genuíno com o bem-estar das comunidades. Entendemos que empresas fortes têm a responsabilidade de ajudar a construir sociedades mais justas e equilibradas.",
  },
];

export function ResponsabilidadePage() {
  return (
    <>
      <PageHeader
        title="Projetos Sociais"
        subtitle="Acreditamos que empresas fortes ajudam a construir sociedades fortes. Nosso compromisso vai além das obras."
        breadcrumbs={[{ label: "Projetos Sociais" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Além do Canteiro</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Construindo infraestrutura. Transformando vidas.
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Acreditamos que o papel de uma empresa de engenharia não se restringe a erguer estruturas físicas. Temos a responsabilidade de promover o desenvolvimento humano e fortalecer as comunidades onde estamos inseridos.
                </p>
                <p>
                  Através do fomento ativo ao esporte, cultura e inclusão social, a VR Lopes investe no futuro da Região Norte, apoiando projetos que geram oportunidades reais para crianças, jovens e adultos.
                </p>
                <p>
                  Nosso compromisso vai além das obras: buscamos deixar um legado positivo e duradouro para as comunidades amazônicas onde atuamos.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilares.map((pilar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border rounded-sm p-8 hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                  <pilar.icon size={26} />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{pilar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-white/50 font-bold uppercase tracking-widest text-xs">Nossa Visão</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                Um legado que permanece muito além das estruturas de concreto.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Cada obra que entregamos é também uma oportunidade de impactar positivamente vidas: empregos gerados, profissionais capacitados, atletas incentivados, comunidades fortalecidas.
              </p>
              <Link href="/sobre" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Conheça nossa essência <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "Amazônia", label: "Nossa região de atuação" },
                { value: "Comunidade", label: "Foco no desenvolvimento local" },
                { value: "Legado", label: "O que deixamos para trás" },
                { value: "Futuro", label: "O que construímos juntos" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-sm text-center hover:border-primary/40 transition-colors">
                  <p className="font-display font-bold text-primary text-xl mb-2">{item.value}</p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
