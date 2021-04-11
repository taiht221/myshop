import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useRenderStart from 'hooks/useRenderStart';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddToCartForm from './AddToCartForm';
import './style.scss';
import DOMPurify from 'dompurify';
import { addToCart, openMiniCart } from 'redux/actions/cartAction';
import { useDispatch } from 'react-redux';

ProductInformation.propTypes = {
  data: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
  mota: {
    padding: theme.spacing(3),
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  thead: {
    width: '20%',
    backgroundColor: 'rgb(239, 239, 239)',
  },
  white: {
    color: 'white',
  },
}));
function ProductInformation({ data = {} }) {
  const dispatch = useDispatch();
  const safeDes = DOMPurify.sanitize(data.description);
  const classes = useStyles();
  const Star = useRenderStart(data.rating_average);
  const percent = Math.round(100 - (parseInt(data.real_price) * 100) / parseInt(data.price));
  const [hide, setHide] = useState(true);
  const handleAddToCartSubmit = ({ quantity }) => {
    dispatch(
      addToCart({
        id: data.id,
        data,
        quantity,
      })
    );
    dispatch(openMiniCart());
  };
  return (
    <>
      {/* {data.map((e) => {
        <p>{e.name}</p>;
      })} */}
      <div className="col-lg-8 product-detail__right">
        <h2>{data?.name}</h2>
        <div className="card-rating">
          {Star}
          {data.review_count > 0 ? <span className="small-des">({data.review_count} lượt đánh giá)</span> : ''}
        </div>
        <p className="des">{data.short_description}</p>

        <div className="add-cart">
          <div className="add-cart__price">
            <span className="price">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.real_price)}
            </span>
            {percent > 0 ? (
              <>
                <span className="sale-price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                </span>
                <span className="percent">-{percent}%</span>
              </>
            ) : (
              <span className="sale-price" style={{ visibility: 'hidden' }}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
              </span>
            )}
          </div>
          <div className="available">
            <span className={classes.white}>Hiện đang còn : {data.stock_item.qty} sản phẩm</span>
          </div>
        </div>
        <AddToCartForm onSubmit={handleAddToCartSubmit} />
      </div>
      <div className="col-lg-12">
        <h2 className={classes.title}>Thông tin chi tiết</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {data?.specifications[0]?.attributes.map((e, i) => (
                <TableRow key={i}>
                  <TableCell className={classes.thead}>{e.name}</TableCell>
                  <TableCell>{e.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="col-lg-12 content-infor">
        <h2 className={classes.title}>Mô tả sản phẩm</h2>
        <Paper className={`${classes.mota} `} elevation={3}>
          <div dangerouslySetInnerHTML={{ __html: safeDes }} className={hide ? 'hide-infor' : ''}></div>
        </Paper>
        {hide ? (
          <Button variant="contained" color="secondary" className="show-more" onClick={() => setHide(false)}>
            Xem thêm nội dung
          </Button>
        ) : (
          <Button variant="contained" color="secondary" className="show-more" onClick={() => setHide(true)}>
            Thu gọn nội dung
          </Button>
        )}
      </div>
    </>
  );
}

export default ProductInformation;
