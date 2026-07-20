import { notFound } from "next/navigation";
import { PortfolioDetalhePage } from "@/views/portfolio-detalhe";
import { getPortfolioItems } from "@/app/admin/portfolio-actions";

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// SEO Dinâmico - Configuração de títulos e descrições para cada caso do portfólio
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const items = await getPortfolioItems();
  const item = items.find((p) => p.slug === resolvedParams.slug);

  if (!item) {
    return {
      title: "Caso de Portfólio não encontrado - VR Lopes",
    };
  }

  return {
    title: `${item.title} | Portfólio de Obras VR Lopes`,
    description: `Estudo de caso do projeto ${item.title} (${item.sector}) em ${item.location}. Conheça os desafios, soluções e resultados obtidos pela VR Lopes.`,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const items = await getPortfolioItems();
  const item = items.find((p) => p.slug === resolvedParams.slug);

  if (!item) {
    notFound();
  }

  return <PortfolioDetalhePage item={item} allItems={items} />;
}
