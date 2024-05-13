import { BcardProps, FlyersProps, ProductLibelle } from "@/types";
import React, { ReactNode } from "react";
import Image from "next/image";
import "@/styles/impress_service_container_style.scss";
import Link from "next/link";

interface ImpressServiceContainerProps {
  service: FlyersProps | BcardProps;
}

export const ImpressServiceContainer: React.FC<
  ImpressServiceContainerProps
> = ({ service }) => {
  function getComponent(): ReactNode {
    const url = `/impression/${service.category.libelle.toLowerCase()}/${
      service.title
    }`;
    if (service.product === ProductLibelle.BUSINESS_CARD) {
      const bcard: BcardProps = service as BcardProps;
      // Obtenir un index aléatoire pour bcard.formats
      const randomIndex = Math.floor(Math.random() * bcard.formats.length);
      const randomFormat = bcard.formats[randomIndex];

      return (
        <div className="impress_service_container relative">
          <Link href={url}>
            {/* <Image src={bcard.cover} alt={bcard.title} className="img" /> */}
            <Image
              src={bcard.cover}
              alt={bcard.title}
              width={270}
              height={250}
              style={{ width: "270px", height: "250px" }}
              className=" max-w-[270px] w-full max-h-[250px] h-full  img"
            />

            <div className="bottom-text px-3">
              <h1>{bcard.title}</h1>
              <span>
                A partir de <strong>{randomFormat.price} F CFA</strong> les{" "}
                {randomFormat.libelle}
              </span>
            </div>
          </Link>
        </div>
      );
    }
    if (service.product === ProductLibelle.FLYER) {
      const flyer: FlyersProps = service as FlyersProps;

      return (
        <div className="impress_service_container relative">
          <a href={url}>
            {/* <Image src={flyer.cover} alt={flyer.title} className="img" /> */}
            <Image
              src={flyer.cover}
              alt={flyer.title}
              width={270}
              height={250}
              style={{ width: "270px", height: "250px" }}
              className=" max-w-[270px] w-full max-h-[250px] h-full img"
            />

            <div className="bottom-text px-3">
              <h1>{flyer.title}</h1>
              <span>
                A partir de <strong>{flyer.base_price} F CFA</strong> les{" "}
                {flyer.format}
              </span>
            </div>
          </a>
        </div>
      );
    }
  }
  return getComponent();
};
