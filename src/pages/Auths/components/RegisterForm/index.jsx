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
    position: 'relative',
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
    top: 0,
    left: 0,
    right: 0,
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const loadingUser = useSelector((state) => state.user.loading);
  const classes = useStyles();
  const schema = yup.object().shape({
    name: yup.string().required('Nhập họ và tên của bạn.'),
    // .test('should has at least two words', 'Hãy nhập đầy đủ họ và tên ít nhất 2 từ', (value) => {
    //   return value.spilt(' ').length >= 2;
    // }),
    email: yup.string().required('Nhập email của bạn').email('Hãy nhập đúng định dạng email').trim(),
    // email: yup.string().required('Nhập họ và tên của bạn.'),
    password: yup.string().required('Nhập mật khẩu của bạn.').trim(),
    // .matches(
    //   '^(?=.*[0-9])(?=.*[A-Z]).{8,32}$',
    //   'Xin hãy nhập ít nhất 8 dài nhất 32 kí tự,có một kí tự viết hoa, có một chữ số  '
    // ),
    retypePassword: yup
      .string()
      .required('Nhập lại mật khẩu của bạn.')
      .oneOf([yup.ref('password')], 'mật khẩu không trùng khớp'),
  });
  const form = useForm({
    defaultValues: {
      // có thể sử dụng giá trị "" hoặc null thay thế tùy
      name: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
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
        Tạo tài khoản
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="name" label="Họ và tên" />
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Mật khẩu" />
        <PasswordField form={form} name="retypePassword" label="Nhập lại mật khẩu" />
        <Button
          disabled={loadingUser}
          type="submit"
          variant="contained"
          fullWidth
          className={classes.submit}
          size="large"
        >
          Đồng ý
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
