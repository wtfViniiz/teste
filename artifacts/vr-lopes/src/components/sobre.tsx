"use client";

import { motion } from "framer-motion";
import { Target, Compass, Heart, CheckCircle2 } from "lucide-react";

const valores = [
  "Excelência na Execução",
  "Transparência e Ética",
  "Segurança em Primeiro Lugar",
  "Compromisso Sustentável",
  "Inovação Construtiva",
  "Respeito às Pessoas"
];

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Story / Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Nossa Essência
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Mais do que obras, edificamos <span className="text-foreground border-b border-primary/50 font-bold">legados.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A VR Lopes LTDA nasceu com um propósito claro: trazer solidez e precisão para a engenharia no Amazonas. Somos uma empresa especializada na construção e gerenciamento de grandes obras, desde infraestrutura pública fundamental até residências de alto padrão e manutenção predial.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nossa abordagem une o rigor técnico da engenharia moderna com a compreensão profunda das demandas logísticas e climáticas da região amazônica.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-3xl font-display font-bold text-secondary mb-1">10+</p>
                <p className="text-sm font-medium text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-3xl font-display font-bold text-secondary mb-1">150+</p>
                <p className="text-sm font-medium text-muted-foreground">Obras Entregues</p>
              </div>
            </div>
          </motion.div>

          {/* Mission, Vision, Purpose */}
          <div className="grid gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border shadow-sm p-8 rounded-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/10 transition-transform group-hover:scale-110">
                <Target size={80} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-sm text-primary">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-secondary">Missão</h3>
                </div>
                <p className="text-muted-foreground">
                  Entregar soluções de engenharia com excelência técnica, prazos rigorosos e respeito aos orçamentos, garantindo a satisfação plena de nossos clientes públicos e privados.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border shadow-sm p-8 rounded-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/10 transition-transform group-hover:scale-110">
                <Compass size={80} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-sm text-primary">
                    <Compass size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-secondary">Visão</h3>
                </div>
                <p className="text-muted-foreground">
                  Ser reconhecida como a construtora referência em qualidade, confiabilidade e inovação estrutural na região Norte do Brasil.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-secondary border border-secondary shadow-sm p-8 rounded-sm text-secondary-foreground relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-8 text-white/5 transition-transform group-hover:scale-110">
                <Heart size={80} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/10 p-2 rounded-sm text-white">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Propósito</h3>
                </div>
                <p className="text-white/80">
                  Transformar vidas através de infraestruturas seguras e duradouras que dignificam as comunidades onde atuamos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-20 pt-16 border-t">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground">Os princípios que sustentam cada metro quadrado que construímos.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-w-4xl mx-auto">
            {valores.map((valor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <span className="font-medium text-foreground">{valor}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
