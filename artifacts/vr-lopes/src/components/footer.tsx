import Link from "next/link";
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-20 pb-10 border-t border-white/10 text-white/80">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">

          {/* Coluna 1: Logo e Redes Sociais */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-block group">
              <img
                src="/vr-lopes-logo.svg"
                alt="VR Lopes Logo"
                className="h-16 w-auto object-contain rounded-sm p-1.5 transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-xs leading-relaxed">
              Construindo Infraestrutura.<br />Transformando Vidas.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" aria-label="Facebook" className="text-white/40 hover:text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Coluna 2: Sobre */}
          <div>
            <h4 className="text-white font-bold mb-4 font-display text-xs uppercase tracking-wider">Sobre</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/sobre" className="text-white/60 hover:text-white transition-colors">Quem Somos</Link></li>
              <li><Link href="/equipe" className="text-white/60 hover:text-white transition-colors">Nossa Equipe</Link></li>
              <li><Link href="/carreiras" className="text-white/60 hover:text-white transition-colors">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Atuação */}
          <div>
            <h4 className="text-white font-bold mb-4 font-display text-xs uppercase tracking-wider">Atuação</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/atuacao/publica" className="text-white/60 hover:text-white transition-colors">Engenharia Pública</Link></li>
              <li><Link href="/atuacao/residencial" className="text-white/60 hover:text-white transition-colors">Eng. Residencial</Link></li>
              <li><Link href="/atuacao/condominios" className="text-white/60 hover:text-white transition-colors">Eng. para Condomínios</Link></li>
              <li><Link href="/atuacao/materiais" className="text-white/60 hover:text-white transition-colors">Fornecimento de Materiais</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Portfólio & Projetos */}
          <div>
            <h4 className="text-white font-bold mb-4 font-display text-xs uppercase tracking-wider">Casos & Modelos</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/portfolio" className="text-white/60 hover:text-white transition-colors">Portfólio de Obras</Link></li>
              <li><Link href="/projetos" className="text-white/60 hover:text-white transition-colors">Projetos</Link></li>
              <li><Link href="/responsabilidade" className="text-white/60 hover:text-white transition-colors">Projetos Sociais</Link></li>
            </ul>
          </div>

          {/* Coluna 5: Governança & Suporte */}
          <div>
            <h4 className="text-white font-bold mb-4 font-display text-xs uppercase tracking-wider">Governança</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/compliance" className="text-white/60 hover:text-white transition-colors">Compliance e Integridade</Link></li>
              <li><Link href="/qualidade" className="text-white/60 hover:text-white transition-colors">Política de Qualidade</Link></li>
              <li><Link href="/sustentabilidade" className="text-white/60 hover:text-white transition-colors">Sustentabilidade</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors">Perguntas Comuns (FAQ)</Link></li>
            </ul>
          </div>

          {/* Coluna 6: Contato */}
          <div>
            <h4 className="text-white font-bold mb-4 font-display text-xs uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2 text-white/60">
                <MapPin size={12} className="mt-0.5 shrink-0 text-white/40" />
                <span>Manaus, Amazonas – Brasil</span>
              </li>
              <li className="flex items-start gap-2 text-white/60">
                <Phone size={12} className="mt-0.5 shrink-0 text-white/40" />
                <span>(92) 00000-0000</span>
              </li>
              <li className="flex items-start gap-2 text-white/60">
                <Mail size={12} className="mt-0.5 shrink-0 text-white/40" />
                <span>contato@vrlopes.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha de Direitos Autorais e Políticas Legais */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} VR Lopes LTDA. Todos os direitos reservados.</p>
          <div className="flex items-center flex-wrap gap-3">
            <Link href="/lgpd" className="hover:text-white transition-colors">LGPD</Link>
            <span>|</span>
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <span>|</span>
            <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
          <p>CNPJ: 00.000.000/0001-00 &nbsp;|&nbsp; Manaus, Amazonas – Brasil</p>
        </div>
      </div>
    </footer>
  );
}
