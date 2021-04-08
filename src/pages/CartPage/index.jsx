import { makeStyles } from '@material-ui/core';
import cartApi from 'Apis/cartApi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartBlank from './componnets/CartBlank';
import CartItems from './componnets/CartItems';
import CartTotal from './componnets/CartTotal';
import { cartItemsCountSelector } from './selector';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '40px 0',
  },
  h2: {
    color: 'rgb(51, 51, 51)',
    fontSize: '18px',
    textTransform: 'uppercase',
    fontWeight: '400',
    margin: '0px 0px 12px',
    '&>span': {
      fontSize: '13px',
      textTransform: 'none',
      fontWeight: 300,
    },
  },
}));
function CartPage(props) {
  const classes = useStyles();
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const [loading, setloading] = useState(true);
  const [cartDetails, setCartDetails] = useState([]);
  const cartItemsSelector = useSelector((state) => state.cart.list);
  const handleAddToCart = (values) => {
    console.log(values);
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await cartApi.get();
        setCartDetails(response.data);
      } catch (error) {
        alert(error);
      }

      setloading(false);
    })();
  }, []);
  if (cartItemsCount === 0) {
    return <CartBlank />;
  }
  return (
    <main className="cart-page">
      <div className="container">
        <div className={`row ${classes.root}`}>
          <h2 className={classes.h2}>
            Giỏ hàng <span>({cartItemsCount} sản phẩm)</span>
          </h2>
          <div className="col-lg-9">
            <CartItems data={cartItemsSelector} onSubmit={handleAddToCart} />
          </div>
          <div className="col-lg-3">
            <CartTotal />
          </div>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
