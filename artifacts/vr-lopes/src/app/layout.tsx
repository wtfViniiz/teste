import type { Metadata } from 'next';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import '@/global.css';

export const metadata: Metadata = {
  title: 'VR Lopes - Engenharia de Excelência',
  description: 'Solidez, precisão e comprometimento no Amazonas.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen w-full font-sans antialiased bg-background text-foreground">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
