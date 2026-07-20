"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { X, BedDouble, Layers, Ruler, Maximize2, MessageCircle, Phone, ChevronDown, SlidersHorizontal, ChevronLeft, ChevronRight, Search, Expand } from "lucide-react";
import engResidencialImg from "@assets/generated_images/eng-residencial.jpg";
import engCondominiosImg from "@assets/generated_images/eng-condominios.jpg";
import engPublicaImg from "@assets/generated_images/eng-publica.jpg";
import heroImg from "@assets/generated_images/hero.jpg";

/* ─── Project data ─── */
interface Project {
  id: number;
  title: string;
  category: string[];
  terrainWidth: number; // metros
  quartos: number;
  pavimentos: number;
  area: number; // m²
  terrainArea: number; // m²
  description: string;
  features: string[];
  images: string[];
  status: string;
  price?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1, title: "Residência Nobre – Ponta Negra", category: ["Mais Vendidos", "Residencial"],
    terrainWidth: 15, quartos: 4, pavimentos: 2, area: 320, terrainArea: 450,
    description: "Residência de alto padrão com acabamentos premium, piscina e área gourmet. Design contemporâneo com integração entre ambientes internos e externos, ideal para famílias que buscam conforto e sofisticação.",
    features: ["Piscina adulto e infantil", "Área gourmet coberta", "Garagem 3 carros", "Jardim paisagístico", "Suíte master com closet e banheira", "Automação residencial", "Sistema de energia solar"],
    images: [engResidencialImg.src, engCondominiosImg.src, engPublicaImg.src], status: "Concluído", price: "Consulte valores",
  },
  {
    id: 2, title: "Casa Moderna – Adrianópolis", category: ["Residencial"],
    terrainWidth: 12, quartos: 3, pavimentos: 1, area: 185, terrainArea: 300,
    description: "Casa térrea de design minimalista com ampla integração entre sala, cozinha e área externa. Pé-direito duplo na sala principal, fachada em concreto aparente e vidro.",
    features: ["Pé-direito 4m na sala", "Cozinha gourmet integrada", "Varanda com vista ao jardim", "Garagem 2 carros", "3 suítes", "Iluminação embutida em toda a casa"],
    images: [engCondominiosImg.src, heroImg.src], status: "Concluído", price: "Consulte valores",
  },
  {
    id: 3, title: "Mansão Tarumã", category: ["Mais Vendidos", "Alto Padrão"],
    terrainWidth: 20, quartos: 5, pavimentos: 3, area: 680, terrainArea: 900,
    description: "Mansão exclusiva de arquitetura contemporânea distribuída em 3 pavimentos, com todos os recursos de uma moradia de alto padrão internacional. Projeto único e personalizado.",
    features: ["Piscina aquecida", "Academia privativa", "Home cinema", "Elevador", "Adega climatizada", "Garagem 5 carros", "Sauna", "Rooftop com vista panorâmica"],
    images: [heroImg.src, engResidencialImg.src, engPublicaImg.src, engCondominiosImg.src], status: "Em Obras", price: "Consulte valores",
  },
  {
    id: 4, title: "Sobrado Família – Aleixo", category: ["Mais Vendidos", "Residencial"],
    terrainWidth: 10, quartos: 3, pavimentos: 2, area: 210, terrainArea: 250,
    description: "Sobrado funcional com excelente aproveitamento de espaço. Térreo social completo e pavimento superior com suítes privativas. Solução ideal para famílias em terrenos urbanos.",
    features: ["3 suítes no superior", "Sala de estar e jantar integradas", "Cozinha americana", "Área de serviço", "Varanda gourmet", "Garagem 2 carros"],
    images: [engResidencialImg.src, engCondominiosImg.src], status: "Concluído", price: "Consulte valores",
  },
  {
    id: 5, title: "Casa Compacta – São Jorge", category: ["Mais Vendidos"],
    terrainWidth: 8, quartos: 2, pavimentos: 1, area: 95, terrainArea: 160,
    description: "Projeto compacto e funcional com aproveitamento máximo de lote estreito. Arquitetura inteligente para quem busca conforto sem excessos.",
    features: ["2 quartos (1 suíte)", "Sala e cozinha integradas", "Área de serviço", "Garagem 1 carro", "Varanda frontal"],
    images: [engCondominiosImg.src], status: "Concluído", price: "Consulte valores",
  },
  {
    id: 6, title: "Duplex Executivo – Chapada", category: ["Alto Padrão"],
    terrainWidth: 12, quartos: 4, pavimentos: 2, area: 290, terrainArea: 360,
    description: "Duplex de alto padrão com ambientes amplos e acabamento executivo. Terraço privativo no segundo pavimento com deck em madeira nobre.",
    features: ["Terraço privativo", "Deck em madeira nobre", "Cozinha gourmet", "Home office", "4 suítes", "Piscina", "Garagem 3 carros"],
    images: [heroImg.src, engPublicaImg.src], status: "Concluído", price: "Consulte valores",
  },
  {
    id: 7, title: "Residência Clássica – Dom Pedro", category: ["Residencial"],
    terrainWidth: 14, quartos: 4, pavimentos: 2, area: 340, terrainArea: 420,
    description: "Residência de linhas clássicas com detalhes de acabamento em gesso, pedra e madeira. Jardim frontal com paisagismo exuberante e piscina com cascata.",
    features: ["Piscina com cascata", "Jardim frontal", "Gesso e molduras", "4 suítes", "Sala de jogos", "Despensa", "Garagem 3 carros"],
    images: [engPublicaImg.src, engResidencialImg.src], status: "Em Obras", price: "Consulte valores",
  },
  {
    id: 8, title: "Studio Plus – Centro", category: ["Residencial"],
    terrainWidth: 6, quartos: 1, pavimentos: 1, area: 65, terrainArea: 90,
    description: "Studio compacto de uso urbano com acabamentos modernos e layout inteligente. Ideal para profissionais que buscam praticidade e localização privilegiada.",
    features: ["Layout open concept", "Bancada americana", "Banheiro com box walk-in", "Ar-condicionado central", "Área de serviço compacta"],
    images: [engCondominiosImg.src], status: "Concluído", price: "Consulte valores",
  },
  {
    id: 9, title: "Vila Privativa – Planalto", category: ["Alto Padrão"],
    terrainWidth: 18, quartos: 4, pavimentos: 2, area: 480, terrainArea: 720,
    description: "Vila com área de lazer completa em lote privilegiado. Dois volumes interligados por passarela coberta, criando espaços independentes para lazer e moradia.",
    features: ["Piscina olímpica", "Quadra de vôlei de areia", "Churrasqueira gourmet", "4 suítes", "2 salas de estar", "Garagem 4 carros", "Jardim zen"],
    images: [engResidencialImg.src, heroImg.src, engPublicaImg.src], status: "Concluído", price: "Consulte valores",
  },
];


