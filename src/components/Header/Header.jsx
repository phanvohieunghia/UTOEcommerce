import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'components/MuiDrawer/Drawer';
import BasicModal from 'components/MuiModal/Modal';

import './header.scss';
import Icons from 'assets/icons';
import Data from 'assets/data/Header.json';

const Header = () => {
  const [showUser, setShowUser] = useState(false);
  const toggleUserButton = () => {
    setShowUser(!showUser);
  };
  const [showCart, setShowCart] = useState(false);
  const toggleCartButton = () => {
    setShowCart(!showCart);
  };
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearchButton = () => {
    setShowSearch(!showSearch);
  };
  const [activeMainHeader, setActiveMainHeader] = useState(2);
  useEffect(() => {
    const active = document.querySelector('.hd-main__item.active');
    const line = document.querySelector('.hd-main__line');
    line.style.left = active.offsetLeft + 'px';
    line.style.width = active.offsetWidth + 'px';
  }, [activeMainHeader]);
  const handleMainHeader = (number) => () => {
    setActiveMainHeader(number);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="hd-left col-md-2 col">
            <img
              className="hd-left__img col"
              src="/img/header/uto logo image.png"
              alt="error png"
            />
          </div>
          <div className="hd-main col-md">
            {/* Đào tạo */}
            <Link
              to="/education"
              className={
                'hd-main__item ' + (activeMainHeader === 0 ? 'active' : '')
              }
              onClick={handleMainHeader(0)}
            >
              <div className="hd-main__logo">
                <Icons.EducationCap />
              </div>
              <div className="hd-main__text">{Data.education}</div>
            </Link>
            {/* Cộng đồng */}
            <Link
              to="/community"
              className={
                'hd-main__item ' + (activeMainHeader === 1 ? 'active' : '')
              }
              onClick={handleMainHeader(1)}
            >
              <div className="hd-main__logo">
                <Icons.User />
              </div>
              <div className="hd-main__text">{Data.community}</div>
            </Link>
            {/* Sản thương mại */}
            <Link
              to="/"
              className={
                'hd-main__item ' + (activeMainHeader === 2 ? 'active' : '')
              }
              onClick={handleMainHeader(2)}
            >
              <div className="hd-main__logo">
                <Icons.CartPlus />
              </div>
              <div className="hd-main__text">{Data.ecommerce}</div>
            </Link>
            {/* Dịch vụ */}
            <Link
              to="/services"
              className={
                'hd-main__item ' + (activeMainHeader === 3 ? 'active' : '')
              }
              onClick={handleMainHeader(3)}
            >
              <div className="hd-main__logo">
                <Icons.PuzzlePiece />
              </div>
              <div className="hd-main__text">{Data.service}</div>
            </Link>
            <div className="hd-main__line"></div>
          </div>
          <div className="hd-right col-md-2">
            {/* Search */}
            <div
              className={
                'hd-right__item search ' + (showSearch ? 'active' : '')
              }
              onClick={toggleSearchButton}
            >
              <Icons.MagnifyingGlass />
              {showSearch && <BasicModal show={true} />}
            </div>
            {/* BagShopping */}
            <div
              className={
                'hd-right__item bagShopping ' + (showCart ? 'active' : '')
              }
              onClick={toggleCartButton}
            >
              {/* {showCart && <Drawer show={showCart} />} */}
              <Drawer />
            </div>
            {/* faUser */}
            <div
              className={'hd-right__item ' + (showUser ? 'active' : '')}
              onClick={toggleUserButton}
            >
              <Icons.User />
              {showUser && <UserBox />}
            </div>
          </div>
          <div className="hd-right-mb col">
            {/* Search */}
            <div className="hd-right-mb__item"></div>
            {/* Shopping */}
            <div className="hd-right-mb__item"></div>
            {/* User */}
            <div className="hd-right-mb__item"></div>
            {/* Menu */}
            <div className="hd-right-mb__item"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
const UserBox = () => {
  const handleProgation = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="user-box" onClick={handleProgation}>
      <div className="user-box__item">
        <div className="user-box-left">
          <Icons.User />
        </div>
        <div className="user-box-right">{Data.user.login}</div>
      </div>
      <div className="user-box__item">
        <div className="user-box-left">
          <Icons.Building />
        </div>
        <div className="user-box-right">{Data.user.storeManagement}</div>
      </div>
      <div className="user-box__item">
        <div className="user-box-left">
          <Icons.AddressBook />
        </div>
        <div className="user-box-right">{Data.user.webManagement}</div>
      </div>
    </div>
  );
};

export default Header;
