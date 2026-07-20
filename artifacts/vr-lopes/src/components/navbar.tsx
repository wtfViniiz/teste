"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Início" },
  {
    href: "/sobre",
    label: "Sobre",
    children: [
      { href: "/sobre", label: "Quem Somos" },
      { href: "/equipe", label: "Nossa Equipe" },
      { href: "/compliance", label: "Governança e Compliance" },
      { href: "/carreiras", label: "Trabalhe Conosco" },
      { href: "/faq", label: "Perguntas Frequentes (FAQ)" },
    ]
  },
  {
    href: "/atuacao",
    label: "Atuação",
    children: [
      { href: "/atuacao/publica", label: "Engenharia Pública" },
      { href: "/atuacao/residencial", label: "Engenharia Residencial" },
      { href: "/atuacao/condominios", label: "Eng. para Condomínios" },
      { href: "/atuacao/materiais", label: "Fornecimento de Materiais" },
    ],
  },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/projetos", label: "Projetos" },
  { href: "/responsabilidade", label: "Projetos Sociais" },
];

export function Navbar() {
  const location = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Classes de cores dinâmicas baseadas no estado de rolagem (scrolled)
  const textClass = "text-navbar-foreground";
  const underlineColorClass = "bg-navbar-hover";
  const buttonBorderClass = "border-navbar-foreground/30 text-navbar-foreground hover:bg-navbar-foreground hover:text-navbar-background";
  const mobileToggleColor = "text-navbar-foreground";

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        mobileMenuOpen
          ? "bg-navbar-background border-b border-border py-4 shadow-lg"
          : isScrolled
            ? "bg-navbar-background/30 backdrop-blur-md border-b border-border/10 py-3 shadow-sm"
            : "bg-navbar-background border-b border-border/30 py-5 shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group py-1">
          <img
            src="/vr-lopes-logo.svg"
            alt=""
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="/ve-lopes-nome.svg"
            alt="VE Lopes"
            className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const hasChildren = !!item.children;
            const isOpen = openDropdown === item.label;
            const isActive = hasChildren
              ? (location.startsWith(item.href) && item.href !== "/")
              : (location === item.href);

            return hasChildren ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => setOpenDropdown((v) => (v === item.label ? null : item.label))}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-sm text-sm font-medium transition-colors relative group cursor-pointer",
                    textClass,
                    isActive && "text-navbar-hover"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
                  <span className={cn(
                    "absolute bottom-0 left-3 right-7 h-[2px] transition-transform duration-300 origin-left",
                    underlineColorClass,
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </button>
                {isOpen && (
                  <div
                    className="absolute top-full left-0 pt-2 min-w-[230px]"
                  >
                    <div className="bg-navbar-background border border-border rounded-sm shadow-2xl py-2">
                      {item.href === "/atuacao" && (
                        <>
                          <Link href="/atuacao" className="block px-4 py-2.5 text-sm text-navbar-foreground/70 hover:text-navbar-hover hover:bg-muted/50 transition-colors font-medium cursor-pointer">
                            Visão Geral
                          </Link>
                          <div className="h-px bg-border my-1" />
                        </>
                      )}
                      {item.children!.map((child) => (
                        <Link key={child.href} href={child.href}
                          className={cn("block px-4 py-2.5 text-sm transition-colors hover:bg-muted/50 cursor-pointer",
                            location === child.href ? "text-navbar-hover font-semibold" : "text-navbar-foreground/70 hover:text-navbar-hover"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href}
                className={cn(
                  "px-3 py-2 rounded-sm text-sm font-medium transition-colors relative group cursor-pointer",
                  textClass,
                  isActive && "text-navbar-hover"
                )}
              >
                <span>{item.label}</span>
                <span className={cn(
                  "absolute bottom-0 left-3 right-3 h-[2px] transition-transform duration-300 origin-left",
                  underlineColorClass,
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            );
          })}
          <Link href="/contato"
            className={cn("ml-3 px-5 py-2.5 rounded-sm font-semibold text-sm border transition-colors cursor-pointer", buttonBorderClass)}
          >
            Fale Conosco
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={cn("lg:hidden p-2 cursor-pointer transition-colors", mobileToggleColor)} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-navbar-background border-b border-border shadow-xl py-4 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <div key={item.href}>
              <Link href={item.href}
                className={cn("block px-6 py-3 font-medium transition-colors hover:bg-muted/50 text-navbar-foreground/75 hover:text-navbar-hover cursor-pointer",
                  location === item.href || (item.href !== "/" && location.startsWith(item.href)) ? "text-navbar-hover font-semibold" : ""
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="bg-muted/30 pl-4">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}
                      className={cn("block px-6 py-2.5 text-sm transition-colors cursor-pointer",
                        location === child.href ? "text-navbar-hover font-semibold" : "text-navbar-foreground/60 hover:text-navbar-hover"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-6 pt-4">
            <Link href="/contato" className="block text-center border border-navbar-foreground/30 text-navbar-foreground px-6 py-3 rounded-sm font-semibold hover:bg-navbar-foreground hover:text-navbar-background transition-colors cursor-pointer">
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
