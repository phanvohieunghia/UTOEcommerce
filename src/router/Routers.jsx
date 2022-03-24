import React from 'react'
import { Routes, Route } from "react-router-dom";

import HomePage from '../views/HomePage'
import TechPage from '../views/TechPage'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tech" element={<TechPage />} />
    </Routes>
  )
}

export default Routers
