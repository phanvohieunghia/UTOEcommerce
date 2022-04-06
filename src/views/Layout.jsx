import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import FeaturedMember from 'components/FeaturedMember/FeaturedMember';
import Routers from '../router/Routers';
import RouterData from 'assets/data/routers.json';

const Layout = () => {
  const [showFailurePage, setShowFailurePage] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let pathNumber = 0;
    Object.entries(RouterData).map((data) => {
      data[1] === location.pathname ? ++pathNumber : pathNumber;
    });
    pathNumber > 0 ? setShowFailurePage(false) : setShowFailurePage(true);
    console.log(showFailurePage);
  }, [location.pathname]);

  return (
    <>
      {!showFailurePage && <Header />}
      <div
        className="main"
        style={{
          marginTop: '65px',
          position: 'fixed',
          left: 0,
          right: 0,
          height: 'calc(100vh - 65px)',
        }}
      >
        <div className="container" style={{ height: '100%' }}>
          <div className="row" style={{ height: '100%' }}>
            <div className="col-2">
              <Sidebar />
            </div>
            <div
              className="col-8"
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
