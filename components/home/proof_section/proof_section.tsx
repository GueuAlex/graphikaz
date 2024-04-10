import "./proof_section.css";

import { Cover } from "@/public";
import Image from "next/image";

const ProofSection = () => {
  return (
    <div className="proof-section w-full  px-[2rem] py-[2rem] bg-tertiary relative">
      <div className="py-[4rem] max-w-[97rem] mx-auto  relative">
        <div className="flex-container justify-center items-center   proof-container">
          <div className="proof-desc flex-item1  f-right flex flex-col justify-start  items-start">
            <h2 className="text-slate-800">
              Simplifiez votre expérience de conception grâce à Graphikaz
            </h2>
            <div className="flex flex-row gap-5  mt-8  items-start">
              <i className="ri-timer-flash-line text-primary text-[3rem]"></i>
              <div className="f-text">
                <h3 className="text-[1.3em] mb-2 font-[600] ">Gain de temps</h3>
                <p>
                  Accédez à un large choix de services graphiques et
                  d'impression en un seul lieu. <br />
                  Bénéficiez de prix compétitifs et de devis transparents.{" "}
                  <br />
                  Vous pouvez personnaliser vos projets en fonction de vos
                  préférences de conception.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5  mt-8  items-start">
              <i className="ri-cursor-line text-primary text-[3rem]"></i>
              <div className="f-text">
                <h3 className="text-[1.3em] mb-2 font-[600] ">
                  Flexibilité et simplicité
                </h3>
                <p>
                  Commandez votre infographie en quelques clics depuis n'importe
                  où et à n'importe quelle heure. Suivez l'avancement de votre
                  projet en temps réel et recevez des notifications
                  automatiques.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5  mt-8  items-start">
              <i className="ri-group-line text-primary text-[3rem]"></i>
              <div className="f-text">
                <h3 className="text-[1.3em] mb-2 font-[600] ">
                  Collaboration et révisions simplifiées
                </h3>
                <p>
                  Collaborez étroitement avec les designers pour vous assurer
                  que votre vision soit parfaitement réalisée. Demandez des
                  révisions et des ajustements pour être satisfait du résultat
                  final
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
                  Un processus de commande rapide
                </small>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                <small className=" text-white text-[1rem]">
                  Des résultats de qualité
                </small>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                <small className=" text-white text-[1rem]">
                  Une équipe d'experts à votre écoute
                </small>
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
