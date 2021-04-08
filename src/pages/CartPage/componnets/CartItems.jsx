import { Button, makeStyles, Paper, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, setQuantity } from 'redux/actions/cartAction';
import './style.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '16px 0',
    padding: '8px',
  },
  img: {
    height: '200px',
    width: '200px',
    marginRight: theme.spacing(1),
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  cartName: {
    marginRight: theme.spacing(1),
    '&>a': {
      color: 'rgb(36, 36, 36)',
      fontWeight: '400',
      marginBottom: '10px',
    },
  },
  price: {
    marginRight: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    '&>.price': {
      width: '100%',
    },
  },
  field: {
    width: '40px',
    height: '40px',
  },
}));
CartItems.propTypes = {
  data: PropTypes.array,
  onSubmit: PropTypes.func,
};
export default function CartItems({ data = [], onSubmit = null }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      {data.map((cartItems) => (
        <Paper elevation={1} square className={classes.root} key={cartItems.id}>
          {/* <img alt={cartItems.name} src={cartItems.images[0]?.base_url} /> */}
          <div className={classes.img}>
            <img src={cartItems.data.thumbnail_url} alt={cartItems.data.name}></img>
          </div>
          <div className={classes.cartName}>
            <Link to={cartItems.data.slug}>{cartItems.data.name} </Link>
            <Button
              onClick={() => {
                dispatch(removeFromCart(cartItems.id));
              }}
              size="small"
              color="secondary"
            >
              Xóa
            </Button>
          </div>
          <div>
            <div className={classes.price}>
              <span className="price">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                  cartItems.data.real_price
                )}
              </span>
              {Math.round(100 - (parseInt(cartItems.data.real_price) * 100) / parseInt(cartItems.data.price)) > 0 ? (
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <span className="sale-price">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                      cartItems.data.price
                    )}
                  </span>
                  <span style={{ fontWeight: 'bold', fontSize: '12px' }}>
                    | -{Math.round(100 - (parseInt(cartItems.data.real_price) * 100) / parseInt(cartItems.data.price))}%
                  </span>
                </div>
              ) : (
                <span className="sale-price" style={{ visibility: 'hidden' }}>
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartItems.data.price)}
                </span>
              )}
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <>
                <Button
                  variant="outlined"
                  aria-label="reduce"
                  className={classes.field}
                  onClick={() => {
                    dispatch(
                      setQuantity({
                        quantity: cartItems.quantity - 1,
                        id: cartItems.id,
                      })
                    );
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <TextField
                  name="max"
                  value={cartItems.quantity}
                  // onChange={handleChange}
                  variant="outlined"
                  size="small"
                  color="secondary"
                  className={classes.field}
                />
                <Button
                  variant="outlined"
                  className={classes.field}
                  aria-label="increase"
                  onClick={() => {
                    dispatch(
                      setQuantity({
                        quantity: cartItems.quantity + 1,
                        id: cartItems.id,
                      })
                    );
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </>
            </div>
          </div>
        </Paper>
      ))}
    </>
  );
}
