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
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__wrap">
            <div className="col-lg-6 footer__left">
              <div className="logo">
                <Link to="/" href="#">
                  <StoreIcon className={classes.icon} />
                </Link>
              </div>
              <p>We earned a reputation of being good at what we do.</p>
              <p>Let us take your online shop to new dimension in success!</p>
              <div className="place">
                <i className="demo-icon icon-target" />
                <p>Comilla, Bangladesh 3500</p>
              </div>
              <div className="social">
                <span>kawsarahmed0210@gmail.com</span>
                <span>01647470457</span>
                <div className="social__icons">
                  <Link to="/">
                    <FacebookIcon />
                  </Link>
                  <Link to="/">
                    <InstagramIcon />
                  </Link>
                  <Link to="/">
                    <TwitterIcon />
                  </Link>
                  <Link to="/">
                    <LinkedInIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 footer__right">
              <div className="email col-lg-12">
                <h3>RECIVE EMAIL UPDATES</h3>
                <div className="search-container">
                  <form>
                    <input type="text" placeholder="Search.." name="search" />
                  </form>
                  <Link to="/" href="#">
                    Join
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-xs-12 align-middle">
                <Link to="/" href="#">
                  <h3>Shop</h3>
                </Link>
                <Link to="/" href="#">
                  Shop
                </Link>
                <Link to="/" href="#">
                  Collection
                </Link>
                <Link to="/" href="#">
                  Outlet
                </Link>
                <Link to="/" href="#">
                  Lookbook
                </Link>
              </div>
              <div className="col-lg-4 col-xs-12 align-middle">
                <Link to="/" href="#">
                  <h3>HELP</h3>
                </Link>
                <Link to="/" href="#">
                  FAQ
                </Link>
                <Link to="/" href="#">
                  Privecy Policy
                </Link>
                <Link to="/" href="#">
                  Tearms and conditions
                </Link>
                <Link to="/" href="#">
                  Return and Exchanges
                </Link>
              </div>
              <div className="col-lg-4 col-xs-12 align-middle">
                <Link to="/" href="#">
                  <h3>About</h3>
                </Link>
                <Link to="/" href="#">
                  Journal
                </Link>
                <Link to="/" href="#">
                  Our Story
                </Link>
                <Link to="/" href="#">
                  Contact
                </Link>
                <Link to="/" href="#">
                  Store Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
