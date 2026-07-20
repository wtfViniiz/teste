"use client";

import { motion } from "framer-motion";
import p1Img from "@assets/generated_images/team-placeholder-1.jpg";
import p2Img from "@assets/generated_images/team-placeholder-2.jpg";
import p3Img from "@assets/generated_images/team-placeholder-3.jpg";
import p4Img from "@assets/generated_images/team-placeholder-4.jpg";

const team = [
  {
    name: "Valéria Rodrigues Lopes",
    role: "Diretoria Administrativa",
    image: p1Img.src,
    description: "Gestão estratégica, administrativa e financeira, garantindo a solidez institucional da empresa."
  },
  {
    name: "Welib Ferreira Santos",
    role: "Diretoria de Operações",
    image: p2Img.src,
    description: "Coordenação geral de operações logísticas e controle de contratos."
  },
  {
    name: "Josebarl Vieira",
    role: "Engenharia de Obras Públicas",
    image: p3Img.src,
    description: "Especialista técnico responsável pelas execuções e conformidade de obras governamentais."
  },
  {
    name: "Kevin Ferreira",
    role: "Eng. Residencial e Condomínios",
    image: p4Img.src,
    description: "Responsável pelo alto padrão técnico em residências e manutenção predial privada."
  }
];

export function Equipe() {
  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Nossa Estrutura de Gestão
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Liderança que constrói.
          </h2>
          <p className="text-muted-foreground text-lg">
            Por trás de cada grande obra, existe uma gestão técnica, administrativa e operacional focada em resultados e excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-sm overflow-hidden mb-6 relative bg-muted">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/50 transition-colors duration-500 rounded-sm pointer-events-none"></div>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3 text-sm uppercase tracking-wide">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
