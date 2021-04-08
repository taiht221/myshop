import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  img: {
    backgroundImage: `url(${'https://www.rphbuddy.com/public/img/empty-cart-2.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '500px',
    position: 'relative',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  h1: {},
}));

export default function CartBlank() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Paper className={classes.img}>
            <div className={classes.button}>
              <Typography variant="h5">Your cart is empty</Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => {
                  history.push('/search');
                }}
              >
                Shop Now
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