const CATEGORIES = ["Todos", "Mais Vendidos", "Residencial", "Alto Padrão"];
const TERRAIN_OPTIONS = ["Qualquer", "até 8m", "8m – 12m", "12m – 16m", "mais de 16m"];
const BEDROOM_OPTIONS = ["Qualquer", "1 quarto", "2 quartos", "3 quartos", "4 quartos", "5+ quartos"];
const FLOOR_OPTIONS = ["Qualquer", "1 pavimento", "2 pavimentos", "3+ pavimentos"];

function matchesTerrain(p: Project, opt: string) {
  if (opt === "Qualquer") return true;
  if (opt === "até 8m") return p.terrainWidth <= 8;
  if (opt === "8m – 12m") return p.terrainWidth > 8 && p.terrainWidth <= 12;
  if (opt === "12m – 16m") return p.terrainWidth > 12 && p.terrainWidth <= 16;
  if (opt === "mais de 16m") return p.terrainWidth > 16;
  return true;
}
function matchesBedrooms(p: Project, opt: string) {
  if (opt === "Qualquer") return true;
  if (opt === "5+ quartos") return p.quartos >= 5;
  return p.quartos === parseInt(opt);
}
function matchesFloors(p: Project, opt: string) {
  if (opt === "Qualquer") return true;
  if (opt === "3+ pavimentos") return p.pavimentos >= 3;
  return p.pavimentos === parseInt(opt);
}

