import React from "react";
import { Catalog } from "./catalog";
import { SelectedFlower } from "../selected-flower/selected-flower";

export const Shop = () => {
  return (
    <section
      id="shop"
      className="shop"
    >
      <div className="shop__category">This is SHOP</div>
      <Catalog />
      <SelectedFlower />
    </section>
  );
};
