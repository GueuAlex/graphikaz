import { Editing } from "@/public";
import React from "react";
import Image from "next/image";

const OnEditing = () => {
  return (
    <div className="editing-container w-full flex justify-center items-center">
      <div className="max-w-[97rem] py-[2rem] px-[2rem] w-full flex items-center justify-center">
        <div className="etditing-text-container">
          <h1>Service Temporairement Indisponible</h1>
          <p>
            Nous sommes actuellement en train d'apporter des améliorations à ce
            service. Veuillez nous excuser pour la gêne occasionnée.
          </p>
          <p>
            Nous travaillons rapidement pour rendre le service à nouveau
            disponible. Merci de votre compréhension.
          </p>
          <p>
            Si vous avez des questions, n'hésitez pas à nous contacter à
            l'adresse{" "}
          </p>
          <a href="mailto:contact@digifaz.com">
            <button type="button">contact@digifaz.com</button>
          </a>
        </div>
        <Image src={Editing} alt="" />
      </div>
    </div>
  );
};

export default OnEditing;
