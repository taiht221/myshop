import PropTypes from 'prop-types';
import React from 'react';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
useRenderStart.propTypes = {
  props: PropTypes.number.isRequired,
};
const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#fdbc15',
  },
}));
function useRenderStart(props) {
  const classes = useStyles();
  let list = [];
  for (let i = 1; i <= props; i++) {
    // if(props==0.5){
    //   return (<i className="demo-icon icon-star start-wcl " />)
    // }
    list.push(<StarIcon className={classes.icon} key={Math.random()} />);
  }

  if (props - Math.round(props) !== 0) {
    list.push(<StarHalfIcon className={classes.icon} key={Math.random()}></StarHalfIcon>);
  }
  if (props === 0) {
    list.push(
      <p key={props++} style={{ fontWeight: 'bold' }}>
        Sản phẩm chưa có đánh giá
      </p>
    );
  }
  return list;
}

export default useRenderStart;
