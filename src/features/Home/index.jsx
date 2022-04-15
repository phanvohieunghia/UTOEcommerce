import React from 'react';
import { Outlet } from 'react-router-dom';
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
              className="col-md-8 col-12"
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
