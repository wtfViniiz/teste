import { motion } from "framer-motion";
import { TreePine, Trophy, Palette, BookOpen } from "lucide-react";

export function Responsabilidade() {
  return (
    <section id="responsabilidade" className="py-24 bg-card border-y">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Impacto Social
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Compromisso além <br/>do canteiro de obras.
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Acreditamos que o papel de uma construtora não se restringe a erguer estruturas físicas. 
              Temos a responsabilidade de promover o desenvolvimento humano e fortalecer as comunidades amazônicas 
              onde estamos inseridos.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Através do fomento ativo ao esporte, cultura e inclusão social, a VR Lopes investe no futuro da região, 
              apoiando projetos que geram oportunidades reais para a população local.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background border p-8 rounded-sm hover:border-primary/50 transition-colors"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6">
                <Trophy size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Esporte</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Apoio a atletas locais e projetos esportivos de base, promovendo saúde, disciplina e oportunidades para jovens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background border p-8 rounded-sm hover:border-primary/50 transition-colors"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6">
                <Palette size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Cultura</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Patrocínio e incentivo a manifestações culturais regionais, valorizando a rica identidade do povo amazônida.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background border p-8 rounded-sm hover:border-primary/50 transition-colors"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Inclusão Social</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Programas de capacitação profissional e contratação local prioritária nas áreas onde nossas obras são executadas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background border p-8 rounded-sm hover:border-primary/50 transition-colors"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6">
                <TreePine size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Sustentabilidade</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gestão rigorosa de resíduos da construção civil e mitigação de impactos ambientais na flora e fauna local.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
