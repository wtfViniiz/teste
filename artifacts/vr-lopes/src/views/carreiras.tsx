"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2, Shield, Users, Award, BookOpen, Clock, AlertCircle } from "lucide-react";

const culturaPilares = [
  {
    icon: Shield,
    title: "Segurança Absoluta",
    desc: "Nossos canteiros cumprem rigidamente as NRs de saúde ocupacional. A vida e a integridade física de nossa equipe vêm antes de qualquer prazo."
  },
  {
    icon: Award,
    title: "Rigor Técnico",
    desc: "Valorizamos a busca pela perfeição nos processos, desde a seleção da matéria-prima até os acabamentos finos."
  },
  {
    icon: BookOpen,
    title: "Desenvolvimento de Pessoas",
    desc: "Apoiamos o crescimento de nossos operários, encarregados e engenheiros através de treinamentos e planos de carreira."
  },
  {
    icon: Users,
    title: "Respeito e Inclusão",
    desc: "Acreditamos em um ambiente de trabalho integrativo, livre de assédios, que valoriza a diversidade e o trabalho em equipe."
  }
];

const beneficios = [
  {
    title: "Ambiente Seguro (EPI/EPC premium)",
    desc: "Fornecimento de equipamentos de segurança de ponta e fiscalização ativa para proteção individual e coletiva."
  },
  {
    title: "Treinamentos e Capacitação",
    desc: "Cursos de qualificação técnica para manuseio de equipamentos e conformidade em trabalhos de altura e escavações."
  },
  {
    title: "Seguro de Vida e Assistência",
    desc: "Garantia de amparo e tranquilidade para o colaborador e sua família em todos os contratos de trabalho."
  },
  {
    title: "Plano de Crescimento",
    desc: "Oportunidades reais de promoção interna para liderança de equipes em obras civis e logística."
  }
];

const vagas = [
  {
    title: "Encarregado de Obras",
    location: "Manaus e Interior (AM)",
    type: "Banco de Talentos",
    requirements: "Experiência prévia em leitura de projetos estruturais, coordenação de equipes operacionais e diários de obra."
  },
  {
    title: "Pedreiro / Carpinteiro / Armador",
    location: "Manaus / Obras Ativas",
    type: "Banco de Talentos",
    requirements: "Familiaridade com alvenaria estrutural, formas de madeira ou armação de ferragens conforme normas técnicas."
  },
  {
    title: "Auxiliar de Almoxarifado / Logística",
    location: "Manaus - Base Central",
    type: "Banco de Talentos",
    requirements: "Organização de estoque de ferramentas, cimento, insumos e auxílio na cubagem de cargas de agregados."
  }
];

export function CarreirasPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "Construção / Obras",
    mensagem: ""
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    let formatted = digits;
    if (digits.length > 2) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length > 7) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 12)}`;
    }
    setFormData({ ...formData, telefone: formatted.slice(0, 15) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Sanitização do Nome (Trim + Capitalização de iniciais)
    const sanitizeName = (name: string) => {
      return name
        .trim()
        .replace(/[<>]/g, "")
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    };
    const nameSanitized = sanitizeName(formData.nome);

    if (nameSanitized.split(" ").length < 2) {
      toast({
        title: "Nome incompleto",
        description: "Por favor, insira o seu sobrenome completo.",
        variant: "destructive"
      });
      return;
    }

    // 2. Sanitização e Validação do E-mail
    const emailSanitized = formData.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailSanitized)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail com formato válido.",
        variant: "destructive"
      });
      return;
    }

    // 3. Validação do Telefone (Mínimo de 10 dígitos)
    const rawPhoneDigits = formData.telefone.replace(/\D/g, "");
    if (rawPhoneDigits.length < 10 || rawPhoneDigits.length > 11) {
      toast({
        title: "Telefone inválido",
        description: "O número de telefone deve conter o DDD e ter 10 ou 11 dígitos.",
        variant: "destructive"
      });
      return;
    }

    // 4. Sanitização da Mensagem (Remoção de tags HTML básicas)
    const messageSanitized = formData.mensagem.replace(/[<>]/g, "").trim();

    toast({
      title: "Dados salvos no Banco de Talentos!",
      description: "Redirecionando para o WhatsApp do RH para envio do seu currículo...",
    });

    const messageText = `Olá! Meu nome é ${nameSanitized}. Gostaria de me candidatar no Banco de Talentos para a área de "${formData.area}".
