import React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { userRegisterSchema } from '../../../validations/UserValidation';

// import FileUpload from '../../../shared/components/FormElements/FileUpload';

const useStyle = makeStyles({
  field: {
    margin: 7,
    width: '70%',
  },
});

const initialValues = {
  fullName: '',
  mobileNumber: '',
  address: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

function SignUpFormIndi() {
  const classes = useStyle();
  const formik = useFormik({
    initialValues,
    userRegisterSchema,
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
        label='Address'
        name='address'
        variant='filled'
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
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

export default SignUpFormIndi;
