import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import FeaturedMember from '../components/FeaturedMember/FeaturedMember';
import Routers from '../router/Routers';

const Layout = () => {
  return (
    <>
      <Header />
      <div
        className="main"
        style={{
          marginTop: '73px',
          position: 'fixed',
          left: 0,
          right: 0,
          height: '100vh',
        }}
      >
        <div className="container" style={{ height: '100%' }}>
          <div className="row" style={{ height: '100%' }}>
            <div className="col-2">
              <Sidebar />
            </div>
            <div
              className="col-8"
              style={{ height: '100%', overflowY: 'scroll' }}
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