E-mail: ${emailSanitized}
Telefone: ${formData.telefone}
Apresentação: ${messageSanitized || "Não informada"}

Estou com meu currículo em PDF preparado para envio!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/5592999999999?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };

  return (
    <>
      <PageHeader
        title="Trabalhe Conosco"
        subtitle="Construindo carreiras sólidas e seguras. Faça parte do banco de talentos da VR Lopes."
        breadcrumbs={[{ label: "Carreiras" }]}
      />

      {/* 1. Cultura */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Valores em Prática</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-4xl font-display font-bold text-foreground">Nossa Cultura de Trabalho</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Acreditamos que a solidez de nossas obras provém do respeito e integridade de nossas equipes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturaPilares.map((pilar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-card border rounded-sm hover:border-primary/40 transition-all flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                  <pilar.icon size={24} />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">{pilar.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Benefícios */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Vantagens</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-4xl font-display font-bold text-foreground">Benefícios de Fazer Parte</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {beneficios.map((ben, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 bg-card border rounded-sm hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{ben.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{ben.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Vagas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Oportunidades</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-4xl font-display font-bold text-foreground">Vagas em Aberto</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Todas as nossas contratações ativas alimentam prioritariamente nosso banco de talentos.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {vagas.map((vaga, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-card border rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-bold text-lg text-foreground">{vaga.title}</h3>
                    <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm">
                      {vaga.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{vaga.location}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{vaga.requirements}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Banco de Talentos e Form */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground">Venha fazer parte e contribuir com a nossa equipe</h2>
            <p className="text-muted-foreground mt-4">
              Preencha seus dados de contato básicos abaixo para iniciarmos seu registro em nossa base.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-card border rounded-sm space-y-6"
          >
            {/* Aviso de Currículo no WhatsApp */}
            <div className="flex gap-3 p-5 bg-primary/10 border border-primary/20 rounded-sm text-foreground">
              <AlertCircle className="text-primary shrink-0 mt-0.5" size={20} />
              <div className="text-xs leading-relaxed">
                <strong className="text-foreground block mb-1">Atenção - Envio de Currículo:</strong>
                Por favor, insira seus dados abaixo e <strong>tenha seu arquivo de currículo em PDF preparado</strong> em seu celular ou computador. Após submeter o formulário, você será direcionado para o nosso WhatsApp para realizar o envio direto do arquivo para seleção.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-sm font-semibold text-foreground">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="border border-input rounded-sm px-4 py-3 bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border border-input rounded-sm px-4 py-3 bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Seu e-mail"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="telefone" className="text-sm font-semibold text-foreground">Telefone / WhatsApp</label>
                  <input
                    type="text"
                    id="telefone"
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    className="border border-input rounded-sm px-4 py-3 bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="(92) 99999-9999"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="area" className="text-sm font-semibold text-foreground">Área de Interesse</label>
                  <select
                    id="area"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="border border-input rounded-sm px-4 py-3 bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                  >
                    <option>Construção / Obras</option>
                    <option>Engenharia / Projetos</option>
                    <option>Administrativo / Financeiro</option>
                    <option>Fornecimento de Materiais</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="text-sm font-semibold text-foreground">Resumo Profissional / Apresentação</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="border border-input rounded-sm px-4 py-3 bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Escreva brevemente sobre sua experiência profissional..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-sm transition-all cursor-pointer"
              >
                <Send size={18} />
                <span>Cadastrar Dados e Enviar Currículo no WhatsApp</span>
              </button>
            </form>
          </motion.div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            Dúvidas administrativas ou contato corporativo: <a href="mailto:rh@vrlopes.com.br" className="text-primary font-semibold hover:underline">rh@vrlopes.com.br</a>
          </p>
        </div>
      </section>
    </>
  );
}
