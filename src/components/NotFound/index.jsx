import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const FailurePage = () => {
  return (
    <div className="failure-page">
      <div className="container">
        <h1>Oops!</h1>
        <img src="/img/Failure/page_error.jpg" alt="error png" />
        <h3>Page not found</h3>
        <Link className="btn" to="/">
          Return home
        </Link>
      </div>
    </div>
  );
};

export default FailurePage;
