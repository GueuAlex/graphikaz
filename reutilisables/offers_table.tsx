import React, { useContext, useState } from "react";
import "@/styles/offers_table_style.scss";
import "@/styles/uderline_style.scss";
import {
  ContextSelectionSetters,
  ContextServiceProps,
  ExecutionDeadlineProps,
  GraphicServItemProps,
  GraphicServOptionalItemProps,
  GraphicServPackType,
  GraphicServProps,
  PriceData,
  PriceFunctions,
} from "@/types";
import { LocalContext } from "./local_context";
import { calculateItemsTotalPrice } from "@/functions/calcul_graphic_serv_item_total_price";

interface OffersTableProps {
  service: GraphicServProps;
}

export const OffersTable: React.FC<OffersTableProps> = ({ service }) => {
  // Utilisation du contexte local
  const {
    basicTotalPrice,

    standardTotalPrice,

    premiumTotalPrice,
  } = useContext(LocalContext) as PriceData;

  const totalPrice: number[] = [
    basicTotalPrice,
    standardTotalPrice,
    premiumTotalPrice,
  ];

  const [checkedState, setCheckedState] = useState({
    basic: false,
    standard: false,
    premium: false,
  });

  return (
    <div className="offers-container" id="offer_table">
      <div className="offers-head">
        <h2 className=" py-3">Comparer les offres</h2>
      </div>

      <div className="offers-table">
        <table>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr className="package-type">
              <th className="package-row-label">Offres</th>
              {service.packs.map((pack, index) => (
                <th className="package-type-price" key={index}>
                  <div className="price-wrapper">
                    <p className="price">{totalPrice[index]}&nbsp;F CFA</p>
                  </div>
                  <b className="type">{pack.libelle.toLowerCase()}</b>

                  <b className="title">{pack.sub_title}</b>
                </th>
              ))}
            </tr>
            <tr className="description">
              <td className="package-row-label"></td>
              {service.packs.map((pack, index) => (
                <td key={index}>{pack.description}</td>
              ))}
            </tr>
            {service.items.map((item, index) => {
              return <OfferTr offer={item} key={index} index={index} />;
            })}

            {/* offres optionel */}
            {service.optional_items.length > 0 && (
              <tr className="customisation-label">
                <th colSpan={4} className="customisation-title">
                  <div>
                    <p>
                      Personnaliser votre forfait <span>Basique</span>,{" "}
                      <span>Standard</span> ou <span>Premium</span>
                    </p>
                    <small>
                      Pour une meilleure précision des résultats, nous suggérons
                      d'explorer les options présentées ci-dessous
                    </small>
                  </div>
                </th>
              </tr>
            )}
            {service.optional_items.map((option, index) => (
              <OptionalOfferTr option={option} key={index} />
            ))}

            {/* delai de livraison */}

            <tr className="customisation-label">
              <th colSpan={4} className="customisation-title">
                <div>
                  <p>Préférence de livraison</p>
                  <small>
                    Veuillez nous informer de toute préférence ou préoccupation
                    concernant la réalisation et/ou la livraison de votre
                    commande.
                  </small>
                </div>
              </th>
            </tr>
            <tr className="mt-4 onption-tr">
              <td className="package-row-label">
                <div className="">
                  <span className="HsyURQF">Delai de livraison</span>
                </div>
              </td>
              <td className={`check-icon cell basic-td`}>
                <div className="flex flex-col gap-2">
                  <RadioComponent
                    name="basic"
                    delay={service.packs[0].normal_execution_deadline}
                    /* isChecked={checkedState.basic} */
                    /* updatePrice={setBasicTotalPrice} */
                    /*  updateChecked={() =>
                      setCheckedState({
                        ...checkedState,
                        basic: !checkedState.basic,
                      })
                    } */
                    currentPrice={basicTotalPrice}
                  />
                  {service.packs[0].express_execution_deadline.map(
                    (delay, index) => (
                      <RadioComponent
                        key={index}
                        name="basic"
                        delay={delay}
                        /* isChecked={checkedState.basic} */
                        currentPrice={basicTotalPrice}
                        /*  updateChecked={() =>
                          setCheckedState({
                            ...checkedState,
                            basic: !checkedState.basic,
                          })
                        } */
                      />
                    )
                  )}
                </div>
              </td>
              <td className={`check-icon cell standard-td`}>
                <div className="flex flex-col gap-2">
                  <RadioComponent
                    name="standard"
                    delay={service.packs[1].normal_execution_deadline}
                    /* isChecked={checkedState.standard} */
                    currentPrice={standardTotalPrice}
                    /* updateChecked={() =>
                      setCheckedState({
                        ...checkedState,
                        standard: !checkedState.standard,
                      })
                    } */
                  />
                  {service.packs[1].express_execution_deadline.map(
                    (delay, index) => (
                      <RadioComponent
                        key={index}
                        name="standard"
                        delay={delay}
                        /* isChecked={checkedState.standard} */
                        currentPrice={standardTotalPrice}
                        /*   updateChecked={() =>
                          setCheckedState({
                            ...checkedState,
                            standard: !checkedState.standard,
                          })
                        } */
                      />
                    )
                  )}
                </div>
              </td>
              <td className={`check-icon cell premium-td`}>
                <div className="flex flex-col gap-2">
                  <RadioComponent
                    name="premium"
                    delay={service.packs[2].normal_execution_deadline}
                    /* isChecked={checkedState.premium} */
                    currentPrice={premiumTotalPrice}
                    /*  updateChecked={() =>
                      setCheckedState({
                        ...checkedState,
                        premium: !checkedState.premium,
                      })
                    } */
                  />
                  {service.packs[2].express_execution_deadline.map(
                    (delay, index) => (
                      <RadioComponent
                        key={index}
                        name="premium"
                        delay={delay}
                        /* isChecked={checkedState.premium} */
                        currentPrice={premiumTotalPrice}
                        /*  updateChecked={() =>
                          setCheckedState({
                            ...checkedState,
                            premium: !checkedState.premium,
                          })
                        } */
                      />
                    )
                  )}
                </div>
              </td>
            </tr>
            {/* showing totals at bottom */}
            <tr className="mt-4 onption-tr last-child">
              <td className="package-row-label">
                <div className="">
                  <span className="HsyURQF">TOTAL</span>
                </div>
              </td>
              <td className={`check-icon cell `}>
                <span className="option-price ">{basicTotalPrice} F CFA</span>
              </td>
              <td className={`check-icon cell `}>
                <span className="option-price ">
                  {standardTotalPrice} F CFA
                </span>
              </td>
              <td className={`check-icon cell `}>
                <span className="option-price">{premiumTotalPrice} F CFA</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface RadioComponentProps {
  name: string;

  delay: ExecutionDeadlineProps;
  /*  isChecked: boolean; */
  currentPrice: number;
  /*  updateChecked: React.Dispatch<React.SetStateAction<boolean>>;  */ // Fonction de
}

const RadioComponent: React.FC<RadioComponentProps> = ({
  delay,
  /* isChecked, */
  currentPrice,
  /*  updateChecked, */
  name,
}) => {
  const {
    setPremiumTotalPrice,
    setStandardTotalPrice,
    setBasicTotalPrice,
    test_service,
    setSelectedDeliveryDelay,
  } = useContext(LocalContext) as PriceData &
    PriceFunctions &
    ContextServiceProps &
    ContextSelectionSetters;
  // Gestionnaire d'événements pour la sélection du bouton radio
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //let selectedPrice = currentPrice;
    const isChecked = event.target.checked;
    let selectedPrice = parseFloat(event.target.value);
    console.log("selectedPrice :" + selectedPrice);
    console.log("currentPrice :" + currentPrice);

    //get initial prices
    const initialBPrice = calculateItemsTotalPrice(
      test_service,
      GraphicServPackType.BASIQUE
    );
    const initialSPrice =
      initialBPrice +
      calculateItemsTotalPrice(test_service, GraphicServPackType.STANDARD);

    const initialPPrice =
      initialSPrice +
      calculateItemsTotalPrice(test_service, GraphicServPackType.PREMIUM);
    console.log("initialBPrice ..." + initialBPrice);
    console.log("initialSPrice ..." + initialSPrice);
    console.log("initialPPrice ..." + initialPPrice);

    // mettre a jour le delai de livraison dans le context
    setSelectedDeliveryDelay(delay);

    // Mettre à jour le prix total en fonction du nom du pack
    if (name === "basic" && isChecked) {
      setBasicTotalPrice(initialBPrice + selectedPrice);
    } else if (name === "standard") {
      setStandardTotalPrice(initialSPrice + selectedPrice);
    } else if (name === "premium") {
      setPremiumTotalPrice(initialPPrice + selectedPrice);
    }
  };

  return (
    <div className="flex  justify-around items-center gap-2">
      <input
        type="radio"
        name={name}
        id=""
        /* checked={isChecked} */
        value={delay.price}
        onChange={handleRadioChange}
      />
      <span className=" text-start">
        <span>
          {delay.number_of_day} {delay.number_of_day > 1 ? "jours" : "jour"}
          <span className="option-price">{` (+ ${delay.price} F CFA)`}</span>
        </span>{" "}
      </span>
    </div>
  );
};

interface OptionalOfferTrProps {
  option: GraphicServOptionalItemProps;
}

const OptionalOfferTr: React.FC<OptionalOfferTrProps> = ({ option }) => {
  const {
    setPremiumTotalPrice,
    setStandardTotalPrice,
    setBasicTotalPrice,
    basicTotalPrice,
    standardTotalPrice,
    premiumTotalPrice,
    setSeletedOptionalItems,
  } = useContext(LocalContext) as PriceData &
    PriceFunctions &
    ContextServiceProps &
    ContextSelectionSetters;

  // Fonction utilitaire pour mettre à jour les éléments sélectionnés
  const updateSelectedItems = (
    packType: GraphicServPackType,
    option: GraphicServOptionalItemProps,
    isChecked: boolean
  ) => {
    setSeletedOptionalItems((prevState) => {
      if (!prevState) {
        return {
          selectedOn: packType,
          optionalItems: isChecked ? [option] : [],
        };
      }

      let updatedItems = prevState.optionalItems.filter(
        (item) => item.id !== option.id
      );

      if (isChecked) {
        updatedItems.push(option);
      }

      return {
        ...prevState,
        optionalItems: updatedItems,
      };
    });
  };

  // Gestionnaire d'événements pour la sélection du bouton radio
  const handleBCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //let selectedPrice = currentPrice;
    const isChecked = event.target.checked;
    let selectedPrice = parseFloat(event.target.value);

    // effectuer la mise a jour dans cette fonction

    if (isChecked) {
      setBasicTotalPrice(basicTotalPrice + selectedPrice);
    } else {
      setBasicTotalPrice(basicTotalPrice - selectedPrice);
    }
    updateSelectedItems(GraphicServPackType.BASIQUE, option, isChecked);
  };

  const handleSCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //let selectedPrice = currentPrice;
    const isChecked = event.target.checked;
    let selectedPrice = parseFloat(event.target.value);

    // Mettre à jour le prix total en fonction du nom du pack
    if (isChecked) {
      setStandardTotalPrice(standardTotalPrice + selectedPrice);
    } else {
      setStandardTotalPrice(standardTotalPrice - selectedPrice);
    }
    updateSelectedItems(GraphicServPackType.STANDARD, option, isChecked);
  };

  const handlePCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //let selectedPrice = currentPrice;
    const isChecked = event.target.checked;
    let selectedPrice = parseFloat(event.target.value);

    // Mettre à jour le prix total en fonction du nom du pack
    if (isChecked) {
      setPremiumTotalPrice(premiumTotalPrice + selectedPrice);
    } else {
      setPremiumTotalPrice(premiumTotalPrice - selectedPrice);
    }
    updateSelectedItems(GraphicServPackType.PREMIUM, option, isChecked);
  };

  return (
    <tr className="mt-4 onption-tr">
      <td className="package-row-label">
        <div className="">
          <span className="HsyURQF">
            {option.libelle}{" "}
            <span className="option-price">{` (+ ${option.price} F CFA)`}</span>
          </span>
        </div>
      </td>
      <td className={`check-icon cell `}>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={handleBCheckboxChange}
          value={option.price}
        />
      </td>
      <td className={`check-icon cell `}>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={handleSCheckboxChange}
          value={option.price}
        />
      </td>
      <td className={`check-icon cell `}>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={handlePCheckboxChange}
          value={option.price}
        />
      </td>
    </tr>
  );
};

