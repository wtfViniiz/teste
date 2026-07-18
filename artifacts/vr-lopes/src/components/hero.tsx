import { motion } from "framer-motion";
import heroImg from "@assets/generated_images/hero.jpg";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = (elementRect - bodyRect) - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full flex items-center bg-zinc-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
      >
        <img 
          src={heroImg}
          alt="Construção de infraestrutura ao pôr do sol"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm md:text-base">
                Engenharia de Excelência
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6">
              Construindo <br/>
              <span className="text-primary">Infraestrutura.</span><br/>
              Transformando Vidas.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed font-light">
              Solidez, precisão e comprometimento na Amazônia. Projetamos e edificamos escolas, hospitais, 
              residências de alto padrão e infraestrutura urbana que moldam o futuro de nossas cidades.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => scrollTo("sobre")}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-lg hover:bg-primary/90 transition-all hover:-translate-y-1"
              >
                Conheça Nossa Empresa
              </button>
              <button 
                onClick={() => scrollTo("atuacao")}
                className="bg-white/10 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-sm font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Nossas Obras
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
