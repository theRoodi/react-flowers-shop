import React from "react";
import "./home.scss";
import { Post } from "./Post/post";
import { Footer } from "../../Footer/footer";
import { GoodsCard } from "../../ui/goods/goodsCard";

export const Home = () => {
  return (
    <div className="container">
      <div>Best selers</div>
      <div className="row">
        <div className="col-3">
          <GoodsCard />
        </div>
        <div className="col-3">
          <GoodsCard />
        </div>
        <div className="col-3">
          <GoodsCard />
        </div>
        <div className="col-3">
          <GoodsCard />
        </div>
      </div>
      <div>Latest posts</div>
      <div className="row">
        <div className="col-4">
          <Post />
        </div>
        <div className="col-4">post</div>
        <div className="col-4">post</div>
      </div>
      <div>Comments</div>
      <div className="row">
        <div className="col-4">Comment</div>
        <div className="col-4">Comment</div>
        <div className="col-4">Comment</div>
      </div>
      <Footer />
    </div>
  );
};
