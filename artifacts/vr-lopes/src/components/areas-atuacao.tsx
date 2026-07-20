"use client";

import { motion } from "framer-motion";
import engPublicaImg from "@assets/generated_images/eng-publica.jpg";
import engResidencialImg from "@assets/generated_images/eng-residencial.jpg";
import engCondominiosImg from "@assets/generated_images/eng-condominios.jpg";
import { Building2, Home, Building, PackageSearch } from "lucide-react";

const areas = [
  {
    id: "publica",
    title: "Engenharia Pública",
    icon: Building2,
    image: engPublicaImg.src,
    description: "Execução de grandes obras para os governos municipal, estadual e federal com rigor técnico e conformidade.",
    items: [
      "Escolas e Creches",
      "UBS e Hospitais",
      "Quadras e Arenas Esportivas",
      "Pavimentação e Drenagem Urbana",
      "Redes Elétricas",
      "Manutenção Predial Pública"
    ]
  },
  {
    id: "residencial",
    title: "Engenharia Residencial",
    icon: Home,
    image: engResidencialImg.src,
    description: "Concretizamos o sonho da casa própria com sofisticação, conforto e altíssimo padrão de acabamento.",
    items: [
      "Residências de Alto Padrão",
      "Reformas e Ampliações",
      "Gerenciamento de Obras",
      "Instalações Hidrossanitárias",
      "Impermeabilizações",
      "Acabamentos Especiais"
    ]
  },
  {
    id: "condominios",
    title: "Engenharia para Condomínios",
    icon: Building,
    image: engCondominiosImg.src,
    description: "Valorização e segurança patrimonial através de manutenção especializada e obras em áreas comuns.",
    items: [
      "Reformas Estruturais",
      "Manutenção Preventiva e Corretiva",
      "Pintura Predial",
      "Serviços Elétricos e Hidráulicos",
      "Limpeza Especializada",
      "Fornecimento de Mão de Obra Técnica"
    ]
  },
  {
    id: "materiais",
    title: "Fornecimento de Materiais",
    icon: PackageSearch,
    image: null,
    description: "Logística eficiente e suprimentos de qualidade para garantir que as obras não parem.",
    items: [
      "Insumos para Órgãos Públicos",
      "Fornecimento para Empresas",
      "Atendimento a Clientes Privados",
      "Materiais Hidráulicos e Elétricos",
      "Materiais de Acabamento",
      "Ferramentas e Equipamentos"
    ]
  }
];

export function AreasAtuacao() {
  return (
    <section id="atuacao" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Áreas de Atuação
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Especialidade em cada frente de obra.
          </h2>
          <p className="text-muted-foreground text-lg">
            Da fundação ao acabamento, da licitação pública à residência de luxo. 
            Temos equipes especializadas para cada segmento, garantindo que as especificidades 
            de cada projeto sejam respeitadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, idx) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-sm overflow-hidden border shadow-sm group hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {area.image ? (
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent w-full p-6 z-20">
                    <div className="flex items-center gap-3 text-white">
                      <area.icon size={28} className="text-primary" />
                      <h3 className="text-2xl font-display font-bold">{area.title}</h3>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-64 bg-secondary p-6 flex flex-col justify-end relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 text-secondary-foreground/5 group-hover:scale-110 transition-transform duration-700">
                    <area.icon size={120} />
                  </div>
                  <div className="relative z-20 flex items-center gap-3 text-secondary-foreground">
                    <area.icon size={28} className="text-primary" />
                    <h3 className="text-2xl font-display font-bold">{area.title}</h3>
                  </div>
                </div>
              )}
              
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6">
                  {area.description}
                </p>
                <div className="grid grid-cols-1 gap-2 mt-auto">
                  {area.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span className="text-sm font-medium text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
