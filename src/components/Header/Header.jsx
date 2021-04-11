import { IconButton, LinearProgress, Menu, MenuItem, Snackbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, Close } from '@material-ui/icons';
import StoreIcon from '@material-ui/icons/Store';
import Login from 'pages/Auths/components/Login';
import Register from 'pages/Auths/components/Register';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getCategory } from '../../redux/actions/categoryAction';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './style.scss';
import { cartItemsCountSelector } from 'pages/CartPage/selector';
import { Alert } from '@material-ui/lab';
import { closeMiniCart } from 'redux/actions/cartAction';

export default function Header() {
  let cartItemsCount = useSelector(cartItemsCountSelector);
  // console.log(cartItemsCount.findIndex((x) => x.id === 16964464));
  let categorytitle = useSelector((store) => store.category);
  const history = useHistory();
  let checkuser = useSelector((store) => store.user.current);

  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      setisLoggedIn(false);
    } else {
      setisLoggedIn(true);
    }
  }, [checkuser]);

  const [form, setForm] = useState('login');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
      fontSize: 'inherit',
      fontWeight: 'bold',
      color: 'green',
    },
    closeButton: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      color: theme.palette.grey[500],
      zIndex: 10,
    },
    loadingLine: {
      position: 'absolute',
      bottom: theme.spacing(-2),
      left: theme.spacing(0),
      width: '100%',
    },
    icon: {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      color: 'green',
    },
    basket: {
      color: 'green',
    },
  }));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const miniCartSelector = useSelector((state) => state.cart.openMiniCart);
  const handleCloseSnackBar = () => {
    dispatch(closeMiniCart());
  };
  const classes = useStyles();
  return (
    <header className="header">
      <Snackbar
        open={miniCartSelector}
        autoHideDuration={8000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackBar} severity="success">
          Thêm vào giỏ hàng thành công
        </Alert>
      </Snackbar>
      <div className="container">
        <div className="row">
          <div className="header__top ">
            <div className="header__top--left ">
              <span>Liên lạc </span>
              <span>0969045051</span>
              <span>taiht221@gmail.com</span>
            </div>
            <div className="header__top--right">
              {!isLoggedIn ? (
                <>
                  <Button
                    color="inherit"
                    className={classes.button}
                    onClick={() => {
                      setForm('login');
                      handleClickOpen();
                    }}
                  >
                    Đăng nhập
                  </Button>
                  <Button
                    color="inherit"
                    className={classes.button}
                    onClick={() => {
                      setForm('register');
                      handleClickOpen();
                    }}
                  >
                    Đăng ký
                  </Button>
                </>
              ) : (
                <div onClick={handleClick}>
                  <Button color="inherit" className={classes.button}>
                    {checkuser.name}
                  </Button>
                  <IconButton
                    className={classes.basket}

                    // onClick={
                    //   // localStorage.clear();
                    //   // setisLoggedIn(false);
                    //   handleClick;
                    // }
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row header__mid">
          <div className="logo ">
            <Link to="/">
              <StoreIcon className={classes.icon} />
            </Link>
          </div>
          <div className="search ">
            <div className="search-container">
              <form>
                <input type="text" placeholder="Tìm kiếm sản phẩm" name="search" />
              </form>
            </div>
            {categorytitle.loading ? <LinearProgress className={classes.loadingLine} color="secondary" /> : null}

            <nav className="nav">
              <ul className="cate-top">
                {categorytitle.categoryData
                  .map((e, i) => (
                    <li key={i}>
                      <Link to={`/search/${e.slug}`}>{e.title}</Link>
                    </li>
                  ))
                  .slice(0, 3)}
              </ul>
            </nav>
          </div>
          <div className="icons ">
            <button onClick={() => history.push('/cart')}>
              <ShoppingCartIcon className={classes.basket} />
              {cartItemsCount > 0 && <span className="number-basket">{cartItemsCount}</span>}
            </button>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleCloseMenu}>
          <Link to="/thong-tin">Thông tin người dùng</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            localStorage.clear();
            setisLoggedIn(false);
          }}
        >
          Đăng xuất
        </MenuItem>
      </Menu>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {form === 'login' ? <Login closeDialog={handleClose} /> : <Register closeDialog={handleClose} />}
        </DialogContent>
      </Dialog>
    </header>
  );
}
