import { Wrapper } from "@/reutilisables";
import {
  FlyersProps,
  ImpressOrderProps,
  MetaDataProps,
  deliZoneProps,
} from "@/types";
import React, { ChangeEvent, useEffect, useState } from "react";
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
import { useSession } from "next-auth/react";
import CheckoutComponent from "@/reutilisables/checkout_component";
import { getDeliZone } from "@/types/api_services";

interface SecletedFlyerViewProps {
  selectedFlyer: FlyersProps;
  setSelectedFlyer: (selectedFlyer: FlyersProps | undefined) => void;
}
const SecletedFlyerView: React.FC<SecletedFlyerViewProps> = ({
  selectedFlyer,
  setSelectedFlyer,
}) => {
  const unselectedFlyers = FlyersTab.filter(
    (flyer) => flyer.type === selectedFlyer.type
  );
  const paragraphs = selectedFlyer.short_description.split("\n");

  //////: gestions des etat
  const [quantity, setQuantity] = useState(25); // Quantité initiale à 25
  const [printingSidePrice, setPrintingSidePrice] = useState<MetaDataProps>(
    flyersPrintingSide[0]
  );
  const [paperTypePrice, setPaperTypePrice] = useState<MetaDataProps>(
    flyersPaperType[0]
  ); //);
  const [paperWidgetPrice, setPaperWidgetPrice] = useState<MetaDataProps>(
    flyersPaperWidget[0]
  );
  const [pelliculagePrice, setPelliculagePrice] = useState<MetaDataProps>(
    flyersPelliculage[0]
  );

  const [deliZone, setDeliZone] = useState<deliZoneProps[]>([]);
  const [selecteddeliZone, setSelectedDeliZone] = useState<deliZoneProps>(
    deliZone[0]
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
      printingSidePrice.price +
      paperTypePrice.price +
      paperWidgetPrice.price +
      pelliculagePrice.price) *
      quantity +
    parseInt(selecteddeliZone?.montant.toString());

  // Gestionnaire d'événement pour mettre à jour les prix supplémentaires sélectionnés et recalculer le prix total
  const handleSelectChange = (
    event: ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<MetaDataProps>>
  ) => {
    const additionalPrice = parseFloat(event.target.value);

    // Supposez que MetaDataProps a un champ appelé additionalPrice
    setter((prevMetaDataProps) => ({
      ...prevMetaDataProps,
      price: additionalPrice,
    }));
  };

  // session management
  const session = useSession();

  // afficher le component de paiement
  const [toggle, setToggle] = useState<boolean>(false);

  ///
  //////:: delizone //////////
  const handleSelectZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value, 10);
    const selectedZone = deliZone.find((zone) => zone.id === selectedId);

    if (selectedZone) {
      setSelectedDeliZone(selectedZone);
    }
  };

  async function getDelizone() {
    try {
      const data = await getDeliZone();
      return data;
      //console.log(data.at(0)?.libelle);
      // Faites quelque chose avec les données ici
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
  useEffect(() => {
    getDelizone()
      .then((data) => {
        const deliZones: deliZoneProps[] = data!;
        setDeliZone(deliZones);
        setSelectedDeliZone(deliZones[0]);
        // Maintenant, vous pouvez utiliser les données ici
        //console.log(packData);
        // setIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        //setIsloadin(false);
      });
  }, []);

  /// intercepteur du boutton telechargé plus tard et commander
  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    setToggle(true);
  };

  const order: ImpressOrderProps = {
    order_number: null,
    user_id: null,
    transaction_ref: null,
    impressable: selectedFlyer.title,
    impressable_format: selectedFlyer.format,
    impressable_type: selectedFlyer.type,
    ordering_at: null,
    quantity: quantity,
    amount: totalPrice,
    checkout_status: null,
    checkout_type: null,
    order_status: null,
    /* deli_zone: selecteddeliZone, */
    meta_data: {
      "coté imprimé": printingSidePrice,
      support: paperTypePrice,
      "densité du support": paperWidgetPrice,
      pelliculage: pelliculagePrice,
    },
  };

  return (
    <div className="selected-flyer-container">
      <ToastContainer />
      {/* paiement part */}
      <div className={`${toggle ? "show-overlay" : ""} overlay`}></div>
      <aside
        className={`${
          toggle ? "show-paiement-side-bar" : "hide-paiement-side-bar"
        } paiement-side-bar`}
      >
        <div className="paiement-side-bar-container">
          {session.status === "unauthenticated" ? (
            <div className="register-or-login-invitation container flex justify-center items-center mt-8">
              <div className="p-3 font-light text-[12px]">
                Veuillez vous{" "}
                <a href="/auth?et=login" className=" text-blue-700">
                  connecter
                </a>{" "}
                ou{" "}
                <a href="/auth?et=signin" className=" text-blue-700">
                  créez un compte
                </a>{" "}
                c'est simple et rapide{" "}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {/* paiement card body */}
          {/* <PaiementCardBody
              updateToggle={updateToggle}
              defaultPack={selectedPack}
              service={service}
            /> */}
          <CheckoutComponent
            order={order}
            updateToggle={setToggle}
            selected_flyer={selectedFlyer}
            delizone={selecteddeliZone}
          />
          {/* end paiement card body */}
        </div>
      </aside>
      {/* paiement part end */}
      <div className="selected-flyer w-full relative flex justify-center">
        <div className="flyer-details ">
          <div className="flyer-details-left  flex-1">
            <div className="sticky-left ">
              <div className="cover-container w-full relative">
                <div
                  className="go-back"
                  onClick={() => setSelectedFlyer(undefined)}
                >
                  {"<- Retour"}
                </div>
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
                              <span className="text-[10px]"> F CFA</span>{" "}
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
                  <span className="text-[12px]">F CFA</span>{" "}
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
              <form action="" className="w-full" onSubmit={handleClick}>
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
                      <option value={side.price} key={side.libelle}>
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
                      <option value={paper.price} key={paper.libelle}>
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
                      <option value={weight.price} key={weight.libelle}>
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
                      <option value={pellicule.price} key={pellicule.libelle}>
                        {pellicule.libelle}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="label-input mt-2">
                  <label htmlFor="delizone">Zone de livraison</label>
                  <select
                    name=""
                    id="delizone"
                    className="select select-div"
                    value={selecteddeliZone?.id || ""}
                    onChange={(e) => handleSelectZoneChange(e)}
                  >
                    {deliZone.map((zone, index) => (
                      <option value={zone.id} key={index}>
                        {zone.commune.commune +
                          " - " +
                          zone.city.ville +
                          " - " +
                          zone.country.pays}
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
                      <strong>{totalPrice} F CFA</strong> TTC avec livraison
                    </div>
                    <div className="price-without-deli">
                      <strong>
                        {totalPrice -
                          parseInt(selecteddeliZone?.montant.toString())}
                        {" F CFA"}
                      </strong>{" "}
                      TTC sans livraison
                    </div>
                    <button
                      className="btn first-chirld"
                      type="button"
                      onClick={() => console.log(JSON.stringify(order))}
                    >
                      TÉLÉCHARGER VOS FICHIERS ET COMMANDER
                    </button>
                    <button className="btn" type="submit">
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
                      <p
                        dangerouslySetInnerHTML={{ __html: text }}
                        key={index.toString()}
                      />
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
