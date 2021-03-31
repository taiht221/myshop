import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeCart, removeItemcart } from '../../redux/actions/cartAction';

const CardPopUp = document.querySelector('#cart-popup');

export default function CartPopup() {
  const cart = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div className="cart-popup" style={{ display: cart.openCart ? 'block' : 'none' }}>
      <div className="checkout__right">
        <div className="order-sum">
          <h2 className="title">Order Summary</h2>
          <div className="required">
            <span>Price can change depending on shipping method and taxes of your state.</span>
          </div>
          <div className="close" onClick={() => dispatch(closeCart())}>
            <span>
              Close <i>×</i>
            </span>
          </div>
        </div>
        <div className="order-card__wrap">
          {cart.list.map((e, i) => (
            <div className="order-card" key={i}>
              <div className="order-card__img">
                <img src="/assets/img/avonbot.png" alt="" />
                <div className="wish-list">
                  <i className="demo-icon icon-heart-empty" />
                  <span>Wishlist</span>
                </div>
                <div className="remove" onClick={() => dispatch(removeItemcart(i))}>
                  <i>×</i>
                  <span>Remove</span>
                </div>
              </div>
              <div className="product-detail__right">
                <h3 className="title">Product title</h3>
                <table className="spec">
                  <tbody>
                    <tr>
                      <th>Farm:</th>
                      <td>Tharamis Farm</td>
                    </tr>
                    <tr>
                      <th>Freshness:</th>
                      <td>1 day old</td>
                    </tr>
                  </tbody>
                </table>
                <div className="card-rating">
                  <i className="demo-icon icon-star start-cl" />
                  <i className="demo-icon icon-star start-cl" />
                  <i className="demo-icon icon-star start-cl" />
                  <i className="demo-icon icon-star start-cl" />
                  <i className="demo-icon icon-star " />
                </div>
                <div className="add-cart">
                  <div className="add-cart__price">
                    <span className="price">36.99 USD</span>
                    <span className="sale-price">48.56</span>
                  </div>
                  <div className="quantity">
                    <input type="number" min={1} max={100} step={1} defaultValue={1} />
                    <span>Pcs</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
