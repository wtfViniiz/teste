"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  bgClass?: string;
}

export function PageHeader({ title, subtitle, breadcrumbs, bgClass = "bg-zinc-900" }: PageHeaderProps) {
  return (
    <section className={`${bgClass} pt-32 pb-16 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/60" />

      <div className="container mx-auto px-6 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-white/30" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-primary" />
            <span className="text-primary font-bold uppercase tracking-widest text-xs">VR Lopes LTDA</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white/60 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
