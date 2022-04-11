import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import FeaturedMember from 'components/FeaturedMember/FeaturedMember';
import Routers from '../router/Routers';
import RouterData from 'assets/data/routers.json';
import './layout.scss';

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

  return (
    <>
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
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  bottom: '0',
                  left: '0',
                  right: '-17px',
                  overflowY: 'scroll',
                }}
              >
                <Routers />
              </div>
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
