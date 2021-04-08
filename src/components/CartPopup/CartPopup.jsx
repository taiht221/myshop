import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const CardPopUp = document.querySelector('#cart-popup');

export default function CartPopup() {
  return ReactDOM.createPortal(
    <div className="cart-popup" style={{ display: 'none' }}>
      <div className="checkout__right">
        <div className="order-sum">
          <h2 className="title">Order Summary</h2>
          <div className="required">
            <span>Price can change depending on shipping method and taxes of your state.</span>
          </div>
          <div className="close">
            <span>
              Close <i>×</i>
            </span>
          </div>
        </div>
        <div className="order-card__wrap"></div>
        <div className="total">
          <div className="total-sub">
            <span>Subtotal</span>
            <span>73.98 USD</span>
          </div>
          <div className="total-price">
            <div className="delivery-day">
              <Link to="/danh-sach-cot">Continue shopping</Link>
            </div>
            <Link to="/thanh-toan" className="btn-submit">
              Go to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>,
    CardPopUp
  );
}
