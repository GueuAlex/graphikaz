import "./proof_section.css";

import { Cover } from "@/public";
import Image from "next/image";

const ProofSection = () => {
  return (
    <div className="proof-section w-full  px-[2rem] py-[2rem] bg-tertiary relative">
      <div className="py-[4rem] max-w-[97rem] mx-auto  relative">
        <div className="flex-container justify-center items-center   proof-container">
          <div className="flex-item1  f-right flex flex-col justify-start  items-start">
            <h2 className="text-slate-800">
              Tout un monde de talents freelance à portée de main
            </h2>
            <div className="flex flex-row gap-5  mt-8  items-start">
              <i className="ri-medal-line text-primary text-[3rem]"></i>
              <div className="f-text">
                <h3 className="text-[1.3em] mb-2 font-[600] ">
                  Preuve de qualité
                </h3>
                <p>
                  Explorez des échantillons de travail, des avis clients et des
                  vérifications <br /> d'identité pour garantir la qualité des
                  professionnels que vous engagez.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5  mt-8  items-start">
              <i className="ri-money-dollar-circle-line text-primary text-[3rem]"></i>
              <div className="f-text">
                <h3 className="text-[1.3em] mb-2 font-[600] ">
                  Pas de frais avant l'embauche
                </h3>
                <p>
                  Bénéficiez de la tranquillité d'esprit en ne payant aucun
                  frais avant d'embaucher le professionnel qui correspond
                  parfaitement à vos attentes.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5  mt-8  items-start">
              <i className="ri-shield-check-line text-primary text-[3rem]"></i>
              <div className="f-text">
                <h3 className="text-[1.3em] mb-2 font-[600] ">
                  Sûreté et sécurité
                </h3>
                <p>
                  Priorisez la sécurité en consultant des échantillons de
                  travail, les avis clients et les <br /> vérifications
                  d'identité pour chaque professionnel, assurant ainsi une
                  expérience <br /> sûre et fiable.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-item1 f-left  relative">
            <div className="absolute midlle-box note  bg-primary rounded-[8px] top-[40%] z-20 flex flex-col px-[15px] py-[15px]">
              <div className="flex flex-row gap-5 items-center">
                <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                <small className=" text-white text-[1rem]">
                  Le meilleur pour tous les budgets
                </small>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                <small className=" text-white text-[1rem]">
                  Un travail de qualité fait rapidement
                </small>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                <small className=" text-white text-[1rem]">
                  Des paiements protégés, à chaque fois
                </small>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                <small className=" text-white text-[1rem]">24/7 support</small>
              </div>
            </div>
            <Image src={Cover} alt="cover" className="relative " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofSection;
