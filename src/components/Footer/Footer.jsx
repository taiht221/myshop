import { Link } from 'react-router-dom';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import StoreIcon from '@material-ui/icons/Store';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles((theme) => ({
  icon: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    color: 'green',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__wrap">
            <div className=" footer__right col-lg-12">
              <div className="col-lg-3 col-xs-12 ">
                <h3>CHĂM SÓC KHÁCH HÀNG</h3>
                <Link to="/">Trung Tâm Trợ Giúp</Link>
                <Link to="/">Hướng Dẫn Mua Hàng</Link>
                <Link to="/">Hướng Dẫn Bán Hàng</Link>
                <Link to="/">Thanh Toán</Link>
              </div>
              <div className="col-lg-3 col-xs-12 ">
                <h3>VỀ CHÚNG TÔI</h3>
                <Link to="/">Giới Thiệu Về Chúng Tôi</Link>
                <Link to="/">Tuyển Dụng</Link>
                <Link to="/">Điều khoản</Link>
              </div>
              <div className="col-lg-3 col-xs-12 ">
                <h3>THEO DÕI CHÚNG TÔI TRÊN</h3>
                <Link to="/" className={classes.flex}>
                  <FacebookIcon /> Facebook
                </Link>
                <Link to="/" className={classes.flex}>
                  <TwitterIcon /> Twitter
                </Link>
                <Link to="/" className={classes.flex}>
                  <InstagramIcon />
                  Instagram
                </Link>
                <Link to="/" className={classes.flex}>
                  <LinkedInIcon /> LinkedIn
                </Link>
              </div>
              <div className="col-lg-3 col-xs-12 ">
                <h3>THANH TOÁN</h3>
                <Link to="/">Visa</Link>
                <Link to="/">Master Card</Link>
                <Link to="/">ZaloPay</Link>
                <Link to="/">MoMo</Link>
              </div>
            </div>
            <div className="copyright col-lg-12">
              <p>© 2021 Myshop. Tất cả các quyền được bảo lưu.</p>
              <p>Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
