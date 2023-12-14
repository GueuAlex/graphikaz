"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./nav_bar.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { categories, userMenuTab } from "@/constants";
import { signIn, signOut, useSession } from "next-auth/react";
import SearchBarContents from "@/hoc/search_bar_contents";
import { User } from "next-auth";
import { getCategories } from "@/types/api_services";
import { ApiCategoryProps } from "@/types";
import Image from "next/image";
import { LogoColor, LogoLight } from "@/public";

export default function NavBar({
  categories,
}: {
  categories: ApiCategoryProps[];
}) {
  const session = useSession();
  const [toggle, setToggle] = useState(true);
  const [isHome, setIsHome] = useState(true);
  const [searchGlassVisible, setSearchGlassVisible] = useState(false); // Nouvel état pour la visibilité de search-glass

  const pathname = usePathname();
  /* const [categoryList, setData] = useState<ApiCategoryProps[]>([]);
  const [categoriesIsLaoding, setcategoriesIsloadin] = useState(true);
  async function getCategoriesList() {
    try {
      const data = await getCategories();
      return data;
      //console.log(data.at(0)?.libelle);
      // Faites quelque chose avec les données ici
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  } */

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathname]); // Ne met à jour l'état que si le chemin change

  ////////// fetch categories from database
  /*  useEffect(() => {
    getCategoriesList()
      .then((data) => {
        const categories: ApiCategoryProps[] = data!;
        setData(categories);
        // Maintenant, vous pouvez utiliser les données ici
        console.log(categories);
        setcategoriesIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        setcategoriesIsloadin(false);
      });
  }, []); // */
  const catIconTab = [
    "ri-paint-brush-line",
    "ri-camera-lens-fill",
    "ri-pen-nib-fill",
  ];
  return (
    <header className=" z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      {/* side bar */}
      <motion.div>
        <div className={`${!toggle ? "show-overlay" : ""} overlay`}></div>
        {/* nav side bar */}
        <div
          className={`${!toggle ? "show-side-bar" : "hidde-side-bar"} sidebar`}
        >
          <div className="top-items">
            <div className="sidebar_heard">
              <div className=" close-icon">
                <i
                  className="ri-close-line"
                  onClick={() => setToggle(!toggle)}
                ></i>
              </div>
              <div className="text-big">
                <p>GRAPHIKAZ</p>
              </div>
            </div>
            <div className="item active">
              <div className="icon-small close-icon">
                <i className="ri-home-line"></i>
              </div>
              <div className="text-medium">
                <p>Home</p>
              </div>
            </div>

            <div className="item">
              <div className="icon-small close-icon">
                <i className="ri-apps-2-line"></i>
              </div>
              <div className="text-medium">
                <p>Categories</p>
              </div>
            </div>

            <div className="item">
              <div className="icon-small close-icon">
                <i className="ri-code-view"></i>
              </div>
              <div className="text-medium">
                <p>Prestations</p>
              </div>
            </div>

            <div className="item">
              <div className="icon-small close-icon">
                <i className="ri-error-warning-line"></i>
              </div>
              <div className="text-medium">
                <p>À propos</p>
              </div>
            </div>
          </div>
          <div className="bottom-items">
            <div className="item">
              <div className="icon-small close-icon">
                <i className="ri-login-circle-line"></i>
              </div>
              <div className="text-medium">
                <p>Connexion</p>
              </div>
            </div>

            <div className="item">
              <div className="icon-small close-icon">
                <i className="ri-user-add-line"></i>
              </div>
              <div className="text-medium">
                <p>S'Inscrire</p>
              </div>
            </div>
          </div>
        </div>
        {/* nav side bar end */}
      </motion.div>
      {/* side bar end */}
      <nav
        aria-label="Global"
        className={`flex justify-center mx-auto max-w-container px-4 sm:px-6 lg:px-8  ${
          pathname!.startsWith("/categories") ? "shadow" : ""
        }`}
      >
        <div
          className={`${
            !isHome
              ? "justify-between flex w-full"
              : "justify-between max-w-[97rem] w-full"
          } relative flex items-center py-[1.78rem] max-lg:justify-between`}
        >
          <div>
            <Link href="/" className="mr-auto flex-none text-slate-900">
              <Image src={LogoColor} alt="Graphikaz_logo" width={150} />
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <div className="hidden lg:flex lg:items-center">
              <span className="categories-label">
                Categories
                <div className="sub-menu shadow-xl">
                  {
                    <ul>
                      {categories.map((cat, index) => (
                        <li key={index} className=" flex gap-4">
                          <i className={catIconTab[index]}></i>{" "}
                          <a href={`/categories?category=${cat.libelle}`}>
                            {cat.libelle}
                          </a>
                        </li>
                      ))}
                    </ul>
                  }
                </div>
              </span>
              <Link href="/freelancers" className="ml-8">
                Prestataires
              </Link>
              <div className="ml-2 hidden rounded-full bg-secondary px-1.5 py-0.5 text-xs text-white sm:block">
                New
              </div>
              <Link href="#" className="ml-8">
                À propos
              </Link>
            </div>
            <button
              onClick={() => setSearchGlassVisible(!searchGlassVisible)}
              type="button"
              className="-my-1 ml-8 flex h-8 w-8 items-center justify-center rounded-lg"
            >
              <span className="sr-only">Search components</span>
              <i className="ri-search-line text-[23px]"></i>
            </button>
            <button
              type="button"
              className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
            >
              <span className="sr-only">Open navigation</span>
              <i
                className="ri-menu-line text-[23px]"
                onClick={() => setToggle(!toggle)}
              ></i>
            </button>
            <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
              {session.status !== "authenticated" ? (
                <SignButtons />
              ) : (
                <AvatarContainer user={session.data?.user!} />
              )}
            </div>
          </div>
        </div>
        <motion.div
          /* onClick={() => setSearchGlassVisible(!searchGlassVisible)} */
          className="search-glass"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{
            opacity: searchGlassVisible ? 1 : 0,
            y: searchGlassVisible ? 0 : "-100%",
          }}
          transition={{ duration: 0.5 }}
        >
          <i
            className="ri-close-line mt-[40px] mr-4 close-button"
            onClick={() => setSearchGlassVisible(!searchGlassVisible)}
          ></i>{" "}
          <SearchBarContents updateToggle={setSearchGlassVisible} />
        </motion.div>
      </nav>
    </header>
  );
}

