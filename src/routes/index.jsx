import React, { lazy, Suspense } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

// import NotFound from 'components/NotFound';
// import EducationPage from 'features/Home/Education';
// import HomePage from 'features/Home/Trading';
// import CommunityPage from 'features/Home/Community';
// import ServicesPage from 'features/Home/Services';
import ProductDetailPage from 'features/Home/Product/Detail';
import ContactPage from 'features/Home/Contact';
import NewsPage from 'features/Home/News';
import Loading from 'components/Loading';
import ProductCategoryPage from 'features/Home/Product/Category';

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('features/Home')), 300);
  });
});
const NotFound = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('components/NotFound')), 300);
  });
});
const HomePage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('features/Home/Trading')), 300);
  });
});
const EducationPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('features/Home/Education')), 300);
  });
});
const CommunityPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('features/Home/Community')), 300);
  });
});
const ServicesPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('features/Home/Services')), 300);
  });
});

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/education"
            element={
              <Suspense fallback={<Loading />}>
                <EducationPage />
              </Suspense>
            }
          />
          <Route
            path="/community"
            element={
              <Suspense fallback={<Loading />}>
                <CommunityPage />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<Loading />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <Suspense fallback={<Loading />}>
                <NewsPage />
              </Suspense>
            }
          />
          <Route
            path="/trading/:productSlug"
            element={
              <Suspense fallback={<Loading />}>
                <ProductCategoryPage />
              </Suspense>
            }
          />
          <Route
            path="/trading/:productSlug/:productId"
            element={
              <Suspense fallback={<Loading />}>
                <ProductDetailPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loading />}>
                <ContactPage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
