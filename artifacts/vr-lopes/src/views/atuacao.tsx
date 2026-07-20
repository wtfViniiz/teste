"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, Building2, Home, Building, PackageSearch } from "lucide-react";
import engPublicaImg from "@assets/generated_images/eng-publica.jpg";
import engResidencialImg from "@assets/generated_images/eng-residencial.jpg";
import engCondominiosImg from "@assets/generated_images/eng-condominios.jpg";

const areas = [
  {
    href: "/atuacao/publica",
    icon: Building2,
    title: "Engenharia Pública",
    image: engPublicaImg.src,
    desc: "Execução de obras e serviços para os governos municipal, estadual e federal, com rigor técnico e plena conformidade com a legislação.",
    items: [
      "Escolas, Creches e UBS",
      "Hospitais e Edificações Públicas",
      "Quadras e Arenas Esportivas",
      "Pavimentação Urbana",
      "Drenagem Superficial e Profunda",
      "Redes Elétricas",
      "Manutenção Predial Preventiva e Corretiva",
    ],
  },
  {
    href: "/atuacao/residencial",
    icon: Home,
    title: "Engenharia Residencial",
    image: engResidencialImg.src,
    desc: "Departamento especializado na construção e reforma de residências de alto padrão, com elevado padrão de acabamento e gestão rigorosa.",
    items: [
      "Construção de Residências de Alto Padrão",
      "Reformas Completas e Ampliações",
      "Gerenciamento de Obras",
      "Instalações Elétricas e Hidráulicas",
      "Impermeabilizações",
      "Acabamentos Especiais",
    ],
  },
  {
    href: "/atuacao/condominios",
    icon: Building,
    title: "Engenharia para Condomínios",
    image: engCondominiosImg.src,
    desc: "Prestação de serviços especializados para condomínios residenciais e comerciais, garantindo valorização patrimonial e segurança.",
    items: [
      "Reformas Estruturais",
      "Manutenção Preventiva e Corretiva",
      "Pintura Predial",
      "Serviços Elétricos e Hidráulicos",
      "Impermeabilização",
      "Limpeza Especializada",
      "Fornecimento de Mão de Obra Técnica",
    ],
  },
  {
    href: "/atuacao/materiais",
    icon: PackageSearch,
    title: "Fornecimento de Materiais",
    image: null,
    desc: "Fornecimento de materiais e insumos para construção civil e manutenção, atendendo órgãos públicos, empresas e clientes privados.",
    items: [
      "Materiais para Obras Públicas",
      "Insumos para Construção Civil",
      "Materiais Hidráulicos e Elétricos",
      "Materiais de Acabamento",
      "Atendimento a Clientes Privados",
      "Soluções Integradas para Construtoras",
    ],
  },
];

export function AtuacaoPage() {
  return (
    <>
      <PageHeader
        title="Áreas de Atuação"
        subtitle="Da obra pública à residência de alto padrão — equipes especializadas para cada segmento da construção civil."
        breadcrumbs={[{ label: "Áreas de Atuação" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {areas.map((area, idx) => (
              <motion.div
                key={area.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border shadow-sm hover:shadow-lg transition-shadow ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={`relative h-80 lg:h-auto bg-zinc-800 ${idx % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  {area.image ? (
                    <img src={area.image} alt={area.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                      <area.icon size={120} className="text-white/10" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-primary/20 border border-primary/40 p-3 rounded-sm inline-block text-primary">
                      <area.icon size={28} />
                    </div>
                  </div>
                </div>

                <div className={`bg-card p-10 lg:p-12 flex flex-col justify-center ${idx % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">{area.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{area.desc}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {area.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors self-start"
                  >
                    Ver detalhes <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-display font-bold mb-4">Tem um projeto em mente?</h3>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">Entre em contato e descubra como a VR Lopes pode executar sua obra com excelência.</p>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-sm font-bold hover:bg-primary/90 transition-colors">
            Fale com nossa equipe <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
