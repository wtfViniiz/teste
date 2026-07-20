"use client";

import { PageHeader } from "@/components/page-header";
import { Leaf, Recycle, Compass } from "lucide-react";

export function SustentabilidadePage() {
  return (
    <>
      <PageHeader
        title="Compromisso de Sustentabilidade"
        subtitle="Construindo o futuro com responsabilidade ecológica, gestão inteligente de resíduos e logística fluvial consciente."
        breadcrumbs={[{ label: "Sustentabilidade" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          
          {/* Introdução */}
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-foreground">Engenharia Integrada à Preservação</h2>
            <p className="text-muted-foreground leading-relaxed">
              Atuar no coração da bacia amazônica exige da VR Lopes Engenharia um compromisso diferenciado com a sustentabilidade. Desenvolvemos métodos de construção que minimizam os impactos sobre a flora, a fauna e as comunidades locais, aliando o progresso da infraestrutura à preservação ecológica.
            </p>
          </div>

          <hr className="border-border" />

          {/* Pilares ESG */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <Leaf className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Responsabilidade local</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Adoção de soluções técnicas adequadas ao clima e relevo amazônico, reduzindo movimentações de terra desnecessárias.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <Recycle className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Gestão de Resíduos</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Coleta seletiva rigorosa nos canteiros de obra, com reaproveitamento de sobras de madeira, concreto e ferragens.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <Compass className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Logística Verde</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Rotas otimizadas de transporte fluvial e terrestre, visando diminuir as emissões de carbono na entrega de agregados.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Objetivos Ambientais */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-foreground">Nossas Metas e Ações</h3>
            <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <span>
                  <strong>Redução de Desperdícios:</strong> Implementação de planejamento de corte e modulação de fôrmas de concreto e alvenaria estrutural, reduzindo em até 20% a geração de entulho.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <span>
                  <strong>Eficiência Energética e Hídrica:</strong> Instalação de sistemas de captação de água de chuva para limpeza de canteiros e reuso em argamassas não estruturais, além de incentivo ao uso de iluminação LED temporizada nas obras.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <span>
                  <strong>Parceria com Fornecedores Certificados:</strong> Só adquirimos madeiras e derivados que possuam o selo de origem legal (DOF - Documento de Origem Florestal) emitido pelos órgãos ambientais competentes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <span>
                  <strong>Preservação dos Recursos Hídricos:</strong> Controle rigoroso de efluentes em canteiros de obra, com caixas de decantação e filtragem para evitar contaminações em igarapés e rios da bacia.
                </span>
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </>
  );
}
