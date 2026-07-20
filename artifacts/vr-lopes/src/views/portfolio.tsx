"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { PortfolioItem, PORTFOLIO_ITEMS } from "@/data/portfolio";
import { PortfolioCard } from "@/components/portfolio-card";
import { getPortfolioItems } from "@/app/admin/portfolio-actions";

const CATEGORIES = ["Todos", "Comercial", "Industrial", "Residencial", "Hospitalar", "Público"];
const ITEMS_PER_PAGE = 6;

export function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>(PORTFOLIO_ITEMS);
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Carrega os dados do banco de dados de forma assíncrona
  useEffect(() => {
    let active = true;
    getPortfolioItems().then((res) => {
      if (active) {
        setItems(res);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  // Filtragem dos itens baseada em setor e termo de pesquisa
  const filtered = items.filter((p) => {
    const matchesCategory = category === "Todos" || p.sector === category;
    const matchesSearch =
      search.trim() === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <>
      <PageHeader
        title="Nosso Portfólio"
        subtitle="Explore nossa atuação técnica através de casos reais de engenharia nos setores público e privado."
        breadcrumbs={[{ label: "Portfólio" }]}
      />

      {/* Barra de Filtros e Busca */}
      <section className="sticky top-[60px] z-40 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Categoria Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  category === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Busca por Texto */}
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por nome, cliente..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-foreground"
            />
          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="py-16 bg-muted/30 min-h-[50vh]">
        <div className="container mx-auto px-6">
          <p className="text-sm text-muted-foreground mb-8">
            Exibindo {filtered.length} caso{filtered.length !== 1 ? "s" : ""} de sucesso
            {totalPages > 1 && ` • Página ${page} de ${totalPages}`}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-xl font-display font-bold text-foreground mb-2">Nenhum caso encontrado</p>
              <p className="text-muted-foreground mb-6">Tente outra categoria ou termo de busca.</p>
              <button
                onClick={() => {
                  setCategory("Todos");
                  setSearch("");
                }}
                className="bg-primary text-white px-6 py-3 rounded-sm font-semibold hover:bg-primary/80 transition-colors cursor-pointer"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map((item, i) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <PortfolioCard item={item} />
                  </motion.div>
                ))}
              </div>

              {/* Paginação */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-2 rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-9 h-9 rounded-sm text-sm font-semibold transition-all cursor-pointer ${
                        p === page
                          ? "bg-primary text-white shadow-sm"
                          : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="p-2 rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-3">Tem uma nova obra corporativa em mente?</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">Nossa equipe de engenharia está pronta para elaborar seu orçamento personalizado.</p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-sm hover:bg-white/90 transition-colors"
          >
            Falar com Engenheiro Responsável
          </Link>
        </div>
      </section>
    </>
  );
}
