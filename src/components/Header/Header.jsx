import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from 'components/Sidebar/Sidebar';
import Drawer from 'components/MuiDrawer/Drawer';

import './header.scss';
import Icons from 'assets/icons';
import Data from 'assets/data/Header.json';
import { toggleSearch } from 'actions/global';

const Header = () => {
  //HandleUser
  const [showUser, setShowUser] = useState(false);
  const openUserButton = (e) => {
    setShowUser(!showUser);
    e.stopPropagation();
  };
  useEffect(() => {
    const toggleUserButton = () => setShowUser(false);
    showUser && window.addEventListener('click', toggleUserButton);
    return () => window.removeEventListener('click', toggleUserButton);
  }, [showUser]);

  // HandleSearch
  const searchState = useSelector((state) => state.global.search);
  const dispatch = useDispatch();
  const toggleSearchButton = () => {
    const action = toggleSearch(searchState);
    dispatch(action);
  };
  // HandleBagShopping
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawerCart = (anchor, open) => (event) => {
    // if (
    //   event.type === 'keydown' &&
    //   (event.key === 'Tab' || event.key === 'Shift')
    // ) {
    //   return;
    // }
    setState({ ...state, [anchor]: open });
  };
  const renderDrawerCart = () => {
    return <div id="drawer-detail">Chưa có sản phẩm trong giỏ hàng</div>;
  };
  //handleBars
  const renderDrawerBars = () => {
    return (
      <div id="drawerbars">
        <div className="sidebar-heading">
          <img src="/img/header/uto logo image.png" alt="error png" />
          <div className="icon" onClick={toggleDrawerCart('left', false)}>
            <Icons.AngleLeft height="20px" />
          </div>
        </div>
        <div className="content">
          <Sidebar
            flatform="mobile"
            callback={toggleDrawerCart('left', false)}
          />
        </div>
      </div>
    );
  };
  //

  const [activeMainHeader, setActiveMainHeader] = useState(2);
  const [widthChange, setWidthChange] = useState(window.screen.width);
  useEffect(() => {
    const active = document.querySelector('.hd-main__item.active');
    const line = document.querySelector('.hd-main__line');
    if (active) {
      line.style.left = active.offsetLeft + 'px';
      line.style.width = active.offsetWidth + 'px';
    }
    const handleWidthChange = (e) => {
      setWidthChange(e.currentTarget.screen.width);
    };
    window.addEventListener('resize', handleWidthChange);
    return () => window.removeEventListener('resize', handleWidthChange);
  }, [activeMainHeader, widthChange]);
  const handleMainHeader = (number) => () => {
    setActiveMainHeader(number);
  };
  return (
    <header id="header">
      <Drawer
        arrow={['right']}
        callback={toggleDrawerCart}
        state={state}
        render={renderDrawerCart}
      />
      <Drawer
        arrow={['left']}
        callback={toggleDrawerCart}
        state={state}
        render={renderDrawerBars}
      />
      <div className="container">
        <div className="row">
          <div className="hd-left col-md-2 col">
            <Link to="/">
              <img
                className="hd-left__img col"
                src="/img/header/uto logo image.png"
                alt="error png"
              />
            </Link>
          </div>
          {widthChange >= 992 && <div className="col-md-1"></div>}
          <div className="hd-main col-md">
            {/* Đào tạo */}
            <NavLink
              to="/education"
              className="hd-main__item"
              onClick={handleMainHeader(0)}
            >
              <div className="hd-main__logo">
                <Icons.EducationCap />
              </div>
              <div className="hd-main__text">{Data.education}</div>
            </NavLink>
            {/* Cộng đồng */}
            <NavLink
              to="/community"
              className="hd-main__item "
              onClick={handleMainHeader(1)}
            >
              <div className="hd-main__logo">
                <Icons.Users />
              </div>
              <div className="hd-main__text">{Data.community}</div>
            </NavLink>
            {/* Sản thương mại */}
            <NavLink
              to="/"
              className="hd-main__item"
              onClick={handleMainHeader(2)}
            >
              <div className="hd-main__logo">
                <Icons.CartPlus />
              </div>
              <div className="hd-main__text">{Data.ecommerce}</div>
            </NavLink>
            {/* Dịch vụ */}
            <NavLink
              to="/services"
              className="hd-main__item"
              onClick={handleMainHeader(3)}
            >
              <div className="hd-main__logo">
                <Icons.PuzzlePiece />
              </div>
              <div className="hd-main__text">{Data.service}</div>
            </NavLink>
            <div className="hd-main__line"></div>
          </div>
          {widthChange >= 992 && <div className="col-md-1"></div>}
          <div className="hd-right col-md-2">
            {/* Search */}
            <div
              className={
                'hd-right__item search' + (searchState ? ' active' : '')
              }
              onClick={toggleSearchButton}
            >
              <Icons.MagnifyingGlass />
            </div>
            {/* BagShopping */}
            <div
              className={
                'hd-right__item bagShopping' + (state.right ? ' active' : '')
              }
              onClick={toggleDrawerCart('right', true)}
            >
              <Icons.BagShopping height={'16'} />
            </div>
            {/* faUser */}
            <div
              className={'hd-right__item' + (showUser ? ' active' : '')}
              onClick={openUserButton}
            >
              <Icons.User />
              {showUser && <UserBox />}
            </div>
          </div>
          <div className="hd-right-mb col">
            {/* Search */}
            <div className="hd-right-mb__item" onClick={toggleSearchButton}>
              <Icons.MagnifyingGlass />
            </div>
            {/* Shopping */}
            <div
              className="hd-right-mb__item"
              onClick={toggleDrawerCart('right', true)}
            >
              <Icons.BagShopping />
            </div>
            {/* User */}
            <div className="hd-right-mb__item" onClick={openUserButton}>
              <Icons.User />
              {showUser && <UserBox />}
            </div>
            {/* Menu */}
            <div
              className="hd-right-mb__item"
              onClick={toggleDrawerCart('left', true)}
            >
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
