import { Wrapper } from "@/reutilisables";
import { FlyersProps } from "@/types";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import {
  FlyersTab,
  flyersPaperType,
  flyersPaperWidget,
  flyersPelliculage,
  flyersPrintingSide,
} from "@/constants";
import { GraphikazDesign, Logo, LogoColor } from "@/public";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface SecletedFlyerViewProps {
  selectedFlyer: FlyersProps;
  setSelectedFlyer: (selectedFlyer: FlyersProps) => void;
}
const SecletedFlyerView: React.FC<SecletedFlyerViewProps> = ({
  selectedFlyer,
  setSelectedFlyer,
}) => {
  const unselectedFlyers = FlyersTab.filter(
    (flyer) => flyer.type === selectedFlyer.type
  );
  const paragraphs = selectedFlyer.short_description.split("\n");
  const [quantity, setQuantity] = useState(25); // Quantité initiale à 25
  const [printingSidePrice, setPrintingSidePrice] = useState(
    flyersPrintingSide[0].additional_price
  );
  const [paperTypePrice, setPaperTypePrice] = useState(
    flyersPaperType[0].additional_price
  ); //);
  const [paperWidgetPrice, setPaperWidgetPrice] = useState(
    flyersPaperWidget[0].additonali_price
  );
  const [pelliculagePrice, setPelliculagePrice] = useState(
    flyersPelliculage[0].additional_price
  );

  // Gestionnaire d'événement pour réduire la quantité
  const decreaseQuantity = () => {
    if (quantity > 25) {
      setQuantity(quantity - 1);
    }
    toast.warning("Quantité minimum atteinte !");
  };

  // Gestionnaire d'événement pour augmenter la quantité
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  // Gestionnaire d'événement pour mettre à jour la quantité directement saisie
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  // Calculer le prix total en fonction de la quantité et des prix supplémentaires sélectionnés
  const totalPrice =
    (selectedFlyer.base_price +
      printingSidePrice +
      paperTypePrice +
      paperWidgetPrice +
      pelliculagePrice) *
    quantity;

  // Gestionnaire d'événement pour mettre à jour les prix supplémentaires sélectionnés et recalculer le prix total
  const handleSelectChange = (
    event: ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const additionalPrice = parseFloat(event.target.value);
    setter(additionalPrice);
  };
  return (
    <div className="selected-flyer-container">
      <div className="go-to-back">
        <div className="back-to-menu">
          {" "}
          <div className="back">{"<-- Retour"}</div>{" "}
        </div>
      </div>
      <div className="selected-flyer w-full relative flex justify-center">
        <ToastContainer />

        <div className="flyer-details ">
          <div className="flyer-details-left  flex-1">
            <div className="sticky-left ">
              <div className="cover-container w-full">
                <Image src={selectedFlyer.cover} alt={selectedFlyer.title} />
              </div>
              <div className="unselected-container">
                <h3>SÉLECTIONNER UN STYLE DE FLYERS</h3>
                <div className="unseleted-content w-full">
                  {unselectedFlyers.map((flyer, index) => (
                    <div
                      className={`unselected-f ${
                        flyer.id === selectedFlyer.id ? "active" : ""
                      }`}
                      onClick={() => setSelectedFlyer(flyer)}
                    >
                      <div className="un-f-img">
                        <Image src={flyer.cover} alt={flyer.title} />
                      </div>
                      <div className="un-f-desc">
                        <h1>{flyer.title}</h1>
                        <div className=" price flex justify-start items-center">
                          <span className="start-from">à partir de:</span>
                          <div className="flex flex-col gap-[-0.5rem]">
                            <strong>
                              {flyer.base_price}
                              <sup>₣</sup>{" "}
                            </strong>
                            <small>zero rated for VAT</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flyer-details-right flex-1">
            <h1>{selectedFlyer.title}</h1>
            <div className="short-desc">
              {/* Mappez sur le tableau de paragraphes pour afficher chaque paragraphe */}
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="help-center">
              <div className="a-btn flex gap-3">
                <a href="#" className="btn rounded-[5px]">
                  Comment fournir des modeles
                </a>
                <a href="#" className="btn rounded-[5px]">
                  Nos modeles
                </a>
              </div>
              <div className="help-link flex items-center justify-start gap-2">
                <Image
                  src={GraphikazDesign}
                  alt="graphikaz-logo"
                  width={120}
                  height={60}
                />

                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Besoin d'aide pour votre design ? Utilisez le service
                  Graphikaz Design.
                </a>
              </div>
            </div>
            <div className="divider" />
            <div className="price-container">
              <p>PRICE INCLUDING FREE DELIVERY {"==>"}</p>
              <div className="princing-bold flex flex-col gap-[-0.5rem]">
                <strong>
                  {selectedFlyer.base_price}
                  <sup>₣</sup>{" "}
                </strong>
                <small>zero rated for VAT</small>
              </div>
            </div>
            <div className="divider" />
            {/*  */}
            <div className="customisation">
              <h1>Customiser votre flyers {selectedFlyer.title}</h1>
              <span className="text-stone-600">SIMPLE ET RAPIDE</span>
              <p>
                Démarquez-vous avec nos flyers sur mesure, conçus pour captiver
                et convaincre. De la conception à la livraison, personnalisez
                chaque aspect pour refléter votre style unique. Choisissez parmi
                une gamme de formats, papiers et finitions pour créer un impact
                visuel inoubliable. Avec notre service d'impression dédié, vos
                idées prennent leur envol pour atteindre de nouveaux sommets.{" "}
              </p>
            </div>
            {/* form */}
            <div className="form w-full">
              <form action="" className="w-full">
                <div className="quantity-container w-full">
                  <label htmlFor="">Quantité</label>
                  <div className="moin-input-plus">
                    <div className="moin" onClick={decreaseQuantity}>
                      -
                    </div>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="flex-1"
                      value={quantity}
                      onChange={handleQuantityChange} // Gestionnaire d'événement pour la saisie directe
                    />
                    <div className="plus" onClick={increaseQuantity}>
                      +
                    </div>
                  </div>
                </div>
                <div className="label-input mt-2">
                  <label htmlFor="">Format</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={selectedFlyer.format}
                  />
                </div>
                {/* cotés à imprimé */}
                <div className="label-input mt-2">
                  <label htmlFor="">Impression</label>
                  <select
                    className=" w-full select"
                    onChange={(event) =>
                      handleSelectChange(event, setPrintingSidePrice)
                    }
                  >
                    {flyersPrintingSide.map((side) => (
                      <option value={side.additional_price} key={side.libelle}>
                        {side.libelle}
                      </option>
                    ))}
                  </select>
                </div>
                {/* type de papier */}
                <div className="label-input mt-2">
                  <label htmlFor="">
                    Type de papier {"( Support d'impression )"}{" "}
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3366cc] font-light underline"
                    >
                      {" "}
                      Plus d'infos
                    </a>
                  </label>
                  <select
                    className=" w-full select"
                    onChange={(event) =>
                      handleSelectChange(event, setPaperTypePrice)
                    }
                  >
                    {flyersPaperType.map((paper) => (
                      <option
                        value={paper.additional_price}
                        key={paper.libelle}
                      >
                        {paper.libelle}
                      </option>
                    ))}
                  </select>
                </div>
                {/* grammage du papier */}
                <div className="label-input mt-2">
                  <label htmlFor="">
                    Grammage {"( Densité du papier )"}{" "}
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3366cc] font-light underline"
                    >
                      {" "}
                      Plus d'infos
                    </a>
                  </label>
                  <select
                    className=" w-full select"
                    onChange={(event) =>
                      handleSelectChange(event, setPaperWidgetPrice)
                    }
                  >
                    {flyersPaperWidget.map((weight) => (
                      <option
                        value={weight.additonali_price}
                        key={weight.libelle}
                      >
                        {weight.libelle}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Pelliculage */}
                <div className="label-input mt-2">
                  <label htmlFor="">
                    Pelliculage
                    {/*  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3366cc] font-light underline"
                  >
                    {" "}
                    Plus d'infos
                  </a> */}
                  </label>
                  <select
                    className=" w-full select"
                    onChange={(event) =>
                      handleSelectChange(event, setPelliculagePrice)
                    }
                  >
                    {flyersPelliculage.map((pellicule) => (
                      <option
                        value={pellicule.additional_price}
                        key={pellicule.libelle}
                      >
                        {pellicule.libelle}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Global pricing */}
                <div className="global-pricing">
                  <p>
                    Le délai de fabrication en jours ouvrés n'inclus pas le
                    délai d'expédition.
                    <br />
                    Livraison : <strong>48/72 Heures</strong> après fabrication.
                    <br />
                    Les délais peuvent être retardés en cas de non conformité
                    des fichiers fournis.
                    <br />
                    Afin de vous garantir une qualité d'impression optimale,
                    veuillez fournir des fichiers en haute résolution {"(HD)"}
                  </p>
                  <div className="price-block">
                    <div className="price-with-deli">
                      <strong>{totalPrice}₣</strong> TTC avec livraison
                    </div>
                    <div className="price-without-deli">
                      <strong>1000₣</strong> TTC sans livraison
                    </div>
                    <button className="btn first-chirld">
                      TÉLÉCHARGER VOS FICHIERS ET COMMANDER
                    </button>
                    <button className="btn">
                      TÉLÉCHARGER PLUS TARD ET COMMANDER
                    </button>
                  </div>
                </div>
                <div className="divider" />
                <div className="send-devis-by-email">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Votre email"
                    className="flex-1"
                  />
                  <button className="">Recevoir ce dévis par email</button>
                </div>
                <div className="divider" />
              </form>
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
      <div className="selected-flyer-desc">
        <div className="desc-container">
          <h2>Concernant {selectedFlyer.title}</h2>
          <div className="descripter">
            <div className="caption-underline">
              <div className="caption">
                En apprendre un peu plus sur le produit
              </div>
              <div className="line" />
            </div>
            <div className="full-desc">
              {selectedFlyer.full_description.map((desc, index) => {
                const para = desc.desc.split("\n");
                return (
                  <div className="desc">
                    <h3>{desc.title}</h3>
                    {para.map((text, index) => (
                      <p dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          {/* description */}
          <div className="descripter">
            <div className="caption-underline">
              <div className="caption">Caracteristiques</div>
              <div className="line" />
            </div>
            <div className="">
              <ul className="px-[16px]">
                {selectedFlyer.caracteristics.map((caract, index) => (
                  <li className=" list-disc">{caract}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* caracteristique */}
        </div>
      </div>
    </div>
  );
};

export default SecletedFlyerView;
