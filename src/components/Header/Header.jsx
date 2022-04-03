import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Icons from 'assets/icons';
import Data from 'assets/data/Header.json';

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
              <div className="hd-main__logo">
                <Icons.EducationCap />
              </div>
              <div className="hd-main__text">{Data.education}</div>
            </Link>
            {/* Cộng đồng */}
            <Link to="/community" className="hd-main__item">
              <div className="hd-main__logo">
                <Icons.User />
              </div>
              <div className="hd-main__text">{Data.community}</div>
            </Link>
            {/* Sản thương mại */}
            <Link to="/" className="hd-main__item">
              <div className="hd-main__logo">
                <Icons.CartPlus />
              </div>
              <div className="hd-main__text">{Data.ecommerce}</div>
            </Link>
            {/* Dịch vụ */}
            <Link to="/services" className="hd-main__item">
              <div className="hd-main__logo">
                <Icons.PuzzlePiece />
              </div>
              <div className="hd-main__text">{Data.service}</div>
            </Link>
          </div>
          <div className="hd-right col-md-3">
            {/* Search */}
            <div className="hd-right__item">
              <Icons.MagnifyingGlass />
            </div>
            {/* BagShopping */}
            <div className="hd-right__item">
              <Icons.BagShopping />
            </div>
            {/* faUser */}
            <div className="hd-right__item">
              <Icons.User />
              <div className="user-box">
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
                  <div className="user-box-right">
                    {Data.user.storeManagement}
                  </div>
                </div>
                <div className="user-box__item">
                  <div className="user-box-left">
                    <Icons.AddressBook />
                  </div>
                  <div className="user-box-right">
                    {Data.user.webManagement}
                  </div>
                </div>
              </div>
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

export default Header;
