import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';

Price.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '&>span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));
export default function Price() {
  const classes = useStyle();
  const [value, setValue] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(value);
    setValue({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  const resetPrice = () => {
    setValue({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <div className={classes.root}>
      <h2 className="title">Chọn Khoảng giá</h2>
      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={value.salePrice_gte} onChange={handleChange} />
        <span>-</span>
        <TextField name="salePrice_lte" value={value.salePrice_lte} onChange={handleChange} />
      </Box>

      <Button variant="outlined" color="primary" size="small" className={classes.button} onClick={handleSubmit}>
        Áp dụng
      </Button>
      <Button variant="outlined" color="primary" size="small" onClick={resetPrice}>
        Reset
      </Button>
    </div>
  );
}
