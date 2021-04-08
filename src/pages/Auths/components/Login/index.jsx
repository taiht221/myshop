import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/actions/userAction';
import LoginForm from '../LoginForm';
Login.propTypes = {
  closeDialog: PropTypes.func.isRequired,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (values) => {
    try {
      const { closeDialog } = props;

      const action = loginUser(values);

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
    }

    // const handleSubmit = (values) => {
    //   dispatch(getUser(values));
    // };
    // useEffect(() => {}, [message]);
  };
  return <LoginForm onSubmit={handleSubmit} />;
}

export default Login;
