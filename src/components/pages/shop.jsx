import React from "react";
import { Catalog } from "./catalog";
import { SelectedFlower } from "../selected-flower/selected-flower";

export const Shop = () => {
  return (
    <section id="shop" className="shop"> 
      <Catalog />
      <SelectedFlower />
    </section>
  );
};
