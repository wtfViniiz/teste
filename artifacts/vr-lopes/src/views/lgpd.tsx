"use client";

import { PageHeader } from "@/components/page-header";
import { ShieldAlert, Info, UserCheck } from "lucide-react";

export function LGPDPage() {
  return (
    <>
      <PageHeader
        title="Conformidade LGPD"
        subtitle="Entenda como a VR Lopes Engenharia coleta, armazena, protege e trata os seus dados pessoais em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
        breadcrumbs={[{ label: "LGPD" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          
          {/* Introdução */}
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-foreground">Tratamento Seguro de Dados Pessoais</h2>
            <p className="text-muted-foreground leading-relaxed">
              A VR Lopes Engenharia tem o compromisso de proteger a privacidade e a segurança das informações fornecidas por nossos usuários, candidatos a vagas de emprego, parceiros comerciais e clientes. Explicamos abaixo como tratamos e protegemos seus dados.
            </p>
          </div>

          <hr className="border-border" />

          {/* Pilares LGPD */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <UserCheck className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Direitos Garantidos</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Você pode solicitar acesso, retificação, limitação ou exclusão de seus dados a qualquer momento de forma simplificada.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <ShieldAlert className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Finalidade Limita</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Coletamos apenas dados essenciais para o preenchimento de propostas comerciais ou registro no Banco de Talentos.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <Info className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Segurança de Dados</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Sistemas com criptografia de transmissão e acesso restrito a colaboradores autorizados da construtora.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Seções detalhadas */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-foreground">Como e Quais Dados Coletamos?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Coletamos dados cadastrais (como Nome, E-mail, Telefone e Área de Interesse) que você preenche voluntariamente em nossos formulários de <strong>Contato</strong> e de <strong>Banco de Talentos / Trabalhe Conosco</strong>. Não realizamos a coleta de dados sensíveis (origem racial, filiação política ou dados religiosos) em nosso portal web.
            </p>

            <h3 className="text-2xl font-display font-bold text-foreground">Qual a Base Legal para o Tratamento?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Baseamo-nos primariamente no seu <strong>Consentimento</strong> livre e esclarecido (ao preencher e submeter os dados nos formulários), no <strong>Cumprimento de Obrigações Legais ou Regulatórias</strong>, ou para a <strong>Execução de Contratos Técnicos e Comerciais</strong> previamente solicitados por você.
            </p>

            <h3 className="text-2xl font-display font-bold text-foreground">Contato do Encarregado de Proteção de Dados (DPO)</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Para exercer seus direitos de acesso, alteração ou exclusão de dados pessoais da nossa base, entre em contato direto com o nosso Encarregado de Proteção de Dados (DPO) através do e-mail exclusivo: <a href="mailto:dpo@vrlopes.com.br" className="text-primary font-semibold hover:underline">dpo@vrlopes.com.br</a>. As requisições serão analisadas e respondidas no prazo legal de 15 dias.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
