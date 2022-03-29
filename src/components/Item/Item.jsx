import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './item.scss';

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
            ? restPrice + ' '
            : restPrice > 9
            ? '0' + restPrice + ' '
            : '00' + restPrice + ' '}
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
const Item2 = ({ img, name, lecturer, discount, price }) => {
  // console.log(discount);
  return (
    <div className="item2">
      <div className="item2__img">
        <img
          src={'/img/Education/course/' + img + '.jpg'}
          alt="error png"
        />
      </div>
      <div className="item2__content">
        <div className="item2__name">{name}</div>
        <div className="item2__lecturer">{lecturer}</div>
        <div className="item2__price">
          {discount <= 0 ? (
            ''
          ) : (
            <span>
              <FormatPrice price={discount} />
              <sup>đ</sup>
            </span>
          )}
          <FormatPrice price={price} />
          <sup>đ</sup>
        </div>
      </div>
    </div>
  );
};
const Item3 = ({ img, name, description }) => {
  return (
    <div className="item3">
      <div className="item3__img">
        <img
          src={'/img/Education/reason/' + img + '.jpg'}
          alt="error png"
        />
      </div>
      <div className="item3__name">{name}</div>
      <div className="item3__description">{description}</div>
    </div>
  );
};

const FormatPrice = ({ price = 0 }) => {
  const millionPrice = Math.floor(price / 1000000);
  const thousandPrice = Math.floor(
    (price - millionPrice * 1000000) / 1000,
  );
  const unitPrice = price % 1000;
  const group = (number, isPreGroup = false, isUnit = false) => {
    console.log(number, '@');
    return isPreGroup
      ? number > 99
        ? number + (!isUnit ? '.' : '')
        : number > 9
        ? '0' + number + (!isUnit ? '.' : '')
        : number > 0
        ? '00' + number + (!isUnit ? '.' : '')
        : '000' + (!isUnit ? '.' : '')
      : Boolean(number)
      ? number + (!isUnit ? '.' : '')
      : '';
  };
  return `${group(millionPrice)}${group(
    thousandPrice,
    price > 1000000,
  )}${group(unitPrice, price > 1000, true)}`;
};
const Items = {
  Item1,
  Item2,
  Item3,
};

export default Items;
