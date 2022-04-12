import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BasicModal from 'components/MuiModal/Modal';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import FeaturedMember from 'components/FeaturedMember/FeaturedMember';
import Routers from 'router/Routers';
import RouterData from 'assets/data/routers.json';
import './layout.scss';
import { toggleSearch } from 'actions/global';

const Layout = () => {
  const [showFailurePage, setShowFailurePage] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let pathNumber = 0;
    Object.entries(RouterData).map((data) => {
      data[1] === location.pathname ? ++pathNumber : pathNumber;
      if (location.pathname.includes('/trading/')) ++pathNumber;
    });
    pathNumber > 0 ? setShowFailurePage(false) : setShowFailurePage(true);
  }, [location.pathname]);

  const stateSearch = useSelector((state) => state.global.search);
  const dispatch = useDispatch();
  const toggleSearchButton = () => {
    const action = toggleSearch(stateSearch);
    dispatch(action);
  };
  return (
    <>
      <BasicModal show={stateSearch} callback={toggleSearchButton} />

      {!showFailurePage && <Header />}
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
              <Routers />
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
