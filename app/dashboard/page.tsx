// components/YourComponent.tsx
"use client";
import React, { useEffect, useState } from "react";
import "./css/style.css";
/* import {
  LogoApple,
  HomeOutline,
  ChatbubbleOutline,
  LogOutOutline,
  MenuOutline,
  HeartOutline,
  PersonOutline,
} from "react-ionicons"; */
import { IonIcon } from "@ionic/react";
import {
  logoApple,
  homeOutline,
  chatbubbleOutline,
  logOutOutline,
  menuOutline,
  heartOutline,
  personOutline,
} from "ionicons/icons";
import DashboardChild from "@/reutilisables/dashboard_child";
import DashboardHome from "./dashboard_home";
import Favorites from "./favorites";
import AccountSettings from "./account_setting";
import ChatBox from "./chat_box";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "next-auth";

const Dashboard: React.FC = () => {
  const session = useSession();
  if (!session) {
    useRouter().back();
  }

  const user = session.data?.user;
  //toggle menu
  const handleToggleClick = () => {
    const navigation = document.querySelector(".navigation");
    const main = document.querySelector(".main");

    if (navigation && main) {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    }
  };

  useEffect(() => {
    const toggleButton = document.querySelector(".togglle");
    if (toggleButton) {
      toggleButton.addEventListener("click", handleToggleClick);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", handleToggleClick);
      }
    };
  }, []);
  // end toggle menuon route name
  const routeNames = ["Dashboard"];
  const [selectedRoute, setSelectedRoute] = useState("/dashboard");

  // fonction pour obtenir la vue en fonction du menu selectionné
  function getView(): React.ReactNode {
    switch (selectedRoute) {
      case "/dashboard":
        return <DashboardHome />;
      case "/favorites":
        return <Favorites />;
      case "/messages":
        return <ChatBox />;
      case "/profile":
        return <AccountSettings />;

      default:
        return <DashboardHome />;
    }
  }

  // navigati

  return (
    // Votre JSX pour le composant
    <>
      {/* <!-- =============== Navigation ================ --> */}
      <div className="dash-container">
        <div className="navigation">
          <ul>
            <li>
              <a href="/dashboard">
                <span className="icon">
                  {/*  <LogoApple
                    color={"#fff"}
                    cssClasses={"side-bar-icon"}
                    onClick={() => alert("Hi!")}
                  /> */}
                  <IonIcon
                    icon={logoApple}
                    color="#fff"
                    className="side-bar-icon"
                  ></IonIcon>
                </span>
                <span className="title">{user?.user?.name}</span>
              </a>
            </li>

            <li
              className={`${selectedRoute === "/dashboard" ? "active" : ""}`}
              onClick={() => setSelectedRoute("/dashboard")}
            >
              <a href="#">
                <span className="icon">
                  {/* <HomeOutline
                    cssClasses={"side-bar-icon"}
                    onClick={() => alert("Hi!")}
                  /> */}
                  <IonIcon
                    icon={homeOutline}
                    className="side-bar-icon"
                  ></IonIcon>
                </span>
                <span className="title">Tableau de bord</span>
              </a>
            </li>

            <li
              className={`${selectedRoute === "/favorites" ? "active" : ""}`}
              onClick={() => setSelectedRoute("/favorites")}
            >
              <a href="#">
                <span className="icon">
                  {/* <ion-icon name="chatbubble-outline"></ion-icon> */}
                  {/* <HeartOutline
                    cssClasses={"side-bar-icon"}
                    onClick={() => alert("Hi!")}
                  /> */}
                  <IonIcon
                    icon={heartOutline}
                    className="side-bar-icon"
                  ></IonIcon>
                </span>
                <span className="title">Mes favories</span>
              </a>
            </li>

            <li
              className={`${selectedRoute === "/messages" ? "active" : ""}`}
              onClick={() => setSelectedRoute("/messages")}
            >
              <a href="#">
                <span className="icon">
                  {/* <ion-icon name="chatbubble-outline"></ion-icon> */}
                  {/*  <ChatbubbleOutline
                    cssClasses={"side-bar-icon"}
                    onClick={() => alert("Hi!")}
                  /> */}
                  <IonIcon
                    icon={chatbubbleOutline}
                    className="side-bar-icon"
                  ></IonIcon>
                </span>
                <span className="title">Messages</span>
              </a>
            </li>

            <li
              className={`${selectedRoute === "/profile" ? "active" : ""}`}
              onClick={() => setSelectedRoute("/profile")}
            >
              <a href="#">
                <span className="icon">
                  {/* <ion-icon name="help-outline"></ion-icon> */}
                  {/* <PersonOutline
                    cssClasses={"side-bar-icon"}
                    onClick={() => alert("Hi!")}
                  /> */}
                  <IonIcon
                    icon={personOutline}
                    className="side-bar-icon"
                  ></IonIcon>
                </span>
                <span className="title">Mon profile</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  {/* <ion-icon name="log-out-outline"></ion-icon> */}
                  {/*  <LogOutOutline
                    cssClasses={"side-bar-icon"}
                    onClick={() => alert("Hi!")}
                  /> */}
                  <IonIcon
                    icon={logOutOutline}
                    className="side-bar-icon"
                  ></IonIcon>
                </span>
                <span className="title">Déconnexion</span>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- ========================= Main ==================== --> */}
        <div className="main">
          {/* <!-- ========================= Top bar ==================== --> */}
          <div className="topbar shadow">
            <div className="togglle">
              {/* <ion-icon name="menu-outline"></ion-icon> */}
              {/* <MenuOutline cssClasses={"top-bar-icon"} /> */}
              <IonIcon
                icon={menuOutline}
                className="top-bar-icon"
                size="18px"
              ></IonIcon>
            </div>

            {/*  <div className="search">
              <label>
                <input type="text" placeholder="Search here" />
               
                <SearchOutline />
              </label>
            </div> */}

            <div className="avatar placeholder online cursor-pointer">
              <div className="bg-neutral  text-neutral-content rounded-full w-8">
                <span className="text-xs">UI</span>
              </div>
            </div>
          </div>

          {/* <!-- ======================= Cards ================== --> */}
          <DashboardChild>{getView()}</DashboardChild>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
