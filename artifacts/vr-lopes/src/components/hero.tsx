"use client";

import { motion } from "framer-motion";
import heroImg from "@assets/generated_images/hero.jpg";
import engPublicaImg from "@assets/generated_images/eng-publica.jpg";
import engResidencialImg from "@assets/generated_images/eng-residencial.jpg";
import engCondominiosImg from "@assets/generated_images/eng-condominios.jpg";
import engCorporativoImg from "@assets/generated_images/eng-corporativo.png";
import engIndustrialImg from "@assets/generated_images/eng-industrial.png";

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
    <section id="hero" className="relative min-h-screen w-full flex items-center bg-background py-20 lg:py-0 overflow-hidden">
      {/* Split container (left aligned with page, right expands to edge) */}
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-8 items-center pt-28 lg:pt-16 relative z-10">
        
        {/* Left: Text Content */}
        <div 
          className="w-full lg:w-[52%] xl:w-[55%] flex flex-col justify-center pl-6 md:pl-12 lg:pl-20 xl:pl-28 pr-6 lg:pr-24 py-12 lg:py-28 bg-background relative z-30 lg:shadow-[20px_0_40px_-20px_rgba(0,0,0,0.18)]"
        >
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm md:text-base">
                Engenharia de Excelência
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.12] tracking-tight mb-6">
              Construindo <br />
              <span className="text-foreground tracking-wide font-extrabold">infraestrutura.</span><br />
              Transformando vidas.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed font-light">
              Somos a VR Lopes. Executamos projetos de infraestrutura complexos com a precisão de quem tem décadas de experiência. Solicite uma cotação e veja a diferença.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("sobre")}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-lg hover:bg-primary/90 transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
              >
                Conheça nossos projetos
              </button>
              <button
                onClick={() => scrollTo("atuacao")}
                className="bg-transparent text-foreground border border-border px-8 py-4 rounded-sm font-semibold text-lg hover:bg-muted/40 transition-all cursor-pointer"
              >
                Saiba mais
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Infinite Scrolling Image Marquee Grid (Spanning to the extreme right edge) */}
        <div className="w-full lg:w-[48%] xl:w-[45%] relative overflow-hidden h-[500px] md:h-[650px] lg:h-[840px] flex flex-col justify-center gap-6 z-10 lg:-ml-8">
          
          {/* Row 1 */}
          <div className="w-full overflow-hidden flex">
            <div className="flex gap-6 w-max animate-hero-marquee-slow">
              <div className="flex gap-6">
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engPublicaImg.src} alt="Obra de engenharia pública" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engResidencialImg.src} alt="Construção de edifícios residenciais" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engPublicaImg.src} alt="Obra de engenharia pública" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engResidencialImg.src} alt="Construção de edifícios residenciais" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full overflow-hidden flex">
            <div className="flex gap-6 w-max animate-hero-marquee-fast">
              <div className="flex gap-6">
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engCondominiosImg.src} alt="Obra de condomínios residenciais" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={heroImg.src} alt="Infraestrutura industrial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engCondominiosImg.src} alt="Obra de condomínios residenciais" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={heroImg.src} alt="Infraestrutura industrial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="w-full overflow-hidden flex">
            <div className="flex gap-6 w-max animate-hero-marquee-slow">
              <div className="flex gap-6">
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engCorporativoImg.src} alt="Edifício corporativo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engIndustrialImg.src} alt="Parque industrial logístico" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engCorporativoImg.src} alt="Edifício corporativo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="w-[320px] md:w-[480px] lg:w-[560px] h-[150px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden border border-border/50 shadow-md relative group cursor-pointer">
                  <img src={engIndustrialImg.src} alt="Parque industrial logístico" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
