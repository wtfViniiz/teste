"use server";

import { checkSession } from "./actions";
import { supabase } from "@/lib/supabase";
import { PortfolioItem, PORTFOLIO_ITEMS } from "@/data/portfolio";

// Função auxiliar para mapear de snake_case (banco) para camelCase (frontend)
function mapToCamelCase(item: unknown): PortfolioItem {
  if (!item || typeof item !== "object") {
    throw new Error("Formato de item inválido");
  }

  const raw = item as Record<string, unknown>;

  return {
    slug: String(raw.slug || ""),
    title: String(raw.title || ""),
    sector: (raw.sector || "Comercial") as PortfolioItem["sector"],
    location: String(raw.location || ""),
    builtArea: String(raw.built_area || ""),
    year: String(raw.year || ""),
    client: String(raw.client || ""),
    scope: String(raw.scope || ""),
    challenges: String(raw.challenges || ""),
    solution: String(raw.solution || ""),
    result: String(raw.result || ""),
    coverImage: String(raw.cover_image || ""),
    galleryImages: Array.isArray(raw.gallery_images) ? raw.gallery_images.map(String) : [],
    status: (raw.status || "Concluído") as PortfolioItem["status"]
  };
}

// Função auxiliar para mapear de camelCase (frontend) para snake_case (banco)
function mapToSnakeCase(item: PortfolioItem): Record<string, unknown> {
  return {
    slug: item.slug,
    title: item.title,
    sector: item.sector,
    location: item.location,
    built_area: item.builtArea,
    year: item.year,
    client: item.client,
    scope: item.scope,
    challenges: item.challenges,
    solution: item.solution,
    result: item.result,
    cover_image: item.coverImage,
    gallery_images: item.galleryImages,
    status: item.status
  };
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    if (!supabase) {
      console.warn("Supabase não configurado. Utilizando dados estáticos de fallback.");
      return PORTFOLIO_ITEMS;
    }

    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao carregar portfólio do Supabase:", error.message);
      return PORTFOLIO_ITEMS;
    }

    // Se o banco estiver conectado mas a tabela vazia, semeamos (seed) com os dados mockados iniciais
    if (!data || data.length === 0) {
      console.log("Tabela de portfólio vazia. Semeando dados iniciais...");
      
      const snakeItems = PORTFOLIO_ITEMS.map((item) => ({
        ...mapToSnakeCase(item),
        // Adiciona um valor padrão temporário para imagens locais que não são URLs
        cover_image: typeof item.coverImage === "string" ? item.coverImage : "/assets/generated_images/hero.jpg",
        gallery_images: item.galleryImages.map(img => typeof img === "string" ? img : "/assets/generated_images/hero.jpg")
      }));

      const { error: insertError } = await supabase
        .from("portfolio")
        .insert(snakeItems);

      if (insertError) {
        console.error("Erro ao semear dados no Supabase:", insertError.message);
      } else {
        // Refaz a consulta para obter os dados semeados
        const { data: seededData } = await supabase
          .from("portfolio")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (seededData) {
          return seededData.map(mapToCamelCase);
        }
      }
      return PORTFOLIO_ITEMS;
    }

    return data.map(mapToCamelCase);
  } catch (err) {
    console.error("Exceção ao buscar dados do portfólio:", err);
    return PORTFOLIO_ITEMS;
  }
}

export async function createPortfolioItem(item: PortfolioItem): Promise<{ success: boolean; error?: string }> {
  try {
    const isAuthenticated = await checkSession();
    if (!isAuthenticated) {
      return { success: false, error: "Acesso não autorizado." };
    }

    if (!supabase) {
      return { success: false, error: "Conexão com o banco de dados indisponível." };
    }

    const snakeItem = mapToSnakeCase(item);
    const { error } = await supabase
      .from("portfolio")
      .insert([snakeItem]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: "Erro interno no servidor." };
  }
}

export async function updatePortfolioItem(oldSlug: string, item: PortfolioItem): Promise<{ success: boolean; error?: string }> {
  try {
    const isAuthenticated = await checkSession();
    if (!isAuthenticated) {
      return { success: false, error: "Acesso não autorizado." };
    }

    if (!supabase) {
      return { success: false, error: "Conexão com o banco de dados indisponível." };
    }

    const snakeItem = mapToSnakeCase(item);
    const { error } = await supabase
      .from("portfolio")
      .update(snakeItem)
      .eq("slug", oldSlug);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: "Erro interno no servidor." };
  }
}

export async function deletePortfolioItem(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const isAuthenticated = await checkSession();
    if (!isAuthenticated) {
      return { success: false, error: "Acesso não autorizado." };
    }

    if (!supabase) {
      return { success: false, error: "Conexão com o banco de dados indisponível." };
    }

    const { error } = await supabase
      .from("portfolio")
      .delete()
      .eq("slug", slug);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: "Erro interno no servidor." };
  }
}
