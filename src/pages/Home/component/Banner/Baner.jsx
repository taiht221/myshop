import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
Baner.propTypes = {};

function Baner(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="banner ">
          <img
            src="https://images.unsplash.com/photo-1533757840475-f82395967580?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="banner"
          />
          <div className="banner__text">
            <span>Chào mừng các bạn đến với</span>
            <b>cocoshop</b>
            <p>Trang thương mại điện tử</p>
            <div className="banner__btn">
              <Link to="/the-loai">
                <span>Tìm hiểu thêm</span>
              </Link>
              <Link to="/the-loai">
                <span>Shop now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baner;
