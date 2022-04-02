import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
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
            <Link to="/education" className="hd-main__item">
              <div className="hd-main__logo"></div>
              <div className="hd-main__text">Đào tạo</div>
            </Link>
            {/* Cộng đồng */}
            <Link to="/community" className="hd-main__item">
              <div className="hd-main__logo"></div>
              <div className="hd-main__text">Cộng đồng</div>
            </Link>
            {/* Sản thương mại */}
            <Link to="/" className="hd-main__item">
              <div className="hd-main__logo"></div>
              <div className="hd-main__text">Sản thương mại</div>
            </Link>
            {/* Dịch vụ */}
            <Link to="/services" className="hd-main__item">
              <div className="hd-main__logo"></div>
              <div className="hd-main__text">Dịch vụ</div>
            </Link>
          </div>
          <div className="hd-right col-md-3">
            {/* Search */}
            <div className="hd-right__item"></div>
            {/* ShoppingBag */}
            <div className="hd-right__item"></div>
            {/* faUser */}
            <div className="hd-right__item"></div>
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

export default Header;
