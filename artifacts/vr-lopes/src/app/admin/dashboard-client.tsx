"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { logout } from "./actions";
import {
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
  getPortfolioItems
} from "./portfolio-actions";
import { PortfolioItem } from "@/data/portfolio";
import {
  Plus,
  Trash2,
  Edit2,
  LogOut,
  FolderOpen,
  CheckCircle,
  Clock,
  X,
  FileText,
  Save,
  Globe
} from "lucide-react";
import { toast } from "sonner";

interface AdminDashboardClientProps {
  initialItems: PortfolioItem[];
}

export function AdminDashboardClient({ initialItems }: AdminDashboardClientProps) {
  const [items, setItems] = useState<PortfolioItem[]>(initialItems);
  const [isPending, startTransition] = useTransition();
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [galleryText, setGalleryText] = useState("");
  const router = useRouter();

  // Estado do formulário
  const [formData, setFormData] = useState<PortfolioItem>({
    slug: "",
    title: "",
    sector: "Comercial",
    location: "",
    builtArea: "",
    year: "",
    client: "",
    scope: "",
    challenges: "",
    solution: "",
    result: "",
    coverImage: "",
    galleryImages: [],
    status: "Concluído"
  });

  const [saving, setSaving] = useState(false);

  // Estatísticas
  const totalItems = items.length;
  const concludedItems = items.filter((i) => i.status === "Concluído").length;
  const progressItems = items.filter((i) => i.status === "Em Andamento").length;

  const handleLogout = async () => {
    await logout();
    router.push("/admin/login");
    router.refresh();
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setGalleryText("");
    setFormData({
      slug: "",
      title: "",
      sector: "Comercial",
      location: "",
      builtArea: "",
      year: "",
      client: "",
      scope: "",
      challenges: "",
      solution: "",
      result: "",
      coverImage: "",
      galleryImages: [],
      status: "Concluído"
    });
    setShowForm(true);
  };

  const handleOpenEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setGalleryText(item.galleryImages.join(", "));
    setFormData({ ...item });
    setShowForm(true);
  };

  const handleTitleChange = (title: string) => {
    // Auto-geração do slug amigável caso não esteja editando um existente
    const slug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    
    setFormData((prev) => ({
      ...prev,
      title,
      slug: editingItem ? prev.slug : slug
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug || !formData.client || !formData.location) {
      toast.error("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    setSaving(true);
    
    // Processamento da galeria de imagens
    const gallery = galleryText
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const updatedData: PortfolioItem = {
      ...formData,
      galleryImages: gallery,
      // Fallback de imagem caso fique em branco
      coverImage: formData.coverImage || "/assets/generated_images/hero.jpg"
    };

    try {
      if (editingItem) {
        // Atualização
        const res = await updatePortfolioItem(editingItem.slug, updatedData);
        if (res.success) {
          toast.success("Obra atualizada com sucesso!");
          setShowForm(false);
          refreshList();
        } else {
          toast.error(res.error || "Erro ao atualizar obra.");
        }
      } else {
        // Criação
        const res = await createPortfolioItem(updatedData);
        if (res.success) {
          toast.success("Nova obra cadastrada com sucesso!");
          setShowForm(false);
          refreshList();
        } else {
          toast.error(res.error || "Erro ao cadastrar nova obra.");
        }
      }
    } catch (err) {
      toast.error("Erro interno de comunicação.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Tem certeza que deseja excluir esta obra permanentemente do portfólio?")) {
      return;
    }

    try {
      const res = await deletePortfolioItem(slug);
      if (res.success) {
        toast.success("Obra removida com sucesso.");
        refreshList();
      } else {
        toast.error(res.error || "Erro ao remover obra.");
      }
    } catch (err) {
      toast.error("Erro de comunicação ao deletar.");
    }
  };

  const refreshList = () => {
    startTransition(async () => {
      const freshItems = await getPortfolioItems();
      setItems(freshItems);
    });
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Painel de Obras e Portfólio</h1>
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mt-1">Console Administrativo</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-sm font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            <Plus size={16} />
            <span>Nova Obra</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-slate-900 border border-white/10 hover:bg-slate-800 text-white/80 hover:text-white px-5 py-3 rounded-sm font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            <LogOut size={16} />
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-white/10 p-6 rounded-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-white/40 text-xs font-semibold uppercase tracking-wider block">Obras Cadastradas</span>
            <span className="text-3xl font-display font-bold block">{totalItems}</span>
          </div>
          <div className="w-12 h-12 bg-white/5 text-white/60 flex items-center justify-center rounded-sm">
            <FolderOpen size={20} />
          </div>
        </div>

        <div className="bg-slate-900 border border-white/10 p-6 rounded-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-white/40 text-xs font-semibold uppercase tracking-wider block">Casos Concluídos</span>
            <span className="text-3xl font-display font-bold text-green-400 block">{concludedItems}</span>
          </div>
          <div className="w-12 h-12 bg-green-500/10 text-green-400 flex items-center justify-center rounded-sm">
            <CheckCircle size={20} />
          </div>
        </div>

        <div className="bg-slate-900 border border-white/10 p-6 rounded-sm flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-white/40 text-xs font-semibold uppercase tracking-wider block">Em Andamento</span>
            <span className="text-3xl font-display font-bold text-blue-400 block">{progressItems}</span>
          </div>
          <div className="w-12 h-12 bg-blue-500/10 text-blue-400 flex items-center justify-center rounded-sm">
            <Clock size={20} />
          </div>
        </div>
      </div>

      {/* Tabela de Listagem */}
      <div className="bg-slate-900 border border-white/10 rounded-sm overflow-hidden shadow-xl">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-900/50">
          <h2 className="font-display font-bold text-sm uppercase tracking-wider">Obras Ativas</h2>
          {isPending && <span className="text-xs text-primary animate-pulse">Sincronizando...</span>}
        </div>
        
        {items.length === 0 ? (
          <div className="py-20 text-center text-white/40 text-sm">
            Nenhuma obra cadastrada. Clique em "Nova Obra" para iniciar.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-white/50 bg-slate-950/40 font-semibold uppercase tracking-wider">
                  <th className="px-6 py-4">Foto / Título</th>
                  <th className="px-6 py-4">Setor</th>
                  <th className="px-6 py-4">Cliente</th>
                  <th className="px-6 py-4">Localização</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {items.map((item) => (
                  <tr key={item.slug} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-12 h-12 bg-zinc-800 rounded-sm overflow-hidden shrink-0 border border-white/10">
                        <img
                          src={typeof item.coverImage === "string" ? item.coverImage : "/assets/generated_images/hero.jpg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-bold text-white block text-sm">{item.title}</span>
                        <span className="text-white/40 block">/{item.slug}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white/80 font-semibold">{item.sector}</td>
                    <td className="px-6 py-4 text-white/80">{item.client}</td>
                    <td className="px-6 py-4 text-white/60">{item.location}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2 py-0.5 rounded-sm font-bold text-[9px] uppercase tracking-wider ${
                        item.status === "Concluído" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleOpenEdit(item)}
                        className="inline-flex items-center justify-center p-2 rounded-sm bg-white/5 hover:bg-primary/20 text-white/80 hover:text-primary border border-white/10 hover:border-primary/20 transition-all cursor-pointer"
                        title="Editar"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.slug)}
                        className="inline-flex items-center justify-center p-2 rounded-sm bg-white/5 hover:bg-red-500/20 text-white/80 hover:text-red-400 border border-white/10 hover:border-red-500/20 transition-all cursor-pointer"
                        title="Excluir"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal / Formulário Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto backdrop-blur-sm">
          <div className="bg-slate-900 border border-white/10 w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden my-8">
            
            {/* Header Formulário */}
            <div className="px-8 py-5 bg-slate-950/60 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="text-primary animate-pulse" size={20} />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider">
                  {editingItem ? "Editar Obra de Portfólio" : "Cadastrar Nova Obra"}
                </h3>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Inputs Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Título */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Título da Obra *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ampliação Hospital Militar de Manaus"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                {/* Slug */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Slug da URL * (Minúsculo/Dashes)</label>
                  <input
                    type="text"
                    required
                    placeholder="ex-ampliacao-hospital-militar"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    disabled={!!editingItem} // Evitar alteração de slug de obra existente para não quebrar SEO/links
                    className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-40"
                  />
                </div>

                {/* Setor */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Setor *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData(prev => ({ ...prev, sector: e.target.value as PortfolioItem["sector"] }))}
                    className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option>Comercial</option>
                    <option>Industrial</option>
                    <option>Residencial</option>
                    <option>Hospitalar</option>
                    <option>Público</option>
                  </select>
                </div>

                {/* Status */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Status Construtivo *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as PortfolioItem["status"] }))}
                    className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option>Concluído</option>
                    <option>Em Andamento</option>
                  </select>
                </div>

                {/* Cliente */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Cliente *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Exército Brasileiro / Privado"
                    value={formData.client}
                    onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                    className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                {/* Localização */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Localização / Cidade *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Manaus - AM"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                {/* Área Construída */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Área Construída (m²)</label>
                  <input
                    type="text"
                    placeholder="Ex: 3.500 m²"
                    value={formData.builtArea}
                    onChange={(e) => setFormData(prev => ({ ...prev, builtArea: e.target.value }))}
                    className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                {/* Ano */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Ano de Entrega</label>
                  <input
                    type="text"
                    placeholder="Ex: 2025"
                    value={formData.year}
                    onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                    className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              {/* URL Imagem de Capa */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">URL da Imagem de Capa</label>
                <input
                  type="text"
                  placeholder="Ex: /assets/obras/capa.jpg ou link externo HTTPS"
                  value={formData.coverImage}
                  onChange={(e) => setFormData(prev => ({ ...prev, coverImage: e.target.value }))}
                  className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* URLs da Galeria */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Galeria de Imagens (URLs separadas por vírgula)</label>
                <textarea
                  rows={2}
                  placeholder="Ex: /assets/obras/foto1.jpg, /assets/obras/foto2.jpg"
                  value={galleryText}
                  onChange={(e) => setGalleryText(e.target.value)}
                  className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <hr className="border-white/5" />

              {/* Narrativa do Caso */}
              <div className="space-y-4">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary">Narrativa da Obra (Estudo de Caso)</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Escopo */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">O que é / Escopo Técnico</label>
                    <textarea
                      rows={4}
                      placeholder="Descrição técnica detalhada das etapas de execução..."
                      value={formData.scope}
                      onChange={(e) => setFormData(prev => ({ ...prev, scope: e.target.value }))}
                      className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Desafios */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Desafios de Engenharia</label>
                    <textarea
                      rows={4}
                      placeholder="Desafios logísticos, climáticos ou de prazo enfrentados..."
                      value={formData.challenges}
                      onChange={(e) => setFormData(prev => ({ ...prev, challenges: e.target.value }))}
                      className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Solução */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Solução Aplicada</label>
                    <textarea
                      rows={4}
                      placeholder="Soluções inovadoras de engenharia e gerenciamento aplicadas..."
                      value={formData.solution}
                      onChange={(e) => setFormData(prev => ({ ...prev, solution: e.target.value }))}
                      className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Resultado */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Resultado Obtido</label>
                    <textarea
                      rows={4}
                      placeholder="Impacto final do projeto, eficiência operacional gerada..."
                      value={formData.result}
                      onChange={(e) => setFormData(prev => ({ ...prev, result: e.target.value }))}
                      className="bg-slate-950 border border-white/10 text-white rounded-sm py-2.5 px-4 text-xs focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-4">
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => setShowForm(false)}
                  className="bg-slate-950 border border-white/10 hover:bg-slate-800 text-white/80 hover:text-white px-6 py-3 rounded-sm font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer disabled:opacity-40"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-sm font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer disabled:opacity-60 font-bold"
                >
                  <Save size={14} />
                  <span>{saving ? "Salvando..." : "Salvar Obra"}</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
