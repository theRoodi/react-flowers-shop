import React from "react";
import "./post.scss";
import postImg from "../../../../assets/img/post-img/postImg.png";
import ava from "../../../../assets/img/ava/Ava.png";

export const Post = () => {
  return (
    <div className="container">
      <header>
        <div className="row">
          <div className="col-6">
            <img src={ava} alt="" /> name
          </div>
          <div className="col-6">date</div>
        </div>
      </header>
      <div>
        <img src={postImg} alt="" />
      </div>
      <div>
        <h7>Best flowers for inside home</h7>
        <p>
          All the flowers are best for your lovly house just get the one you
          love the most 😊
        </p>
        <div className="row">
          <div className="col-6">icon name</div>
          <div className="col-6">Read more</div>
        </div>
      </div>
    </div>
  );
};
