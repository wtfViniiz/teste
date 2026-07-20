"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center relative overflow-hidden">
      {/* Decorative architectural background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-foreground" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-foreground" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-foreground" />
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-foreground" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-foreground" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-lg mx-auto"
      >
        {/* Animated Icon Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto w-24 h-24 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary mb-8"
        >
          <FileQuestion size={48} />
        </motion.div>

        {/* Large 404 text */}
        <h1 className="text-8xl md:text-9xl font-display font-black text-foreground/10 select-none tracking-tighter leading-none mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-tight">
          Página não encontrada
        </h2>

        <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
          O link que você acessou pode estar quebrado ou a página foi removida.
          Nossa equipe de engenharia está sempre otimizando a plataforma.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 transition-all cursor-pointer"
          >
            <Home size={18} />
            Ir para o Início
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-border text-foreground px-8 py-4 rounded-sm font-bold hover:bg-muted/50 transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
            Voltar Página
          </button>
        </div>
      </motion.div>
    </div>
  );
}
