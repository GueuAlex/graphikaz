'use client'

import { useEffect } from 'react';
import React, { useState } from 'react'
import { useRouter, useSearchParams } from "next/navigation";


import "./aut.css"
import Login from './login/login';
import SignUp from './signup/signup';


const Auth = () => {
  const searchParams = useSearchParams();

  // Utilise la méthode get() de l'objet searchParams pour récupérer la valeur du paramètre 'et'
  const et = searchParams.get('et');

  useEffect(() => {
    // Vérifier si le composant est rendu côté client
    // avant de traiter les paramètres
    if (typeof window !== 'undefined') {
      // Utiliser les paramètres ici
      console.log(et);
    }
  }, [et]);

  const [state, setState] = useState('authlinks');
  return (
    <div className='login-signup-page'>
      <div className="m-container">
        {et === 'signin' ? (
          <SignUp />
        ) : state === 'authlinks' ? (
          <AuthLinks setState={setState} />
        ) : state === 'login' ? (
          <Login setState={setState} />
        ) : (
          <SignUp />
        )}
      </div>
    </div>
  );
};

type SetIsLoginFunction = (newValue: string) => void;
const AuthLinks = ({ setState } :  { setState: SetIsLoginFunction }) => {
  const handleClick = () => {
    setState('login');
  };
  const handleClick2 = () => {
    setState('');
  };
  return (
    <div className="card">
        <div className="logo-underline">
            <h1>GRAPHIKAZ</h1>
            <div className="underline" />
        </div>

        <span className="mini-text">
          Que vous souhaitiez acheter ou vendre des services sur Graphikaz, il vous suffit de créer gratuitement votre compte.
        </span>
        <div className="buttons-group">
          <button type="button">
            <i className="ri-facebook-fill"></i> Inscription avec facebook
          </button>
          <button type="button">
            <i className="ri-google-fill"></i> Inscription avec Google
          </button>
          <button type="button" onClick={handleClick2}>
              Inscription par e-mail
          </button>
        </div>
        <span className="mini-text">Déjà inscrit ? <strong className='second-links' onClick={handleClick}>Connectez-vous.</strong></span>
      </div>
  )
}



export default Auth