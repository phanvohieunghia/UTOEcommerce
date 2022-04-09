import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'views/HomePage';
import EducationPage from 'views/EducationPage';
import ServicesPage from 'views/ServicesPage';
import CommunityPage from 'views/CommunityPage';
import NewsPage from 'views/NewsPage';
import ContactPage from 'views/ContactPage';
import FailurePage from 'views/FailurePage';
import ProductDetailPage from 'views/ProductDetailPage';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/education" exact element={<EducationPage />} />
      <Route path="/community" exact element={<CommunityPage />} />
      <Route path="/services" exact element={<ServicesPage />} />
      <Route path="/news" exact element={<NewsPage />} />
      <Route path="/trading/:productId" element={<ProductDetailPage />} />
      <Route path="/contact" exact element={<ContactPage />} />
      <Route path="*" element={<FailurePage />} />
    </Routes>
  );
};

export default Routers;
