import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles } from '@material-ui/core';
import InputField from 'components/form-controls/InputField/Index';
import PasswordField from 'components/form-controls/PasswordField';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as yup from 'yup';
Details.propTypes = {
  userInfor: PropTypes.object,
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'flex-end',
    display: 'flex',
  },
}));
function Details({ userInfor = {}, onSubmit = null }) {
  const loadingUser = useSelector((state) => state.user.loading);
  const classes = useStyles();
  const schema = yup.object().shape({
    name: yup.string().trim().required('Hãy nhập họ và tên của bạn'),
    email: yup.string().required('Nhập email của bạn').email('Hãy nhập đúng định dạng email').trim(),
    // email: yup.string().required('Nhập họ và tên của bạn.'),
    password: yup.string().trim(),
    phone: yup
      .string()
      .typeError('Xin hãy nhập số')
      .matches('(09|01[2|6|8|9])+([0-9]{8})', 'Xin hãy nhập đúng số điện thoại ')
      .trim(),
  });
  const form = useForm({
    defaultValues: {
      // có thể sử dụng giá trị "" hoặc null thay thế tùy
      name: userInfor.name,
      email: userInfor.email,
      password: userInfor.retypePassword,
      phone: userInfor.phone,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <div>
      <h2>Thông tin tài khoản</h2>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="name" label="Họ và tên" />
        <InputField form={form} name="email" label="Email" disabled />
        <PasswordField form={form} name="password" label="Password" />
        <InputField form={form} name="phone" label="Số điện thoại" />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={classes.submit}
          size="large"
          disabled={loadingUser}
          color="secondary"
        >
          Cập nhật thông tin
        </Button>
      </form>
    </div>
  );
}

export default Details;