interface OfferTrProps {
  offer: GraphicServItemProps;
  index: number;
}

const OfferTr: React.FC<OfferTrProps> = ({ offer }) => {
  function isBasic(): string {
    if (offer.type !== GraphicServPackType.BASIQUE) {
      return "icon-gray-color";
    }
    return "";
  }
  function isStandard(): string {
    if (
      offer.type !== GraphicServPackType.BASIQUE &&
      offer.type !== GraphicServPackType.STANDARD
    ) {
      return "icon-gray-color";
    }
    return "";
  }
  if (offer.value) {
    return (
      <tr className="mt-4">
        <td className="package-row-label">
          <div className="">
            <span className="HsyURQF">{offer.libelle}</span>
          </div>
        </td>
        <td className={`check-icon cell`}>
          {/* <i className="bi bi-check2"></i> zz */}
          <span>{offer.value[0].value}</span>
        </td>
        <td className={`check-icon cell`}>
          {/* <i className="bi bi-check2"></i> zz */}
          <span>{offer.value[1].value}</span>
        </td>
        <td className={`check-icon cell`}>
          {/* <i className="bi bi-check2"></i> zz */}
          <span>{offer.value[2].value}</span>
        </td>
      </tr>
    );
  }
  return (
    <tr className="mt-4">
      <td className="package-row-label">
        <div className="">
          <span className="HsyURQF">{offer.libelle}</span>
        </div>
      </td>
      <td className={`check-icon cell ${isBasic()}`}>
        <i className="bi bi-check2"></i>
      </td>
      <td className={`check-icon cell ${isStandard()}`}>
        <i className="bi bi-check2"></i>
      </td>
      <td className={`check-icon cell `}>
        <i className="bi bi-check2"></i>
      </td>
    </tr>
  );
};
