import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Sobre } from '@/components/sobre';
import { AreasAtuacao } from '@/components/areas-atuacao';
import { Diferenciais } from '@/components/diferenciais';
import { Equipe } from '@/components/equipe';
import { Responsabilidade } from '@/components/responsabilidade';
import { Clientes } from '@/components/clientes';
import { Contato } from '@/components/contato';
import { Footer } from '@/components/footer';

const queryClient = new QueryClient();

function InstitutionalSite() {
  return (
    <div className="min-h-screen w-full font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <AreasAtuacao />
        <Diferenciais />
        <Equipe />
        <Responsabilidade />
        <Clientes />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-6">
      <h1 className="text-6xl font-display font-bold text-secondary mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Página não encontrada</p>
      <a href="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors">
        Voltar para o Início
      </a>
    </div>
  )
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={InstitutionalSite} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
