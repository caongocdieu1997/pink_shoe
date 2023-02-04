import React from "react";
import data from "../static/data/shoes.json";
import { Check } from "../static/assets";
const ShoeList = ({ cart, onAdd }) => {
  return (
    <>
      {data.shoes.map((item) => {
        const isAdded = cart.map((x) => x.id).includes(item.id);
        return (
          <div className="shoes" key={item.id}>
            <div className="shoes__img" style={{ backgroundColor: item.color }}>
              <img src={item.image} alt="" />
            </div>
            <div className="shoes__title">{item.name}</div>
            <div className="shoes__content">{item.description}</div>
            <div className="shoes__options">
              <div className="shoes__options__prices">${item.price}</div>
              <div
                className={`shoes__options__add-cart ${
                  !isAdded ? "" : "checked"
                }`}
                onClick={() => {
                  onAdd(item, item.id);
                }}
              >
                {!isAdded ? <p>Add To Card</p> : <img src={Check} alt=""></img>}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShoeList;
