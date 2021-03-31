import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';
import './style.scss';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from '@material-ui/core';

ProductList.propTypes = {
  data: PropTypes.array,
  pagi: PropTypes.array,
};
const useStyle = makeStyles((theme) => ({
  warning: {
    border: `1px solid rgb(253, 216, 53)`,
    color: 'rgb(223, 189, 21)',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '&>p': {
      marginLeft: theme.spacing(1),
    },
    marginTop: theme.spacing(2),
  },
}));
function ProductList({ data = [] }) {
  const classes = useStyle();
  if (data.length === 0) {
    return (
      <div className={classes.warning}>
        <ErrorOutlineIcon />
        <p> Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn</p>{' '}
      </div>
    );
  }
  return (
    <>
      {data.map((e, i) => (
        <ProductCard key={i} product={e} />
      ))}
    </>
  );
}

export default ProductList;
