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
import { ApiCategoryProps, apiServiceProps } from "@/types";
import Loader from "@/reutilisables/laoder";

const inter = Inter({ subsets: ["latin"] });

// Exporter metadata directement depuis le fichier
/* export const metadata = {
  title: 'Graphikaz',
  description: 'Graphikaz 2023 | prestation provider app',
}; */

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

  const [isLaoding, setIsloadin] = useState(true);
  const [categoriesList, setcategoriesList] = useState<ApiCategoryProps[]>([]);
  const [categoriesIsLaoding, setcategoriesIsloadin] = useState(true);
  const [serviceList, setData] = useState<apiServiceProps[]>([]);
  //////// get all categories

  async function getCategoriesList() {
    try {
      const data = await getCategories();
      return data;
      //console.log(data.at(0)?.libelle);
      // Faites quelque chose avec les données ici
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
  /// get services
  async function fetchAndUseData() {
    try {
      const data = await fetchAllData();
      return data;
      //console.log(data.at(0)?.libelle);
      // Faites quelque chose avec les données ici
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
  ////////: useEffect
  useEffect(() => {
    fetchAndUseData()
      .then((data) => {
        const packData: apiServiceProps[] = data!;
        setData(packData);
        // Maintenant, vous pouvez utiliser les données ici
        console.log(packData);
        setIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        setIsloadin(false);
      });
    //////////
    getCategoriesList()
      .then((data) => {
        const categories: ApiCategoryProps[] = data!;
        setcategoriesList(categories);
        // Maintenant, vous pouvez utiliser les données ici
        console.log(categories);
        setcategoriesIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        setcategoriesIsloadin(false);
      });
  }, []);
  ///////////

  return (
    <SessionProvider>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          />
        </head>
        <body className={inter.className}>
          {isLaoding || categoriesIsLaoding ? (
            <Loader />
          ) : (
            <>
              {" "}
              {/* Utiliser le NavBar seulement si la route n'est pas exclue */}
              {!isExcludedRoute && <NavBar categories={categoriesList} />}
              {children}
              {/* Utiliser le Footer seulement si la route n'est pas exclue */}
              {!isExcludedRoute && <Footer categories={categoriesList} />}
            </>
          )}
          <script
            src="//code.tidio.co/lvwvljciykg3iycfbgvvk9v7o5tnxtsw.js"
            async
          ></script>
        </body>
      </html>
    </SessionProvider>
  );
}

//<Component {...pageProps} />
