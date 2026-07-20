"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { MapPin, Calendar, Ruler, Building2, Tag, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { PortfolioItem, PORTFOLIO_ITEMS } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioDetalhePageProps {
  item: PortfolioItem;
  allItems?: PortfolioItem[];
}

export function PortfolioDetalhePage({ item, allItems = PORTFOLIO_ITEMS }: PortfolioDetalhePageProps) {
  const [currentImg, setCurrentImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Encontra os itens vizinhos para navegação
  const currentIndex = allItems.findIndex((p) => p.slug === item.slug);
  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  const totalImages = item.galleryImages.length;

  return (
    <>
      <PageHeader
        title={item.title}
        subtitle={`${item.sector} • ${item.location}`}
        breadcrumbs={[
          { label: "Portfólio", href: "/portfolio" },
          { label: item.title }
        ]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Esquerda/Centro: Galeria e Conteúdo do Caso */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Galeria de Fotos */}
              <div className="space-y-4">
                <div className="relative h-[450px] bg-zinc-950 rounded-sm overflow-hidden border group">
                  <img
                    src={item.galleryImages[currentImg]}
                    alt={`${item.title} - imagem ${currentImg + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  
                  {/* Botão de Ampliar */}
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-4 left-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors cursor-pointer"
                    title="Ampliar Imagem"
                  >
                    <Expand size={16} />
                  </button>

                  {/* Setas Navegação Internas */}
                  {totalImages > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImg((i) => (i - 1 + totalImages) % totalImages)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors cursor-pointer"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => setCurrentImg((i) => (i + 1) % totalImages)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors cursor-pointer"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Contador */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white/80 text-xs px-3 py-1.5 rounded-sm">
                    {currentImg + 1} / {totalImages}
                  </div>
                </div>

                {/* Miniaturas */}
                {totalImages > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {item.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImg(idx)}
                        className={cn(
                          "w-24 h-16 rounded-sm overflow-hidden border-2 transition-all cursor-pointer shrink-0",
                          idx === currentImg ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                        )}
                      >
                        <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Narrativa do Estudo de Caso */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">O que é e Escopo da Obra</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.scope}</p>
                </div>

                <div className="h-px bg-border" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-4">Desafios Enfrentados</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.challenges}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-4">Solução de Engenharia</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">Resultado Entregue</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.result}</p>
                </div>
              </div>
            </div>

            {/* Direita: Ficha Técnica */}
            <div className="bg-card border rounded-sm p-6 md:p-8 space-y-6 sticky top-[130px]">
              <h3 className="font-display font-bold text-foreground text-xl pb-4 border-b">Ficha Técnica</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 size={16} className="text-primary" />
                    <span>Cliente</span>
                  </div>
                  <span className="font-semibold text-foreground text-right">{item.client}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span>Localização</span>
                  </div>
                  <span className="font-semibold text-foreground text-right">{item.location}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Ruler size={16} className="text-primary" />
                    <span>Área Construída</span>
                  </div>
                  <span className="font-semibold text-foreground text-right">{item.builtArea}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    <span>Ano de Conclusão</span>
                  </div>
                  <span className="font-semibold text-foreground text-right">{item.year}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Tag size={16} className="text-primary" />
                    <span>Setor</span>
                  </div>
                  <span className="font-semibold text-foreground text-right">{item.sector}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Tag size={16} className="text-primary" />
                    <span>Status</span>
                  </div>
                  <span className={cn(
                    "text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm",
                    item.status === "Concluído" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                  )}>
                    {item.status}
                  </span>
                </div>
              </div>

              <Link
                href="/contato"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-sm transition-colors text-sm"
              >
                Solicitar Orçamento de Obra
              </Link>
            </div>
          </div>

          {/* Navegação Entre Casos (Vizinhos) */}
          <div className="flex items-center justify-between border-t mt-16 pt-8">
            {prevItem ? (
              <Link href={`/portfolio/${prevItem.slug}`} className="flex items-center gap-3 group text-left max-w-[45%]">
                <ChevronLeft size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">Caso Anterior</span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{prevItem.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextItem ? (
              <Link href={`/portfolio/${nextItem.slug}`} className="flex items-center gap-3 group text-right max-w-[45%] ml-auto">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">Próximo Caso</span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{nextItem.title}</span>
                </div>
                <ChevronRight size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 cursor-zoom-out"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.img
              src={item.galleryImages[currentImg]}
              alt={`${item.title} - ampliada`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 bg-white/10 text-white p-2.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
