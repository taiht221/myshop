import React from 'react';
import './style.scss';

LoadingCricle.propTypes = {};

function LoadingCricle() {
  return (
    <div className="loading-screen">
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default LoadingCricle;
