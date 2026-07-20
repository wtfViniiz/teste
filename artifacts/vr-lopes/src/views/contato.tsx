"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContatoPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Mensagem enviada com sucesso!", description: "Entraremos em contato o mais breve possível." });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <>
      <PageHeader
        title="Entre em Contato"
        subtitle="Estamos prontos para atender as demandas da sua obra com excelência, seja no setor público, residencial ou condominial."
        breadcrumbs={[{ label: "Contato" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Informações</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 leading-tight">
                Vamos construir o seu projeto.
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Nossa equipe técnica e comercial está disponível para apresentar soluções personalizadas para a sua demanda.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm text-primary shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Localização</h4>
                    <p className="text-muted-foreground text-sm">Manaus, Amazonas – Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm text-primary shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Telefone Comercial</h4>
                    <p className="text-muted-foreground text-sm">+55 (92) 00000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm text-primary shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground text-sm">contato@vrlopes.com.br</p>
                    <p className="text-muted-foreground text-sm">licitacoes@vrlopes.com.br</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-zinc-950 text-white rounded-sm">
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Áreas de Atendimento</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Engenharia Pública (obras governamentais)</li>
                  <li>Engenharia Residencial (alto padrão)</li>
                  <li>Engenharia para Condomínios</li>
                  <li>Fornecimento de Materiais</li>
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 bg-card border rounded-sm p-10"
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-8">Envie uma mensagem</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nome Completo *</label>
                    <input type="text" id="name" required placeholder="Seu nome completo"
                      className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">Empresa / Órgão</label>
                    <input type="text" id="company" placeholder="Nome da sua empresa ou órgão"
                      className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">E-mail *</label>
                    <input type="email" id="email" required placeholder="seu@email.com"
                      className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Telefone *</label>
                    <input type="tel" id="phone" required placeholder="(92) 00000-0000"
                      className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow" />
                  </div>
                </div>

                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-foreground mb-1.5">Área de Interesse *</label>
                  <select id="area" required
                    className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow">
                    <option value="">Selecione uma área</option>
                    <option value="publica">Engenharia Pública</option>
                    <option value="residencial">Engenharia Residencial</option>
                    <option value="condominios">Engenharia para Condomínios</option>
                    <option value="materiais">Fornecimento de Materiais</option>
                    <option value="outros">Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Mensagem *</label>
                  <textarea id="message" rows={5} required placeholder="Descreva sua demanda, projeto ou dúvida..."
                    className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow resize-none" />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-70 text-lg">
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Respondemos em até 24 horas úteis. Campos marcados com * são obrigatórios.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="border rounded-sm overflow-hidden h-96 bg-muted shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127506.77660205218!2d-60.038435131923055!3d-3.0858169999999955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc000000001%3A0x88509abfb67243c2!2sManaus%2C%20AM!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização VR Lopes Engenharia"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
