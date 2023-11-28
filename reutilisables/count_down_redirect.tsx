"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Success } from "@/public";

const CountdownRedirect = ({
  seconds,
  redirectPath,
}: {
  seconds: number;
  redirectPath: string;
}) => {
  const [countdown, setCountdown] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté ou le compte à rebours atteint zéro
    return () => clearInterval(interval);
  }, []); // Le tableau de dépendances vide assure que useEffect s'exécute une seule fois après le rendu initial

  useEffect(() => {
    // Redirection lorsque le compte à rebours atteint zéro
    if (countdown === 0) {
      router.push(redirectPath);
    }
  }, [countdown, redirectPath, router]);

  return (
    <div>
      <div className="success-container flex justify-center">
        <Image src={Success} alt="" width={70} />
      </div>
      <p className="text-center">Compte créer avec sucès </p>
      <p className="text-center text-stone-500 text-[13px]">
        Redirection... {countdown}
      </p>
    </div>
  );
};

export default CountdownRedirect;
