import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import FeaturedMember from '../components/FeaturedMember/FeaturedMember'
import Routers from '../router/Routers'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main" style={{marginTop: "73px"}} >
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-8">
              <Routers />
            </div>
            <div className="col-2">
              <FeaturedMember />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout