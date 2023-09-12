"use client"
import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { Footer, NavBar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

// Exporter metadata directement depuis le fichier
/* export const metadata = {
  title: 'Graphikaz',
  description: 'Graphikaz 2023 | prestation provider app',
}; */

const excludedRoutes = ['/auth', '/excluded-page2'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  const isExcludedRoute = excludedRoutes.includes(currentPath);

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
        />
      </head>
      <body className={inter.className}>
        {/* Utiliser le NavBar seulement si la route n'est pas exclue */}
        {!isExcludedRoute && <NavBar />}
        {children}
        {/* Utiliser le Footer seulement si la route n'est pas exclue */}
        {!isExcludedRoute && <Footer />}
      </body>
    </html>
  );
}
