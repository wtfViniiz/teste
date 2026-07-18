import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contato() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato o mais breve possível.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Contato
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Vamos construir <br/>o seu <span className="text-primary">projeto.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-12">
              Estamos prontos para atender as demandas de sua obra com excelência, 
              seja no setor público, residencial de alto padrão ou condomínios.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary shrink-0 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">Manaus, Amazonas - Brasil<br/>(Endereço completo sob consulta)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary shrink-0 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground">+55 (92) 00000-0000<br/>Atendimento Comercial</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary shrink-0 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">E-mail</h4>
                  <p className="text-muted-foreground">contato@vrlopes.com.br<br/>licitacoes@vrlopes.com.br</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border shadow-sm p-8 rounded-sm"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-background border border-input rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-background border border-input rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full bg-background border border-input rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Assunto / Área de Interesse</label>
                <select 
                  id="subject" 
                  className="w-full bg-background border border-input rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                >
                  <option value="publica">Engenharia Pública</option>
                  <option value="residencial">Engenharia Residencial</option>
                  <option value="condominios">Engenharia para Condomínios</option>
                  <option value="materiais">Fornecimento de Materiais</option>
                  <option value="outros">Outros Assuntos</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full bg-background border border-input rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
