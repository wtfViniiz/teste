"use client";

import { PageHeader } from "@/components/page-header";
import { FileText, Edit, ShieldAlert } from "lucide-react";

export function TermosPage() {
  return (
    <>
      <PageHeader
        title="Termos de Uso"
        subtitle="Regras e condições para a navegação segura e utilização dos recursos disponíveis no site da VR Lopes."
        breadcrumbs={[{ label: "Termos de Uso" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          
          {/* Introdução */}
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-foreground">Termos e Condições Gerais</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar, navegar ou preencher qualquer formulário no site da VR Lopes Engenharia, você declara estar ciente e de pleno acordo com as regras estabelecidas nestes Termos de Uso. Caso não concorde com alguma disposição, recomendamos não prosseguir na navegação.
            </p>
          </div>

          <hr className="border-border" />

          {/* Destaques */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <FileText className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Propriedade Intelectual</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Todo o conteúdo visual, marcas, logos e textos expostos pertencem exclusivamente à construtora.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <Edit className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Uso Permitido</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Proibido uso comercial de cópia, raspagem de dados ou reprodução das imagens dos projetos sem autorização.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <ShieldAlert className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Responsabilidade</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                O usuário responde civil e criminalmente por tentativas de ataque ou envio de dados falsificados nos formulários.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Seções de Texto */}
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <h3 className="text-2xl font-display font-bold text-foreground">1. Direitos sobre Projetos Residenciais</h3>
            <p>
              Os projetos arquitetônicos exibidos em nosso catálogo digital são propriedade intelectual da VR Lopes Engenharia e de seus projetistas licenciados. A exibição pública não confere licença de uso para construção externa de terceiros. A replicação física das plantas e fachadas sem contrato comercial vigente configura violação de direitos autorais protegida pela Lei de Propriedade Intelectual.
            </p>

            <h3 className="text-2xl font-display font-bold text-foreground">2. Limitações de Responsabilidade Técnica</h3>
            <p>
              As informações técnicas, especificações de materiais e simulações estéticas contidas no site têm caráter exclusivamente informativo. Um orçamento final executivo ou contrato de obra depende obrigatoriamente de visita técnica local de nossos engenheiros, estudo do terreno e aprovação de memorial descritivo assinado pelas partes.
            </p>

            <h3 className="text-2xl font-display font-bold text-foreground">3. Conduta de Navegação</h3>
            <p>
              É expressamente proibido o uso de robôs, crawlers, scrapers ou outros processos automatizados para extrair informações do nosso site. Também é vedado qualquer comportamento que possa corromper, sobrecarregar ou prejudicar a estabilidade técnica da plataforma.
            </p>

            <h3 className="text-2xl font-display font-bold text-foreground">4. Foro de Resolução de Conflitos</h3>
            <p>
              Estes Termos de Uso são regidos e interpretados em conformidade com as Leis da República Federativa do Brasil. Para dirimir quaisquer dúvidas ou litígios decorrentes do uso do site, as partes elegem exclusivamente o foro da Comarca de <strong>Manaus, Amazonas</strong>, com renúncia expressa a qualquer outro.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
