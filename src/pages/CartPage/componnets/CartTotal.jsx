import { makeStyles, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalSelector } from '../selector';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '16px 0',
    padding: '8px',
  },
  price1: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #e0e0e0',
    padding: '17px 8px',
  },
  price2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '&>.vat': {
      width: '100%',
      textAlign: 'right',
      fontSize: '12px',
      color: 'rgb(51, 51, 51)',
      marginTop: '3px',
      fontWeight: '300',
    },
    padding: '17px 8px',
  },
  priceText: {
    fontWeight: '300',
    color: 'rgb(51, 51, 51)',
  },
  priceValue: {
    color: 'rgb(254, 56, 52)',
    fontSize: '22px',
    fontWeight: '400',
    textAlign: 'right',
  },
}));
CartTotal.propTypes = {
  data: PropTypes.array,
  onSubmit: PropTypes.func,
};
export default function CartTotal({ data = [], onSubmit = null }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartTotal = useSelector(cartTotalSelector);

  return (
    <Paper elevation={1} square className={classes.root}>
      <div className={classes.price1}>
        <span className={classes.priceText}>Tạm tính</span>
        <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}</span>
      </div>
      <div className={classes.price2}>
        <span className={classes.priceText}>Thành tiền</span>
        <span className={classes.priceValue}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}
        </span>
        <span className="vat">(Đã bao gồm VAT nếu có)</span>
      </div>
    </Paper>
  );
}
