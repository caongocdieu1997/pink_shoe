import React from "react";
import { Trash } from "../static/assets";
const CartList = ({ cart, onDelete, onChange, deletedArr }) => {
  return (
    <div className="cart">
      {cart.length === 0 && "Cart is Empty"}
      {cart.map((shoe) => {
        return (
          <div
            className={`cart__item ${
              deletedArr.includes(shoe.id) ? "delete" : ""
            }`}
            key={shoe.id}
          >
            <div
              className="cart__item__img"
              style={{ backgroundColor: shoe.color }}
            >
              <img src={shoe.image} alt="" />
            </div>
            <div className="cart__item__content">
              <div className="cart__item__name">{shoe.name}</div>
              <div className="cart__item__price">${shoe.price}</div>
              <div className="cart__item__options">
                <div className="quantity">
                  <div
                    className="quantity__minus"
                    onClick={() => onChange(shoe, -1)}
                  >
                    -
                  </div>
                  <div className="quantity__number">{shoe.quantity}</div>
                  <div
                    className="quantity__plus"
                    onClick={() => onChange(shoe, 1)}
                  >
                    +
                  </div>
                </div>
                <div className="trash" onClick={() => onDelete(shoe.id)}>
                  <img src={Trash} alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
