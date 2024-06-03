"use client";

import { Suspense, useEffect } from "react";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import "./aut.css";
import Login from "./login/login";
import SignUp from "./signup/signup";
import { useSession } from "next-auth/react";

const Auth = () => {
  const { status, data } = useSession();

  const route = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      route.replace("/");
    }
  }, [status]);
  const searchParams = useSearchParams();

  // Utilise la méthode get() de l'objet searchParams pour récupérer la valeur du paramètre 'et'
  const et = searchParams!.get("et");
  //const [state, setState] = useState("authlinks");
  useEffect(() => {
    // Vérifier si le composant est rendu côté client
    // avant de traiter les paramètres
    if (typeof window !== "undefined") {
      // Utiliser les paramètres ici
      console.log(et);
    }
  }, [et]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="login-signup-page">
        <div className="m-container">
          {et === "signin" ? (
            <SignUp />
          ) : et === "login" ? (
            <Login /* setState={setState} */ />
          ) : (
            <AuthLinks /* setState={setState} */ />
          )}
        </div>
      </div>
    </Suspense>
  );
};

//type SetIsLoginFunction = (newValue: string) => void;
const AuthLinks = (/* { setState }: { setState: SetIsLoginFunction } */) => {
  /*  const handleClick = () => {
    setState("login");
  }; */
  /* const handleClick2 = () => {
    setState("");
  }; */
  const router = useRouter();
  return (
    <div className="auth-card">
      <div className="logo-underline">
        <h1>GRAPHIKAZ</h1>
        <div className="underline" />
      </div>

      <span className="mini-text">
        Que vous souhaitiez acheter ou vendre des services sur Graphikaz, il
        vous suffit de créer gratuitement votre compte.
      </span>
      <div className="buttons-group">
        <button type="button">
          <i className="ri-facebook-fill"></i> Inscription avec facebook
        </button>
        <button type="button">
          <i className="ri-google-fill"></i> Inscription avec Google
        </button>
        <button
          type="button"
          onClick={() => {
            router.replace("/auth?et=signin");
            router.refresh();
          }}
        >
          Inscription par e-mail
        </button>
      </div>
      <span className="mini-text">
        Déjà inscrit ?{" "}
        <strong
          className="second-links"
          onClick={() => {
            router.replace("/auth?et=login");
            router.refresh();
          }}
        >
          Connectez-vous.
        </strong>
      </span>
    </div>
  );
};

export default Auth;
