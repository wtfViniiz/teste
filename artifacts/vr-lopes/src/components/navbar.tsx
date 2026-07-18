import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "Início" },
  { id: "sobre", label: "A Empresa" },
  { id: "atuacao", label: "Atuação" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "equipe", label: "Equipe" },
  { id: "responsabilidade", label: "Impacto" },
  { id: "clientes", label: "Clientes" },
  { id: "contato", label: "Contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
      let current = "hero";
      
      for (const section of sections) {
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
          className={cn(
            "font-display font-bold text-2xl tracking-tighter uppercase transition-colors",
            !isScrolled && activeSection === "hero" ? "text-white" : "text-foreground"
          )}
        >
          VR <span className="text-primary">Lopes</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {SECTIONS.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm",
                activeSection === item.id 
                  ? "text-primary" 
                  : !isScrolled && activeSection === "hero" 
                    ? "text-white/80 hover:text-white" 
                    : "text-foreground/70"
              )}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollTo("contato")}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-sm",
            !isScrolled && activeSection === "hero" ? "text-white" : "text-foreground"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg py-4 flex flex-col">
          {SECTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "px-6 py-3 text-left font-medium transition-colors hover:bg-muted",
                activeSection === item.id ? "text-primary bg-primary/5" : "text-foreground/80"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
