import React from "react";
import { Nike } from "../static/assets";

const Card = ({ cart = [], title, visiblePrice, children }) => {
  const pricePerShoe = cart.map((shoe) => {
    return shoe?.price * shoe?.quantity;
  });

  return (
    <div className="card">
      <div className="card__header">
        <img src={Nike} alt="" />
      </div>
      <div className="card__title">
        {title}
        {visiblePrice && (
          <div className="card__title__price">
            ${pricePerShoe.reduce((acc, price) => acc + price, 0).toFixed(2)}
          </div>
        )}
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
};

export default Card;
