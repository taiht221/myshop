import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Hãy nhập số lượng sản phẩm')
      .min(1, 'Hãy chọn ít nhất 1 sản phẩm')
      .typeError('Xin hãy nhập số'),
    // email: yup.string().required('Nhập họ và tên của bạn.'),
  });
  const form = useForm({
    defaultValues: {
      // có thể sử dụng giá trị "" hoặc null thay thế tùy
      quantity: 1,
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField form={form} name="quantity" label="Số lượng" />
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="secondary"
        style={{ maxWidth: '300px', width: '100%', color: 'white' }}
      >
        Chọn mua
      </Button>
    </form>
  );
}

export default AddToCartForm;
