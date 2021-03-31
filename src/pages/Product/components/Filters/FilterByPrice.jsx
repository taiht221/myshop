import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};
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
    border: `1px solid green`,
    color: 'green',
  },
}));
export default function FilterByPrice({ onChange }) {
  const classes = useStyle();
  const [value, setValue] = useState({
    min: '',
    max: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(value);
    setValue({
      min: 0,
      max: 0,
    });
  };
  const resetPrice = () => {
    setValue({
      min: 0,
      max: 0,
    });
  };

  return (
    <div className={classes.root}>
      <h2 className="title">Chọn Khoảng Giá</h2>
      <Box className={classes.range}>
        <TextField
          name="min"
          value={value.min > 0 ? value.min : 0}
          onChange={handleChange}
          type="number"
          variant="outlined"
        />
        <span>-</span>
        <TextField
          name="max"
          value={value.max > 0 ? value.max : 0}
          onChange={handleChange}
          type="number"
          variant="outlined"
        />
      </Box>

      <Button variant="outlined" color="primary" size="small" className={classes.button} onClick={handleSubmit}>
        Áp dụng
      </Button>
      <Button variant="outlined" color="primary" size="small" className={classes.button} onClick={resetPrice}>
        Reset
      </Button>
    </div>
  );
}
