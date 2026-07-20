"use client";

import { useState, startTransition } from "react";
import { useRouter } from "next/navigation";
import { login } from "../actions";
import { Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Por favor, insira a senha.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const res = await login(password);
      if (res.success) {
        startTransition(() => {
          router.push("/admin");
          router.refresh();
        });
      } else {
        setError(res.error || "Erro ao realizar login.");
        setLoading(false);
      }
    } catch (err) {
      setError("Erro de rede. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        
        {/* Logo/Cabeçalho */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3.5 bg-primary/10 border border-primary/20 rounded-sm text-primary mb-2">
            <Lock size={28} />
          </div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Área Administrativa</h1>
          <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">Acesso Restrito Construtora</p>
        </div>

        {/* Card Formulário */}
        <div className="bg-slate-900 border border-white/10 p-8 rounded-sm shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="pass" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                Senha de Acesso
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="pass"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 text-white rounded-sm py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-950/40 border border-red-500/20 text-red-300 text-xs rounded-sm leading-relaxed">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-bold py-3.5 rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              {loading ? (
                <span>Autenticando...</span>
              ) : (
                <>
                  <span>Entrar no Painel</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Link de retorno */}
        <div className="text-center">
          <a
            href="/"
            className="text-xs text-white/30 hover:text-white/50 hover:underline transition-all"
          >
            Voltar para o site público
          </a>
        </div>

      </div>
    </main>
  );
}
