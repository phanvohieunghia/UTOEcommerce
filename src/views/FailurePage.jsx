import React from 'react';
import 'views/failurepage.scss';
const FailurePage = () => {
  return (
    <div className="failure-page">
      <div className="fp-container">
        <h1>Oops!</h1>
        <img src="/img/Failure/page_error.jpg" alt="error png" />
        <h3>Page not found</h3>
        <button>Return Home</button>
      </div>
    </div>
  );
};

export default FailurePage;
