import React from 'react';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { userRegisterSchema } from '../../../validations/UserValidation';
import axios from 'axios';
import Modal from '../../../shared/components/UIElements/Modal';
import { useState } from 'react';
import '../forms.css';

// import { Hidden } from '@material-ui/core';

// import FileUpload from '../../../shared/components/FormElements/FileUpload';

const useStyle = makeStyles({
  field: {
    margin: 7,
    width: '70%',
  },
  root: {
    display: 'flex',
  },
});

const initialValues = {
  firstName: '',
  lastName: '',
  mobileNumber: '',
  address: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpAdmin(props) {
  const [showMessage, setShowMessage] = useState(false);

  const openMessageHandler = () => setShowMessage(true);
  const closeMessageHandler = () => setShowMessage(false);

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/user/regAdmin', data).then(() => {
      setShowMessage(true);
      openMessageHandler();
    });
  };

  const classes = useStyle();
  const formik = useFormik({
    initialValues,
    userRegisterSchema,
    onSubmit,
  });

  const { userRole } = props;
  // const history = useHistory();
  // const prevPath = history.goBack();

  return (
    <>
      <Modal
        show={showMessage}
        header='Congratulations!'
        footer={
          <Button
            className={classes.gotToHomeButton}
            color='primary'
            variant='contained'
            onClick={closeMessageHandler}
            to='/Login'
          >
            <Link to='/Login' style={{ textDecoration: 'none', color: '#fff' }}>
              Go to Login
            </Link>
          </Button>
        }
      >
        <div className='modal-msg-container'>
          <h2>Registration Succesful!</h2>
        </div>
      </Modal>
      <div className = {classes.root}>
      <div className='img-container'>
        <img src='./images/Vehicle-Repair.jpg' alt='What We Do' />
      </div>
      <form className='form-container' onSubmit={formik.handleSubmit}>
        {/* <Field id='auth-input' name='email' placeholder='Email' />
          <Field id='auth-input' name='password' placeholder='Password' />
          <Button color='primary' variant='contained'>
            Login
          </Button> */}
          <div className='logo-container'>
        <img src='./images/logo.png' alt='Automate' />
      </div>
      <p><b>Welcome to Automate!</b></p>
      <p>Register as Admin</p>
        <TextField
          className={classes.field}
          id='firstName'
          label='First Name'
          name='firstName'
          variant='filled'
          onChange={formik.handleChange}
          error={formik.touched.firtName && Boolean(formik.errors.firtName)}
          helperText={formik.touched.firtName && formik.errors.firtName}
        />
        <TextField
          className={classes.field}
          id='lastName'
          label='Last Name'
          name='lastName'
          variant='filled'
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          className={classes.field}
          id='mobileNumber'
          label='Mobile Number'
          name='mobileNumber'
          variant='filled'
          onChange={formik.handleChange}
          error={
            formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)
          }
          helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
        />

        {/* <Hidden xsUp>
        <TextField
          className={classes.field}
          id='userRole'
          name='userRole'
          value={userRole}
          variant='filled'
        />
      </Hidden> */}

        {/* <input type='hidden' id='userRole' name='userRole' value={userRole} /> */}

        <TextField
          className={classes.field}
          id='address'
          label='Address'
          name='address'
          variant='filled'
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          className={classes.field}
          id='email'
          label='Email'
          name='email'
          variant='filled'
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className={classes.field}
          id='password'
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
          id='confirmPassword'
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
      </div>
    </>
  );
}

export default SignUpAdmin;