/* ─── Lightbox ─── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 cursor-zoom-out"
        onClick={onClose}
      >
        <motion.img
          src={src} alt={alt}
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="max-w-[95vw] max-h-[95vh] object-contain rounded-sm shadow-2xl cursor-default"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white/10 text-white p-2.5 rounded-full hover:bg-white/25 transition-colors cursor-pointer"
        >
          <X size={22} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Modal ─── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const waText = encodeURIComponent(`Olá! Tenho interesse no projeto "${project.title}". Gostaria de saber mais informações e obter um orçamento.`);
  const waUrl = `https://wa.me/5592000000000?text=${waText}`;
  const [currentImg, setCurrentImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const total = project.images.length;

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentImg((i) => (i - 1 + total) % total); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentImg((i) => (i + 1) % total); };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="bg-card border rounded-sm w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Gallery */}
            <div className="relative h-72 overflow-hidden bg-zinc-900">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} – foto ${idx + 1}`}
                  onClick={() => setLightbox(true)}
                  className={`absolute inset-0 w-full h-full object-cover cursor-zoom-in transition-opacity duration-300 ease-in-out ${
                    idx === currentImg ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                  style={{ willChange: "opacity" }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-20" />

              {/* Fullscreen hint */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(true); }}
                className="absolute top-4 left-4 bg-black/50 text-white p-2.5 rounded-full hover:bg-black/70 transition-colors cursor-pointer z-30"
                title="Tela cheia"
              >
                <Expand size={16} />
              </button>

              {/* Close */}
              <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer z-30">
                <X size={20} />
              </button>

              {/* Arrows — only when more than 1 image */}
              {total > 1 && (
                <>
                  <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer z-30">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer z-30">
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Counter + Categories */}
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between z-30">
                <div className="flex gap-2">
                  {project.category.map((c) => (
                    <span key={c} className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm">{c}</span>
                  ))}
                </div>
                {total > 1 && (
                  <span className="text-white/80 text-xs bg-black/40 px-2 py-1 rounded-sm">{currentImg + 1} / {total}</span>
                )}
              </div>
            </div>

            {/* Thumbnails — only when more than 1 image */}
            {total > 1 && (
              <div className="flex gap-2 px-4 py-3 bg-muted/40 overflow-x-auto">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`shrink-0 w-16 h-12 rounded-sm overflow-hidden border-2 transition-all cursor-pointer ${
                      i === currentImg ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-2xl font-display font-bold text-foreground">{project.title}</h2>
                <span className={`text-xs font-semibold px-3 py-1 rounded-sm shrink-0 ${project.status === "Concluído" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                  {project.status}
                </span>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 p-5 bg-muted/50 rounded-sm">
                <div className="text-center">
                  <BedDouble size={20} className="text-primary mx-auto mb-1" />
                  <p className="font-bold text-foreground">{project.quartos}</p>
                  <p className="text-xs text-muted-foreground">Quartos</p>
                </div>
                <div className="text-center">
                  <Layers size={20} className="text-primary mx-auto mb-1" />
                  <p className="font-bold text-foreground">{project.pavimentos}</p>
                  <p className="text-xs text-muted-foreground">Pavimentos</p>
                </div>
                <div className="text-center">
                  <Maximize2 size={20} className="text-primary mx-auto mb-1" />
                  <p className="font-bold text-foreground">{project.area} m²</p>
                  <p className="text-xs text-muted-foreground">Área Construída</p>
                </div>
                <div className="text-center">
                  <Ruler size={20} className="text-primary mx-auto mb-1" />
                  <p className="font-bold text-foreground">{project.terrainWidth}m</p>
                  <p className="text-xs text-muted-foreground">Largura Terreno</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

              <h4 className="font-display font-bold text-foreground mb-3">Características incluídas</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-4 rounded-sm hover:bg-green-700 transition-colors">
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </a>
                <a href={`tel:+5592000000000`}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-sm hover:bg-primary/80 transition-colors">
                  <Phone size={20} />
                  Falar com Especialista
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {lightbox && (
        <Lightbox
          src={project.images[currentImg]}
          alt={`${project.title} – foto ${currentImg + 1}`}
          onClose={() => setLightbox(false)}
        />
      )}
    </>
  );
}


const ITEMS_PER_PAGE = 6;

/* ─── Main Page ─── */
export function ProjetosPage() {
  const [category, setCategory] = useState("Todos");
  const [terrain, setTerrain] = useState("Qualquer");
  const [bedrooms, setBedrooms] = useState("Qualquer");
  const [floors, setFloors] = useState("Qualquer");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = PROJECTS.filter((p) => {
    const catMatch = category === "Todos" || p.category.includes(category);
    const searchMatch = search.trim() === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.some((c) => c.toLowerCase().includes(search.toLowerCase()));
    return catMatch && searchMatch && matchesTerrain(p, terrain) && matchesBedrooms(p, bedrooms) && matchesFloors(p, floors);
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const resetFilters = () => {
    setTerrain("Qualquer"); setBedrooms("Qualquer"); setFloors("Qualquer");
    setSearch(""); setPage(1);
  };

  // Reset page when filters change
  const handleCategoryChange = (cat: string) => { setCategory(cat); setPage(1); };
  const handleSearchChange = (val: string) => { setSearch(val); setPage(1); };
  const handleTerrainChange = (val: string) => { setTerrain(val); setPage(1); };
  const handleBedroomsChange = (val: string) => { setBedrooms(val); setPage(1); };
  const handleFloorsChange = (val: string) => { setFloors(val); setPage(1); };

  const activeFilterCount = [terrain, bedrooms, floors].filter((v) => v !== "Qualquer").length + (search.trim() ? 1 : 0);

  return (
    <>
      <PageHeader
        title="Nossos Projetos"
        subtitle="Explore nosso portfólio de projetos residenciais. Filtre por características e entre em contato para orçamento personalizado."
        breadcrumbs={[{ label: "Projetos" }]}
      />

      {/* ── Filters ── */}
      <section className="sticky top-[60px] z-40 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">

          {/* Search + Category row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {/* Search bar */}
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar projeto..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all w-44 sm:w-56"
              />
            </div>

            {/* Category tabs */}
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-sm text-sm font-semibold transition-all cursor-pointer ${category === cat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
              >{cat}</button>
            ))}
            <div className="ml-auto">
              <button onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold border transition-all cursor-pointer ${showFilters || activeFilterCount > 0 ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                <SlidersHorizontal size={16} />
                Filtros
                {activeFilterCount > 0 && <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{activeFilterCount}</span>}
                <ChevronDown size={14} className={`transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          {/* Expanded filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }} className="overflow-hidden">
                <div className="pt-3 pb-2 grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Largura do Terreno</label>
                    <select value={terrain} onChange={(e) => handleTerrainChange(e.target.value)}
                      className="w-full bg-card border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer">
                      {TERRAIN_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Quartos</label>
                    <select value={bedrooms} onChange={(e) => handleBedroomsChange(e.target.value)}
                      className="w-full bg-card border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer">
                      {BEDROOM_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Pavimentos</label>
                    <select value={floors} onChange={(e) => handleFloorsChange(e.target.value)}
                      className="w-full bg-card border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer">
                      {FLOOR_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                {activeFilterCount > 0 && (
                  <button onClick={resetFilters} className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 mb-2 underline cursor-pointer">
                    Limpar filtros
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-12 bg-muted/30 min-h-[50vh]">
        <div className="container mx-auto px-6">
          <p className="text-sm text-muted-foreground mb-6">
            {filtered.length} projeto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
            {totalPages > 1 && ` • página ${page} de ${totalPages}`}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-2xl font-display font-bold text-foreground mb-2">Nenhum projeto encontrado</p>
              <p className="text-muted-foreground mb-6">Tente outros filtros ou entre em contato para um projeto personalizado.</p>
              <button onClick={resetFilters} className="bg-primary text-white px-6 py-3 rounded-sm font-semibold hover:bg-primary/80 transition-colors cursor-pointer">
                Limpar filtros
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((proj, i) => (
                  <motion.div key={proj.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <button
                      onClick={() => setSelected(proj)}
                      className="group w-full text-left bg-card border rounded-sm overflow-hidden hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative h-52 overflow-hidden bg-zinc-200">
                        <img src={proj.images[0]} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-3 left-3 flex gap-1.5">
                          {proj.category.map((c) => (
                            <span key={c} className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-sm">{c}</span>
                          ))}
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-sm ${proj.status === "Concluído" ? "bg-green-900/80 text-green-300" : "bg-blue-900/80 text-blue-300"}`}>
                            {proj.status}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors leading-snug">{proj.title}</h3>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BedDouble size={14} className="text-primary" />{proj.quartos} quartos
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Layers size={14} className="text-primary" />{proj.pavimentos} pavimento{proj.pavimentos > 1 ? "s" : ""}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Maximize2 size={14} className="text-primary" />{proj.area} m²
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Ruler size={14} className="text-primary" />Terreno {proj.terrainWidth}m
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-semibold text-sm">{proj.price}</span>
                          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Ver detalhes →</span>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
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

      {/* ── CTA ── */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-3">Não encontrou o projeto ideal?</h3>
          <p className="text-white/70 mb-6">Criamos projetos 100% personalizados para o seu terreno e suas necessidades.</p>
          <a href="https://wa.me/5592000000000" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-sm hover:bg-white/90 transition-colors">
            <MessageCircle size={20} />
            Solicitar Projeto Personalizado
          </a>
        </div>
      </section>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
