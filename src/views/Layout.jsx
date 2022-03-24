import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import FeaturedMember from '../components/FeaturedMember/FeaturedMember'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main" style={{marginTop: "80px"}} >
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col">
              Content
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