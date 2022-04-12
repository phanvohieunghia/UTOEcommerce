import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Drawer from 'components/MuiDrawer/Drawer';
// import BasicModal from 'components/MuiModal/Modal';

import './header.scss';
import Icons from 'assets/icons';
import Data from 'assets/data/Header.json';
import { toggleSearch } from 'actions/global';

const Header = () => {
  const [showUser, setShowUser] = useState(false);
  const toggleUserButton = () => {
    setShowUser(!showUser);
  };
  const [showCart, setShowCart] = useState(false);
  const toggleCartButton = () => {
    setShowCart(!showCart);
  };
  // HandleSearch
  const searchState = useSelector((state) => state.global.search);
  const dispatch = useDispatch();
  const toggleSearchButton = () => {
    const action = toggleSearch(searchState);
    dispatch(action);
  };
  // HandleBagShopping
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  //

  const [activeMainHeader, setActiveMainHeader] = useState(2);
  const [widthChange, setWidthChange] = useState(window.screen.width);
  useEffect(() => {
    const active = document.querySelector('.hd-main__item.active');
    const line = document.querySelector('.hd-main__line');
    line.style.left = active.offsetLeft + 'px';
    line.style.width = active.offsetWidth + 'px';
    window.addEventListener('resize', function (e) {
      setWidthChange(e.currentTarget.screen.width);
    });
  }, [activeMainHeader, widthChange]);
  const handleMainHeader = (number) => () => {
    setActiveMainHeader(number);
  };
  return (
    <header id="header">
      <Drawer
        arrow={['left']}
        callback={toggleDrawer}
        state={state}
        setState={setState}
      />
      <div className="container">
        <div className="row">
          <Link className="hd-left col-md-2 col" to="/">
            <img
              className="hd-left__img col"
              src="/img/header/uto logo image.png"
              alt="error png"
            />
          </Link>
          {widthChange >= 992 && <div className="col-md-1"></div>}
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
                <Icons.Users />
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
          {widthChange >= 992 && <div className="col-md-1"></div>}
          <div className="hd-right col-md-2">
            {/* Search */}
            <div
              className={
                'hd-right__item search ' + (searchState ? 'active' : '')
              }
              onClick={toggleSearchButton}
            >
              <Icons.MagnifyingGlass />
            </div>
            {/* BagShopping */}
            <div
              className={
                'hd-right__item bagShopping ' + (showCart ? 'active' : '')
              }
              onClick={toggleDrawer('left', true)}
            >
              <Icons.BagShopping height={'16'} />
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
            <div className="hd-right-mb__item">
              <Icons.MagnifyingGlass />
            </div>
            {/* Shopping */}
            <div className="hd-right-mb__item">
              <Icons.BagShopping />
            </div>
            {/* User */}
            <div className="hd-right-mb__item">
              <Icons.User />
            </div>
            {/* Menu */}
            <div className="hd-right-mb__item">
              <Icons.Bars />
            </div>
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
