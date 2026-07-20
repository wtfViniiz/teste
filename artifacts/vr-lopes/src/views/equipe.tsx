"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ArrowRight } from "lucide-react";
import p1Img from "@assets/generated_images/team-placeholder-1.jpg";
import p2Img from "@assets/generated_images/team-placeholder-2.jpg";
import p3Img from "@assets/generated_images/team-placeholder-3.jpg";
import p4Img from "@assets/generated_images/team-placeholder-4.jpg";

const team = [
  {
    name: "Valéria Rodrigues Lopes",
    role: "Diretoria Administrativa",
    image: p1Img.src,
    formacao: "Graduação em Administração de Empresas",
    crea: "CRA-AM Ativo",
    especialidade: "Gestão Financeira e Contratos Públicos",
    experiencia: "Mais de 10 anos liderando o setor administrativo e financeiro da construtora.",
    bio: "Responsável pela gestão administrativa, financeira, estratégica e institucional da empresa. Valéria atua na condução das relações institucionais, no planejamento estratégico e na solidez organizacional da VR Lopes.",
  },
  {
    name: "Welib Ferreira Santos",
    role: "Diretoria de Operações",
    image: p2Img.src,
    formacao: "Graduação em Gestão de Operações e Obras",
    crea: "Gestão Operacional",
    especialidade: "Logística Fluvial e Mobilização",
    experiencia: "Ampla experiência em mobilização rápida de canteiros e logística fluvial na bacia amazônica.",
    bio: "Responsável pelo planejamento, execução, gestão operacional, inovação e expansão dos negócios da empresa. Welib lidera as frentes de operações com foco em eficiência, inovação e crescimento sustentável.",
  },
  {
    name: "Josebarl Vieira",
    role: "Engenharia de Obras Públicas",
    image: p3Img.src,
    formacao: "Bacharel em Engenharia Civil",
    crea: "CREA-AM 15.890-D",
    especialidade: "Infraestrutura Urbana e Saneamento",
    experiencia: "15 anos de atuação em engenharia civil pública, fiscalização e obras viárias.",
    bio: "Coordenação técnica de obras públicas, infraestrutura, planejamento, fiscalização e execução de contratos governamentais. Josebarl garante plena conformidade técnica e legal em todos os contratos públicos da VR Lopes.",
  },
  {
    name: "Kevin Ferreira",
    role: "Eng. Residencial e Condomínios",
    image: p4Img.src,
    formacao: "Bacharel em Engenharia Civil",
    crea: "CREA-AM 22.450-D",
    especialidade: "Edificações e Acabamento Fino",
    experiencia: "8 anos gerenciando obras residenciais de alto padrão e reformas condominiais.",
    bio: "Responsável pela execução de empreendimentos residenciais de alto padrão, reformas e manutenção em condomínios. Kevin assegura o mais alto padrão de qualidade e acabamento em cada projeto residencial.",
  },
];

export function EquipePage() {
  return (
    <>
      <PageHeader
        title="Estrutura de Gestão"
        subtitle="Por trás de cada grande obra, existe uma liderança técnica, administrativa e operacional comprometida com excelência e resultados."
        breadcrumbs={[{ label: "Equipe" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border rounded-sm overflow-hidden flex flex-col sm:flex-row hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="sm:w-48 h-56 sm:h-auto shrink-0 overflow-hidden bg-zinc-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center flex-1">
                  <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">{member.role}</p>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">{member.name}</h3>
                  
                  {/* Ficha Técnica do Profissional */}
                  <div className="space-y-1.5 text-xs text-muted-foreground mb-4 border-t pt-3">
                    <div>
                      <strong className="text-foreground">Formação:</strong> {member.formacao}
                    </div>
                    <div>
                      <strong className="text-foreground">Registro:</strong> {member.crea}
                    </div>
                    <div>
                      <strong className="text-foreground">Especialidade:</strong> {member.especialidade}
                    </div>
                    <div>
                      <strong className="text-foreground">Experiência:</strong> {member.experiencia}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed border-t pt-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture section */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-white/50 font-bold uppercase tracking-widest text-xs">Nossa Cultura</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Pessoas que constroem mais do que obras.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Na VR Lopes, acreditamos que a excelência das obras começa pelas pessoas. Valorizamos o desenvolvimento profissional contínuo, o trabalho em equipe e o orgulho de construir infraestrutura que transforma vidas na Região Norte do Brasil.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-bold hover:bg-primary/90 transition-colors"
            >
              Fale com nossa equipe <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
