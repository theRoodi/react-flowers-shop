import React from "react";

import { SelectedFlower } from "../selected-flower/selected-flower";

export const Shop = () => {
  return (
    <section
      id="shop"
      className="shop"
    >
      <div className="shop__category">This is SHOP</div>

      <SelectedFlower />
    </section>
  );
};
