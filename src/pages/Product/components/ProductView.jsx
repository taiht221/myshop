import PropTypes from 'prop-types';
import GridOnIcon from '@material-ui/icons/GridOn';
import ReorderIcon from '@material-ui/icons/Reorder';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';

ProductView.propTypes = {
  cateName: PropTypes.string,
  setLayoutList: PropTypes.func.isRequired,
  setLayoutGrid: PropTypes.func.isRequired,
  productCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
    color: 'green',
  },
  choose: {
    cursor: 'pointer',
  },
}));
export default function ProductView({
  cateName = 'Danh sách sản phẩm',
  setLayoutList,
  setLayoutGrid,
  productCount = '???',
}) {
  const classes = useStyles();

  return (
    <div className="row category-list--title">
      <div className="col-lg-6">
        <h2>{cateName}</h2>
      </div>
      <div className="view col-lg-6">
        <div
          className="view-list"
          onClick={() => {
            setLayoutGrid();
          }}
        >
          <ReorderIcon className={classes.icon} />

          <span>Danh sách</span>
        </div>
        <div
          className="view-list"
          onClick={() => {
            setLayoutList();
          }}
        >
          <GridOnIcon className={classes.icon} />

          <span>Lưới</span>
        </div>

        <div>
          <i className={classes.icon}>{productCount}</i> <span>Sản phẩm</span>
        </div>
      </div>
    </div>
  );
}
