"use client";
import { FormEventHandler, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingBtn from "@/reutilisables/loading_btn";

//type SetIsLoginFunction = (newValue: string) => void;
const Login = (/* { setState }: { setState: SetIsLoginFunction } */) => {
  /* const handleClick = () => {
    setState("");
  }; */
  const router = useRouter();
  const { status, data } = useSession();
  const [isLoading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  //
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    //throw new Error("Function not implemented.");
    //validate your userInfo
    setLoading(true);
    event.preventDefault();
    const response = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    }).then(() => {
      setLoading(false);
    });
    console.log(response);
    console.log(data);
  };

  return (
    <div className="auth-card">
      <div className="logo-underline">
        <h1>GRAPHIKAZ</h1>
        <div className="underline" />
      </div>
      <div className="login-component">
        {/* <div className="buttons-group">
          <button type="button">
            <i className="ri-facebook-fill"></i> Inscription avec facebook
          </button>
          <button type="button">
            <i className="ri-google-fill"></i> Inscription avec Google
          </button>
        </div>
        <div className="separator" /> */}
        <form onSubmit={handleSubmit}>
          <div className="inputs-group">
            <div>
              <input
                type="email"
                name=""
                placeholder="E-mail ou nom d'utilisateur"
                value={userInfo.email}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
              />
            </div>
            <div className="password-input">
              <input
                type="password"
                name=""
                placeholder="Mot de passe"
                value={userInfo.password}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
              />
              <strong className="second-links">Oublié ?</strong>
            </div>
          </div>
          <div className="connect-button">
            {!isLoading ? (
              <button type="submit">Connexion</button>
            ) : (
              <LoadingBtn />
            )}
          </div>
        </form>
        <span className="mini-text">
          Pas encore membre ?{" "}
          <strong
            className="second-links"
            onClick={() => {
              router.replace("/auth?et=signin");
              router.refresh();
            }}
          >
            Inscrivez-vous.
          </strong>
        </span>
      </div>
    </div>
  );
};

export default Login;
