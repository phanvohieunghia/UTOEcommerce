import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BasicModal from 'components/MuiModal/Modal';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import FeaturedMember from 'components/FeaturedMember/FeaturedMember';
import './Home.scss';
import { toggleSearch } from 'actions/global';

const Layout = () => {
  const stateSearch = useSelector((state) => state.global.search);
  const dispatch = useDispatch();
  const toggleSearchButton = () => {
    const action = toggleSearch(stateSearch);
    dispatch(action);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    const x = document.querySelector('#main .main-container');
    x.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return (
    <>
      <BasicModal show={stateSearch} callback={toggleSearchButton} />
      <Header />
      <div id="main">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div
              className="col-md-8 col-12 main-container"
              style={{
                overflowY: 'scroll',
                height: '100%',
              }}
            >
              <Outlet />
            </div>
            <div className="col-2">
              <FeaturedMember />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
