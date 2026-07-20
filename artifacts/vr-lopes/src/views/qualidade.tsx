"use client";

import { PageHeader } from "@/components/page-header";
import { Award, CheckCircle, ShieldCheck } from "lucide-react";

export function QualidadePage() {
  return (
    <>
      <PageHeader
        title="Política de Qualidade"
        subtitle="Nosso compromisso com a excelência construtiva, conformidade técnica e a melhoria contínua dos nossos processos."
        breadcrumbs={[{ label: "Política de Qualidade" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          
          {/* Introdução */}
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-foreground">Diretrizes de Qualidade VR Lopes</h2>
            <p className="text-muted-foreground leading-relaxed">
              Na VR Lopes Engenharia, a qualidade não é apenas um diferencial, mas sim a base de sustentação de todos os nossos empreendimentos. Atuamos com base em rigorosos padrões técnicos e de gestão para garantir construções seguras, duráveis e que excedam as expectativas dos nossos clientes públicos e privados.
            </p>
          </div>

          <hr className="border-border" />

          {/* Pilares */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <Award className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Certificações</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Alinhamento integral às diretrizes do PBQP-H (Programa Brasileiro da Qualidade e Produtividade do Habitat) e normas ISO 9001.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <ShieldCheck className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Rigor de Inspeção</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Controle rigoroso no recebimento de agregados e insumos, com ensaios laboratoriais contínuos de concreto e asfalto.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <CheckCircle className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Satisfação</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Foco no cumprimento estrito de prazos e no suporte pós-entrega com o fornecimento do manual de uso da edificação.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Compromissos detalhados */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-foreground">Nossos Compromissos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Capacitação Profissional:</strong> Treinar e atualizar continuamente nossa mão de obra operacional e corpo de engenharia em relação às novas tecnologias do mercado.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Sustentabilidade dos Materiais:</strong> Trabalhar em parceria com fornecedores homologados que comprovem a origem e a resistência técnica dos materiais de construção fornecidos.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Segurança em Primeiro Lugar:</strong> Manter canteiros organizados, limpos e estritamente em conformidade com a NR-18 (Segurança e Saúde no Trabalho na Indústria da Construção).
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Gestão de Riscos:</strong> Identificar e mitigar desvios operacionais de forma preventiva durante todas as etapas físicas da construção.
                </p>
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </>
  );
}
