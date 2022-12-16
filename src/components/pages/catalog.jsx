import React from "react";

import { GoodsCard } from "../ui/goods/goodsCard";

export const Catalog = () => {
  return (
    <section
      id="shop"
      className="shop"
    >
      <div className="shop__category">This is SHOP</div>

      <GoodsCard />
    </section>
  );
};
