import Link from "next/link";
import { PortfolioItem } from "@/data/portfolio";
import { MapPin, Calendar, Ruler, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block bg-card border rounded-sm overflow-hidden hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden bg-zinc-900">
        <img
          src={item.coverImage}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-primary text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-sm">
            {item.sector}
          </span>
        </div>
        
        <div className="absolute bottom-3 right-3 z-10">
          <span className={cn(
            "text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-sm",
            item.status === "Concluído" ? "bg-green-900/80 text-green-300" : "bg-blue-900/80 text-blue-300"
          )}>
            {item.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display font-bold text-foreground text-lg mb-4 group-hover:text-primary transition-colors leading-snug">
          {item.title}
        </h3>
        
        <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-primary shrink-0" />
            <span className="truncate">{item.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-primary shrink-0" />
            <span>{item.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler size={14} className="text-primary shrink-0" />
            <span>{item.builtArea}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={14} className="text-primary shrink-0" />
            <span className="truncate">{item.client}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t pt-4">
          <span className="text-xs font-semibold text-muted-foreground">Ver Estudo de Caso</span>
          <span className="text-primary text-xs font-bold group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
