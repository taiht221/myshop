import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/actions/userAction';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
  closeDialog: PropTypes.func.isRequired,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (values) => {
    try {
      const { closeDialog } = props;

      const action = registerUser(values);

      dispatch(action);
      //close dialog
      // return result;
      setTimeout(() => {
        if (closeDialog) {
          closeDialog();
        }
      }, 1000);
    } catch (error) {
      enqueueSnackbar('e', { variant: 'error' });
      console.log(error);
    }
  };

  // const handleSubmit = (values) => {
  //   dispatch(getUser(values));
  // };
  // useEffect(() => {}, [message]);

  return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
