"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, HardHat, FileCheck2, Calculator, Map, Users, Lightbulb } from "lucide-react";

const diferenciais = [
  {
    icon: Clock,
    title: "Cumprimento de Prazos",
    desc: "Cronogramas realistas e gestão rigorosa de etapas, entregando a obra no tempo acordado."
  },
  {
    icon: ShieldCheck,
    title: "Garantia de Qualidade",
    desc: "Materiais certificados e acompanhamento técnico constante para durabilidade assegurada."
  },
  {
    icon: HardHat,
    title: "Equipe Especializada",
    desc: "Engenheiros, mestres de obra e técnicos com vasta experiência no setor construtivo."
  },
  {
    icon: FileCheck2,
    title: "Compliance Público",
    desc: "Atuação transparente e dentro das normas legais em licitações e contratos governamentais."
  },
  {
    icon: Calculator,
    title: "Precisão Orçamentária",
    desc: "Planejamento financeiro detalhado para evitar surpresas e aditivos desnecessários."
  },
  {
    icon: Map,
    title: "Expertise Regional",
    desc: "Domínio das peculiaridades logísticas e climáticas de construir no Amazonas."
  },
  {
    icon: Users,
    title: "Atendimento Consultivo",
    desc: "Comunicação clara e acompanhamento próximo com o cliente em todas as fases da obra."
  },
  {
    icon: Lightbulb,
    title: "Inovação Técnica",
    desc: "Uso de métodos construtivos modernos e ferramentas de gestão de obras eficientes."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none"></rect>
              <path d="M0,40 L40,40 L40,0" fill="none" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-white/80 font-bold uppercase tracking-wider text-sm">
                Por que escolher a VR Lopes
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              A solidez que o seu <br/>projeto <span className="text-white border-b border-primary/50 font-bold">exige.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-white/70 text-lg">
              Nosso compromisso vai além do canteiro de obras. Construímos relações de confiança baseadas em entrega, previsibilidade e excelência técnica.
            </p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {diferenciais.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors group"
            >
              <div className="bg-primary/20 w-12 h-12 rounded-sm flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-3">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
