import React from "react";

import star from "../../assets/svg/star.svg";
import flower from "../../assets/img/selected-flower/flower.png";

import "./selected-flower.scss";

export const SelectedFlower = () => {
  return (
    <section className="selected-flower">
      <div className="container">
        <div className="selected-flower__wrapper">
          <div className="selected-flower__img">
            <img
              src={flower}
              alt="flower"
              width={356}
              height={326}
            />
          </div>
          <div className="selected-flower__description">
            <h6 className="title-h6">Sun flower</h6>
            <p className="selected-flower__text">
              Make every day brighter with our abundant bouquet of fresh
              sunflowers. These radiant, long-lasting blooms bring that
              just-picked-from-the-meadow feeling to birthdays, get well wishes,
              or any day you want to make someone you care about smile.
            </p>

            <div className="selected-flower__rating rating-flower">
              <div className="rating-flower__stars">
                <img
                  src={star}
                  alt="star"
                />
                <span> 4.5</span>/5
              </div>
              <div className="rating-flower__count">
                (<span>101</span> people opinion)
              </div>
            </div>

            <div className="selected-flower__price price-flower">
              <div className="price-flower__price">
                <span>100</span>$ / each
              </div>
              <div className="price-flower__buttons">
                <button type="button">Add to favorite</button>
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
