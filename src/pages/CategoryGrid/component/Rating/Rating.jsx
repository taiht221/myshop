import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#fdbc15',
  },
}));
export default function Rating() {
  const classes = useStyles();
  return (
    <div className="rating">
      <h2 className="title">Rating</h2>
      <div className="check2">
        <label className="filter-square">
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <label className="filter-square">
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <label className="filter-square">
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <label className="filter-square">
          <StarIcon className={classes.icon} />
          <StarIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <label className="filter-square">
          <StarIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <StarBorderIcon className={classes.icon} />
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
      </div>
    </div>
  );
}
