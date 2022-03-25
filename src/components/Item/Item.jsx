import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./item.scss";
const Item = ({ img, name, price, address }) => {
  const restPrice = price % 1000;
  return (
    <div className="item">
      <div className="item__img">
        <img src={`/img/product/${img}.png`} alt="error png" />
      </div>
      <div className="item__content">
        <div className="item__name">{name}</div>
        <div className="item__price">
          {Math.floor(price / 1000)}.
          {restPrice > 99
            ? restPrice + " "
            : restPrice > 9
            ? "0" + restPrice + " "
            : "00" + restPrice + " "}
          <span>đ</span>
        </div>
        <div className="item__footer">
          <div className="item__footer-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span>(0)</span>
          </div>
          <div className="item__footer-address">{address}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
