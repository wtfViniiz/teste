"use client";

import { motion } from "framer-motion";

const clients = [
  "Esgotec",
  "Paiva Construções",
  "Condomínio Paradise River",
  "Condomínio Marina Rio Belo",
  "Comissão Regional de Obras (CRO/12)",
  "12º Batalhão de Suprimentos",
  "BCom Sel",
  "GAAAE",
  "Hospital Militar de Área de Manaus",
  "Comando de Apoio da Aeronáutica",
  "Prefeitura Municipal de Amaturá – AM"
];

export function Clientes() {
  return (
    <section id="clientes" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-secondary-foreground/85 font-bold uppercase tracking-wider text-sm">
              Quem Confia em Nós
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">
            Nossos Parceiros Institucionais
          </h2>
          <p className="text-secondary-foreground/75 text-lg">
            A confiança de instituições públicas de rigor militar e de grandes nomes do setor imobiliário privado 
            atesta nossa capacidade técnica e compromisso ético.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-secondary-foreground/10 px-6 py-4 rounded-sm flex items-center justify-center hover:bg-zinc-50 hover:border-primary/50 transition-colors shadow-xs"
            >
              <span className="font-semibold text-secondary-foreground text-sm md:text-base text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
