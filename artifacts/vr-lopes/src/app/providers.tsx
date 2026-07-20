"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

const SW_CLEAN_FLAG = 'sw_cleaned_v1';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Só executa a limpeza uma vez por sessão
    if (sessionStorage.getItem(SW_CLEAN_FLAG)) return;

    const cleanup = async () => {
      let needsReload = false;

      // 1. Desregistra todos os Service Workers herdados
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        if (registrations.length > 0) {
          await Promise.all(registrations.map((r) => r.unregister()));
          needsReload = true;
        }
      }

      // 2. Limpa todos os caches da Cache API
      if ('caches' in window) {
        const keys = await caches.keys();
        if (keys.length > 0) {
          await Promise.all(keys.map((k) => caches.delete(k)));
          needsReload = true;
        }
      }

      // Marca que a limpeza foi feita antes de recarregar
      sessionStorage.setItem(SW_CLEAN_FLAG, '1');

      if (needsReload) {
        window.location.reload();
      }
    };

    cleanup();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
