import React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { userLoginSchema } from '../../../validations/UserValidation';
import axios from 'axios';
import { useHistory, Redirect } from 'react-router';
import { useState, useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
  field: {
    margin: 10,
    width: '70%',
  },
});

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const classes = useStyle();

  const { authState, setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const onSubmit = async (data) => {
    await axios
      .post('http://localhost:3001/user/login', data)
      .then((response) => {
        // console.log(data);
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem('accessToken', response.data);
          setAuthState({
            firstName: response.data.firstName,
            id: response.data.id,
            userRole: response.data.userRole,
            status: true,
          });

          if (authState.userRole === 'Admin') {
            history.push('/Admin');
          } else {
            history.push('/');
          }
        }
      });
  };

  const formik = useFormik({
    initialValues,
    userLoginSchema,
    onSubmit,
  });

  return (
    <form className='form-container' onSubmit={formik.handleSubmit}>
      <div className='logo-container'>
        <img src='./images/logo.png' alt='Automate' />
      </div>
      <p>Welcome to Automate!</p>
      <TextField
        className={classes.field}
        id='auth-input'
        label='Email'
        name='email'
        variant='filled'
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        className={classes.field}
        id='auth-input'
        label='Password'
        name='password'
        type='password'
        variant='filled'
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button color='primary' variant='contained' type='submit'>
        LOGIN
      </Button>
      <Link
        to='/Login'
        style={{
          textDecoration: 'none',
          color: 'primary',
          fontSize: '10px',
          marginBottom: '20px',
        }}
      >
        Forgot Password?
      </Link>
    </form>
  );
}

export default LoginForm;
