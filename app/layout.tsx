"use client";
import "./globals.css";
/* ion icon */
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

import { Footer, NavBar } from "@/components";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { fetchAllData, getCategories } from "@/types/api_services";

/* brevo chat box */
import "./script.js";
import { AppContextProvider } from "@/reutilisables/app_context";

const inter = Inter({ subsets: ["latin"] });

const excludedRoutes = ["/auth", "/dashboard"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // prefech rouutes
  const route = useRouter();
  useEffect(() => {
    route.prefetch("/dashboard");
    route.prefetch("/impression");
  }, []);
  const currentPath = usePathname();
  const isExcludedRoute = excludedRoutes.includes(currentPath as string);

  ///////////

  return (
    <SessionProvider>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          />
          {/* <link rel="icon" href="/favicon.ico" sizes="35" /> */}
          {/* <Script src="/script.js" strategy="lazyOnload" /> */}
        </head>
        <AppContextProvider>
          <body className={inter.className}>
            {
              <>
                {" "}
                {/* Utiliser le NavBar seulement si la route n'est pas exclue */}
                {!isExcludedRoute && <NavBar />}
                {children}
                {/* Utiliser le Footer seulement si la route n'est pas exclue */}
                {!isExcludedRoute && <Footer />}
              </>
            }
            {/*  <script
            src="//code.tidio.co/lvwvljciykg3iycfbgvvk9v7o5tnxtsw.js"
            async
          ></script> */}
          </body>
        </AppContextProvider>
      </html>
    </SessionProvider>
  );
}

//<Component {...pageProps} />
