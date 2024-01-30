"use client";
import { PathnameComponent } from "@/components";
import { Wrapper } from "@/reutilisables";
import "./printing.scss";
import React, { ReactNode } from "react";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Navigation from "./navigation";
import { ImpressCategoryProps } from "@/types";
import { impressCategories } from "@/constants";
import DefaultView from "./view/default_view";
import FlyserView from "./view/flyers_view";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const menuText: ImpressCategoryProps[] = impressCategories;

const Impression = () => {
  const [selectedMenu, setSelectedMenu] = useState<ImpressCategoryProps>(
    menuText[0]
  );
  const handleMenuChanges = (menu: ImpressCategoryProps) => {
    setSelectedMenu(menu);
  };

  const ViewSelector = ({
    selectedMenu,
  }: {
    selectedMenu: ImpressCategoryProps;
  }): ReactNode => {
    switch (selectedMenu.libelle) {
      case "Flyers & Leaflets":
        return <FlyserView />;
      case "Business Cards":
        return <>Business cards</>;
      case "Brochures":
        return <>Brochure</>;
      case "Roller Banners":
        return <>Roller Banners</>;
      case "Posters":
        return <>Posters</>;
      case "Stickers":
        return <>Stickers</>;
      case "Menus Restau":
        return <>Menu restau</>;
      case "Promotional":
        return <>Promotional</>;
      default:
        return <DefaultView />;
    }
  };

  return (
    <div className="printing">
      <Navigation setSelectedMenuItem={setSelectedMenu} />

      <Wrapper>
        <PathnameComponent />
      </Wrapper>
      {/* path name (fil d'ariane) */}

      {/* display switch selectMenu */}
      <ViewSelector selectedMenu={selectedMenu} />
    </div>
  );
};

export default Impression;
