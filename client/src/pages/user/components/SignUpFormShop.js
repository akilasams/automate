import React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { shopRegisterSchema } from '../../../validations/UserValidation';

// import FileUpload from '../../../shared/components/FormElements/FileUpload';

const useStyle = makeStyles({
  field: {
    margin: 7,
    width: '70%',
  },
});

const initialValues = {
  fullName: '',
  shopName: '',
  mobileNumber: '',
  shopAddress: '',
  address: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

function SignUpFormShop() {
  const classes = useStyle();
  const formik = useFormik({
    initialValues,
    shopRegisterSchema,
    onSubmit,
  });

  return (
    <form className='form-container' onSubmit={formik.handleSubmit}>
      {/* <Field id='auth-input' name='email' placeholder='Email' />
          <Field id='auth-input' name='password' placeholder='Password' />
          <Button color='primary' variant='contained'>
            Login
          </Button> */}
      <TextField
        className={classes.field}
        id='auth-input'
        label='Full Name'
        name='fullName'
        variant='filled'
        onChange={formik.handleChange}
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}
      />
      <TextField
        className={classes.field}
        id='auth-input'
        label='Shop Name'
        name='shopName'
        variant='filled'
        onChange={formik.handleChange}
        error={formik.touched.shopName && Boolean(formik.errors.shopName)}
        helperText={formik.touched.shopName && formik.errors.shopName}
      />
      <TextField
        className={classes.field}
        id='auth-input'
        label='Mobile Number'
        name='mobileNumber'
        variant='filled'
        onChange={formik.handleChange}
        error={
          formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)
        }
        helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
      />
      <TextField
        className={classes.field}
        id='auth-input'
        label='Shop Address'
        name='shopAddress'
        variant='filled'
        onChange={formik.handleChange}
        error={formik.touched.shopAddress && Boolean(formik.errors.shopAddress)}
        helperText={formik.touched.shopAddress && formik.errors.shopAddress}
      />
      <TextField
        className={classes.field}
        id='auth-input'
        label='Email'
        name='email'
        variant='filled'
        onChange={formik.handleChange}
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
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        className={classes.field}
        id='auth-input'
        label='Confirm Password'
        name='confirmPassword'
        type='password'
        variant='filled'
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      {/* <FileUpload center id="image" onInput={} /> */}
      <Button
        color='primary'
        variant='contained'
        type='submit'
        style={{ margin: '10px' }}
      >
        REGISTER
      </Button>
      <label
        style={{ textDecoration: 'none', color: '#737373', fontSize: '10px' }}
      >
        Already Have an Account?
      </label>
      <Link
        to='/Login'
        style={{
          textDecoration: 'none',
          color: 'primary',
          fontSize: '10px',
          marginBottom: '20px',
        }}
      >
        Login
      </Link>
    </form>
  );
}

export default SignUpFormShop;
