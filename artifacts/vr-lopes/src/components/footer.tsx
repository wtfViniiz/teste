import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
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
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/10 text-white/80">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <a 
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
              className="font-display font-bold text-2xl tracking-tighter uppercase inline-block mb-4 text-white"
            >
              VR <span className="text-primary">Lopes</span>
            </a>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Construindo Infraestrutura.<br/>Transformando Vidas.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">A Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo("sobre")} className="hover:text-primary transition-colors">Nossa Essência</button></li>
              <li><button onClick={() => scrollTo("diferenciais")} className="hover:text-primary transition-colors">Diferenciais</button></li>
              <li><button onClick={() => scrollTo("equipe")} className="hover:text-primary transition-colors">Corpo Diretivo</button></li>
              <li><button onClick={() => scrollTo("responsabilidade")} className="hover:text-primary transition-colors">Impacto Social</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">Áreas de Atuação</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo("atuacao")} className="hover:text-primary transition-colors">Engenharia Pública</button></li>
              <li><button onClick={() => scrollTo("atuacao")} className="hover:text-primary transition-colors">Eng. Residencial</button></li>
              <li><button onClick={() => scrollTo("atuacao")} className="hover:text-primary transition-colors">Eng. para Condomínios</button></li>
              <li><button onClick={() => scrollTo("atuacao")} className="hover:text-primary transition-colors">Fornecimento de Materiais</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex flex-col">
                <span className="text-white/40 text-xs uppercase tracking-wider mb-1">Comercial</span>
                <span>(92) 00000-0000</span>
              </li>
              <li className="flex flex-col mt-3">
                <span className="text-white/40 text-xs uppercase tracking-wider mb-1">E-mail</span>
                <span>contato@vrlopes.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} VR Lopes LTDA. Todos os direitos reservados.</p>
          <p>Manaus, Amazonas - Brasil</p>
        </div>
      </div>
    </footer>
  );
}
