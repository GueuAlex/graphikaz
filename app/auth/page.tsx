"use client";

import { useEffect, Suspense } from "react";
import React from "react";
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
};

const AuthContent = () => {
  const searchParams = useSearchParams();
  const et = searchParams!.get("et");
  //const [state, setState] = useState("authlinks");

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(et);
    }
  }, [et]);

  return (
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
  );
};

//type SetIsLoginFunction = (newValue: string) => void;
const AuthLinks = (/* { setState }: { setState: SetIsLoginFunction } */) => {
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
          <i className="ri-facebook-fill"></i> Inscription avec Facebook
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
