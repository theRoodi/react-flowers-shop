import React from "react";
import "./pagesStyles/catalog.scss"
import { GoodsCard } from "../ui/goods/goodsCard";
import { Bar } from "../ui/bar/bar";

export const Catalog = () => {
  let arr = Array(10).fill('');
  let content = arr.map((elem) => <GoodsCard />)
  return (
    <>
      <Bar />
      <div className="catalog">
        {content}
      </div>
    </>
  );
};
