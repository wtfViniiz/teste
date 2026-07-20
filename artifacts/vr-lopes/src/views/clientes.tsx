"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, Building2, Shield, Landmark } from "lucide-react";

const clientes = [
  { name: "Hospital Militar de Área de Manaus (HMAM)", tipo: "Militar / Federal" },
  { name: "Comissão Regional de Obras da 12ª Região (CRO/12)", tipo: "Militar / Federal" },
  { name: "12º Batalhão de Suprimentos", tipo: "Militar / Federal" },
  { name: "Comando de Apoio da Aeronáutica", tipo: "Militar / Federal" },
  { name: "BCom Sel", tipo: "Militar / Federal" },
  { name: "GAAAE", tipo: "Militar / Federal" },
  { name: "Prefeitura Municipal de Amaturá – AM", tipo: "Municipal" },
  { name: "Esgotec", tipo: "Privado" },
  { name: "Paiva Construções", tipo: "Privado" },
  { name: "Condomínio Paradise River", tipo: "Privado" },
  { name: "Condomínio Marina Rio Belo", tipo: "Privado" },
];

const tipoConfig: Record<string, { color: string; icon: typeof Building2 }> = {
  "Militar / Federal": { color: "bg-blue-950/60 border-blue-800/30 text-blue-300", icon: Shield },
  "Municipal": { color: "bg-zinc-800/60 border-zinc-700/30 text-zinc-300", icon: Landmark },
  "Privado": { color: "bg-amber-950/40 border-amber-800/30 text-amber-400", icon: Building2 },
};

export function ClientesPage() {
  return (
    <>
      <PageHeader
        title="Nossos Clientes"
        subtitle="A confiança de instituições públicas de rigor militar e grandes nomes do setor privado comprova nossa capacidade técnica e compromisso ético."
        breadcrumbs={[{ label: "Clientes" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Quem Confia em Nós</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Parceiros que reconhecem a excelência.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ao longo de sua trajetória, a VR Lopes LTDA tem desenvolvido soluções para importantes instituições públicas e privadas na Região Norte do Brasil. A diversidade da nossa carteira de clientes reflete nossa capacidade de atender diferentes segmentos com a mesma qualidade e comprometimento.
              </p>
            </motion.div>
          </div>

          {/* Segmentos */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Shield, title: "Setor Militar e Federal", count: 6, desc: "Atendimento a bases militares, hospitais militares e órgãos federais com os mais altos padrões de conformidade e segurança." },
              { icon: Landmark, title: "Setor Público Municipal", count: 1, desc: "Obras e serviços para prefeituras municipais, contribuindo para o desenvolvimento das cidades do interior do Amazonas." },
              { icon: Building2, title: "Setor Privado", count: 4, desc: "Construtoras, condomínios e empresas privadas que confiam na VR Lopes para a execução de obras e serviços de alto padrão." },
            ].map((seg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-sm p-8 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-sm flex items-center justify-center text-primary mb-5">
                  <seg.icon size={26} />
                </div>
                <p className="text-4xl font-display font-bold text-foreground mb-1">{seg.count}+</p>
                <h3 className="font-bold text-foreground mb-3 text-lg">{seg.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{seg.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Client list */}
          <h3 className="text-2xl font-display font-bold text-foreground mb-8">Carteira de Clientes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientes.map((cliente, i) => {
              const cfg = tipoConfig[cliente.tipo];
              const Icon = cfg.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card border rounded-sm p-5 hover:border-primary/40 hover:shadow-sm transition-all flex items-start gap-4"
                >
                  <div className={`shrink-0 w-10 h-10 rounded-sm flex items-center justify-center ${cfg.color} border`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm leading-snug">{cliente.name}</p>
                    <p className="text-muted-foreground text-xs mt-1">{cliente.tipo}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-foreground">Quer fazer parte da nossa carteira?</h3>
            <p className="text-primary-foreground/70 mt-1">Entre em contato e apresente seu projeto à nossa equipe técnica.</p>
          </div>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-sm font-bold hover:bg-zinc-800 transition-colors whitespace-nowrap">
            Fale Conosco <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
