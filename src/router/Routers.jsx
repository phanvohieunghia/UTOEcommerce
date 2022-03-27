import React from 'react'
import { Routes, Route } from "react-router-dom";

import HomePage from '../views/HomePage'
import EducationPage from '../views/EducationPage'
import ServicesPage from '../views/ServicesPage'
import CommunityPage from '../views/CommunityPage'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  )
}

export default Routers
