"use client";

import { PageHeader } from "@/components/page-header";
import { Lock, EyeOff, Shield } from "lucide-react";

export function PrivacidadePage() {
  return (
    <>
      <PageHeader
        title="Política de Privacidade"
        subtitle="Entenda como gerenciamos e resguardamos suas informações no ambiente virtual do site VR Lopes."
        breadcrumbs={[{ label: "Política de Privacidade" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          
          {/* Introdução */}
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-foreground">Sua Privacidade é Nossa Prioridade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Esta política aplica-se a todos os serviços e operações na web sob o domínio da VR Lopes Engenharia. Ela descreve as medidas de segurança adotadas para o tratamento de seus dados desde a sua navegação até o envio voluntário de dados cadastrais.
            </p>
          </div>

          <hr className="border-border" />

          {/* Destaques */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <Lock className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Criptografia SSL</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Toda a comunicação e tráfego de dados entre seu navegador e nossos servidores são protegidos por criptografia SSL/HTTPS.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <EyeOff className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Sem venda de dados</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Nunca vendemos, alugamos ou compartilhamos seus dados com terceiros para fins publicitários ou campanhas de marketing externas.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-sm space-y-4">
              <Shield className="text-primary" size={32} />
              <h3 className="font-display font-bold text-foreground text-lg">Acesso Restrito</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Somente profissionais essenciais das áreas comercial, RH e engenharia têm acesso autorizado aos formulários submetidos.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Tópicos */}
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <h3 className="text-2xl font-display font-bold text-foreground">1. Uso de Cookies</h3>
            <p>
              Cookies são pequenos arquivos salvos no seu computador para otimizar e agilizar a navegação. Utilizamos apenas cookies analíticos internos (como o Google Analytics) para entender o tráfego do site, número de visitantes e páginas mais acessadas de forma inteiramente anônima. Você pode desabilitar o uso de cookies nas configurações do seu navegador.
            </p>

            <h3 className="text-2xl font-display font-bold text-foreground">2. Período de Retenção de Dados</h3>
            <p>
              Os dados de propostas comerciais e contatos em geral são mantidos pelo período necessário para a prestação do serviço solicitado. Os dados submetidos ao Banco de Talentos ficam arquivados com segurança por até 12 meses, sendo eliminados permanentemente ao fim do ciclo caso não ocorra uma contratação ativa.
            </p>

            <h3 className="text-2xl font-display font-bold text-foreground">3. Links para Portais de Terceiros</h3>
            <p>
              Nosso site pode conter links para redes sociais, ferramentas de mapas e canais externos (como o WhatsApp). Recomendamos que você leia as respectivas políticas de privacidade desses canais externos, visto que a VR Lopes não possui ingerência sobre o tratamento de dados realizado fora do seu domínio.
            </p>

            <h3 className="text-2xl font-display font-bold text-foreground">4. Alterações desta Política</h3>
            <p>
              Esta Política de Privacidade poderá passar por atualizações para se adequar a novas exigências regulatórias. Recomendamos a visita periódica a esta página.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
