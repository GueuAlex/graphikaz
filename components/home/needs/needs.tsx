import "./needs.css";

import React from "react";

const Needs = () => {
  return (
    <div className="w-full px-[2rem] py-[5rem]  bg-primary relative  needs">
      <div className="max-w-[97rem] mx-auto relative ">
        <div>
          <h2 className=" text-slate-200">Besoin d'un service ?</h2>
          <small className="subtitle mt-3 text-slate-300 font-semibold">
            Services les plus consultés et les plus vendus de tous les temps
          </small>
        </div>
        <div className="needs-content w-full flex flex-row justify-between items-start gap-12 mt-12 flex-wrap">
          <div className="flex flex-col gap-2 flex-1">
            <i className="ri-macbook-line text-slate-200 text-[2.8rem]"></i>
            <h3 className="text-slate-200 font-semibold text-[1.3rem]">
              Post a job
            </h3>
            <p className="text-slate-200 font-normal text-[.9rem]">
              Entrez facilement en contact avec les meilleurs freelances en
              publiant gratuitement votre projet.
            </p>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <i className="ri-user-search-line text-slate-200 text-[2.8rem]"></i>
            <h3 className="text-slate-200 font-semibold text-[1.3rem]">
              Choisir des free-lances
            </h3>
            <p className="text-slate-200 font-normal text-[.9rem]">
              Parcourez un large éventail de freelances talentueux. Sélectionnez
              le candidat idéal pour votre projet.
            </p>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <i className="ri-exchange-dollar-line text-slate-200 text-[2.8rem]"></i>
            <h3 className="text-slate-200 font-semibold text-[1.3rem]">
              Payer en toute sécurité
            </h3>
            <p className="text-slate-200 font-normal text-[.9rem]">
              Payez en toute sécurité en utilisant notre système de paiement de
              confiance. Ne débloquez les fonds que lorsque vous êtes satisfait
              du travail.
            </p>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <i className="ri-customer-service-2-fill text-slate-200 text-[2.8rem]"></i>
            <h3 className="text-slate-200 font-semibold text-[1.3rem]">
              Nous sommes là pour vous aider
            </h3>
            <p className="text-slate-200 font-normal text-[.9rem]">
              Vous avez des questions ou des inquiétudes ? Contactez-nous pour
              une assistance rapide et rapide et amicale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needs;