const SignButtons = () => {
  return (
    <div>
      {" "}
      <Link
        href="/auth?et=signin"
        /*  onClick={() => {
          signOut();
        }} */
      >
        S'inscrire
      </Link>
      <Link
        href=""
        onClick={() => {
          signIn();
        }}
        className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-primary text-white hover:bg-slate-700 -my-2.5 ml-8"
      >
        <span>
          Connexion <span aria-hidden="true">→</span>
        </span>
      </Link>
    </div>
  );
};

const AvatarContainer = ({ user }: { user: User }) => {
  return (
    <div className="avatar-conatainer flex gap-3 items-center relative">
      <div className="avatar online placeholder cursor-pointer">
        <div className="bg-neutral text-neutral-content rounded-full w-10">
          <span className="text-xl">AI</span>
        </div>{" "}
      </div>
      <div className="flex flex-col">
        <p className=" cursor-pointer">{user.name}</p>
        <span className=" text-stone-500 text-[11px]">{user.type_user}</span>
      </div>
      <div className="user-menu absolute shadow-xl">
        <div className="user-menu-container w-full">
          <ul>
            {userMenuTab.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex gap-2 flex-row px-4 py-3"
                  onClick={() => {
                    if (item.label === "Logout") {
                      signOut();
                    }
                  }}
                >
                  <i className={`${item.iconClass} `}></i>
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
