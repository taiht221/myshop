import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';
export default function Checkout() {
  return (
    <>
      <Breadcrumbs links={[{ title: 'Home', link: '/' }, { title: 'More' }, { title: 'Culture' }]} />
      <main className="checkout">
        <div className="container">
          <div className="checkout-wrap">
            <div className="checkout__left">
              <div className="billing-infor">
                <h2 className="title">Billing info</h2>
                <div className="required">
                  <span>Please enter your billing info</span>
                  <span>Step 1 of 5</span>
                </div>
                <form className="my-form" autoComplete="off">
                  <div className="form-group">
                    <label htmlFor="frist-name" className="form-label">
                      First name
                    </label>
                    <input type="text" id="frist-name" className="form-input" placeholder="First name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name" className="form-label">
                      Last name
                    </label>
                    <input type="text" id="last-name" className="form-input" placeholder="Last name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input type="email" id="email" className="form-input" placeholder="Email addess" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone-number" className="form-label">
                      Phone number
                    </label>
                    <input type="text" id="phone-number" className="form-input" placeholder="Phone number" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Address" className="form-label">
                      Address
                    </label>
                    <input type="text" id="Address" className="form-input" placeholder="Address" />
                  </div>
                </form>
                <div className="check2">
                  <label className="filter-square">
                    <span>Ship to a different address?</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div className="billing-method">
                <h2 className="title">Billing method</h2>
                <div className="required">
                  <span>Please enter your payment method</span>
                  <span>Step 2 of 5</span>
                </div>
                <div className="check1">
                  <label className="filter-cricle">
                    <span>FedEx</span>
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                    <span className="ship-fee">
                      <i>+32 USD</i>Additional price
                    </span>
                    <i className="logo">
                      <img src="/assets/img/FedEx.svg" alt="" />
                    </i>
                  </label>
                </div>
                <div className="check1">
                  <label className="filter-cricle">
                    <span>DHL</span>
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                    <span className="ship-fee">
                      <i>+15 USD</i>Additional price
                    </span>
                    <i className="logo">
                      <img src="/assets/img/dhl.svg" alt="" />
                    </i>
                  </label>
                </div>
              </div>
              <div className="payment-method">
                <h2 className="title">Payment method</h2>
                <div className="required">
                  <span>Please enter your payment method</span>
                  <span>Step 3 of 5</span>
                </div>
                <div className="credit-card">
                  <div className="check1">
                    <label className="filter-cricle">
                      <span>Credit card</span>
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                      <i className="logo">
                        <img src="/assets/img/visa.svg" alt="" />
                      </i>
                    </label>
                  </div>
                  <form className="my-form" autoComplete="off">
                    <div className="form-group">
                      <label htmlFor="card-number" className="form-label">
                        Card number
                      </label>
                      <input type="text" id="card-number" className="form-input" placeholder="Card number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="card-holder" className="form-label">
                        Card holder
                      </label>
                      <input type="text" id="card-holder" className="form-input" placeholder="Card holder" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="expiration-date" className="form-label">
                        Expiration date
                      </label>
                      <input type="text" id="expiration-date" className="form-input" placeholder="Expiration date" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvc" className="form-label">
                        CVC
                      </label>
                      <input type="number" id="cvc" className="form-input" placeholder="CVC" />
                    </div>
                  </form>
                </div>
                <div className="check1">
                  <label className="filter-cricle">
                    <span>PayPal</span>
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                    <i className="logo">
                      <img src="/assets/img/PayPal.svg" alt="" />
                    </i>
                  </label>
                </div>
                <div className="check1">
                  <label className="filter-cricle">
                    <span>Bitcoin</span>
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                    <i className="logo">
                      <img src="/assets/img/bitcoin.svg" alt="" />
                    </i>
                  </label>
                </div>
              </div>
              <div className="addnote">
                <h2 className="title">Additional informations</h2>
                <div className="required">
                  <span>Need something else? We will make it for you!</span>
                  <span>Step 4 of 5</span>
                </div>
                <form className="my-form" autoComplete="off">
                  <div className="form-group">
                    <label htmlFor="order-note" className="form-label">
                      Order notes
                    </label>
                    <textarea
                      id="order-note"
                      rows={4}
                      cols={50}
                      className="form-input"
                      placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
                      defaultValue={''}
                    />
                  </div>
                </form>
              </div>
              <div className="confirm">
                <h2 className="title">Confirmation</h2>
                <div className="required">
                  <span>We are getting to the end. Just few clicks and your order si ready!</span>
                  <span>Step 5 of 5</span>
                </div>
                <div className="check2">
                  <label className="filter-square">
                    <span>I agree with sending an Marketing and newsletter emails. No spam, promissed!</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="check2">
                  <label className="filter-square">
                    <span>I agree with our terms and conditions and privacy policy.</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <Link to="/" className="btn-submit">
                  Complete order
                </Link>
                <div className="safe">
                  <i>
                    <img src="/assets/img/shield.svg" alt="" />
                  </i>
                  <strong>All your data are safe</strong>
                  <p>We are using the most advanced security to provide you the best experience ever.</p>
                </div>
              </div>
            </div>
            <div className="checkout__right">
              <div className="order-sum">
                <h2 className="title">Order Summary</h2>
                <div className="required">
                  <span>Price can change depending on shipping method and taxes of your state.</span>
                </div>
              </div>
              <div className="order-card__wrap">
                <div className="order-card">
                  <div className="order-card__img">
                    <img src="/assets/img/avonbot.png" alt="" />
                    <div className="wish-list">
                      <i className="demo-icon icon-heart-empty" />
                      <span>Wishlist</span>
                    </div>
                    <div className="remove">
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
                <div className="order-card">
                  <div className="order-card__img">
                    <img src="/assets/img/avonbot.png" alt="" />
                    <div className="wish-list">
                      <i className="demo-icon icon-heart-empty" />
                      <span>Wishlist</span>
                    </div>
                    <div className="remove">
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
              </div>
              <div className="total">
                <div className="total-sub">
                  <span>Subtotal</span>
                  <span>73.98 USD</span>
                </div>
                <div className="total-taxt">
                  <span>Tax</span>
                  <span>17% 16.53 USD</span>
                </div>
                <div className="total-ship">
                  <span>Shipping</span>
                  <span>0 USD</span>
                </div>
                <form className="my-form" autoComplete="off">
                  <div className="form-group">
                    <input type="text" id="card-number" className="form-input" placeholder="Apply promo code" />
                    <div className="btn-apply">Apply now</div>
                  </div>
                </form>
                <div className="total-price">
                  <div className="delivery-day">
                    <span>Total Order</span>
                    <p>Guaranteed delivery day: June 12, 2020</p>
                  </div>
                  <div className="price">89.84 USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
