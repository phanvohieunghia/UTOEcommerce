import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./item.scss";
const Item1 = ({ img, name, price, address }) => {
  const restPrice = price % 1000;
  return (
    <div className="item1">
      <div className="item1__img">
        <img src={`/img/product/${img}.png`} alt="error png" />
      </div>
      <div className="item1__content">
        <div className="item1__name">{name}</div>
        <div className="item1__price">
          {Math.floor(price / 1000)}.
          {restPrice > 99
            ? restPrice + " "
            : restPrice > 9
            ? "0" + restPrice + " "
            : "00" + restPrice + " "}
          <span>đ</span>
        </div>
        <div className="item1__footer">
          <div className="item1__footer-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span>(0)</span>
          </div>
          <div className="item1__footer-address">{address}</div>
        </div>
      </div>
    </div>
  );
};
const Item2 = () => {};
const Item = () => {
  Item1, Item2;
};

export default Item;
