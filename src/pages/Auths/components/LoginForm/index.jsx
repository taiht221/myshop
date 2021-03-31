import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField/Index';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    margin: theme.spacing(2, 0, 4, 0),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    backgroundColor: 'green',
    color: 'white',
  },
  progress: {
    position: 'absolute',
    top: theme.spacing(0.5),
    left: 0,
    right: 0,
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const loadingUser = useSelector((state) => state.user.loading);
  const classes = useStyles();
  const schema = yup.object().shape({
    email: yup.string().required('Nhập email của bạn').email('Hãy nhập đúng định dạng email').trim(),
    // email: yup.string().required('Nhập họ và tên của bạn.'),
    password: yup.string().required('Nhập mật khẩu của bạn.'),
  });
  const form = useForm({
    defaultValues: {
      // có thể sử dụng giá trị "" hoặc null thay thế tùy
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <div className={classes.root}>
      {loadingUser && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography component="h3" variant="h5" className={classes.title}>
        Đăng nhập
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Mật Khẩu" />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={classes.submit}
          size="large"
          disabled={loadingUser}
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
