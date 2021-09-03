import React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { shopRegisterSchema } from '../../../validations/UserValidation';
import axios from 'axios';
import Modal from '../../../shared/components/UIElements/Modal';
// import { Hidden } from '@material-ui/core';

// import FileUpload from '../../../shared/components/FormElements/FileUpload';

const serviceTypes = [
  {
    value: 'Spare Part Seller',
    label: 'Spare Part Seller',
  },
  {
    value: 'Service Center',
    label: 'Service Center',
  },
];

const useStyle = makeStyles({
  field: {
    margin: 5,
    width: '70%',
  },
  goToHomeButton: {
    marginLeft: 5,
    marginRight: '15px',
    height: '40px',
    width: '120px',
  },
});

const initialValues = {
  firstName: '',
  lastName: '',
  shopName: '',
  mobileNumber: '',
  address: '',
  serviceType: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpFormShop(props) {
  const [serviceType, setServiceType] = React.useState('Spare Part Seller');
  const [showMessage, setShowMessage] = React.useState(false);

  const openMessageHandler = () => setShowMessage(true);
  const closeMessageHandler = () => setShowMessage(false);

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/user/regShop', data).then(() => {
      setShowMessage(true);
      openMessageHandler();
    });
  };

  const classes = useStyle();
  const formik = useFormik({
    initialValues,
    shopRegisterSchema,
    onSubmit,
  });

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

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
      <form className='form-container' onSubmit={formik.handleSubmit}>
        {/* <Field id='auth-input' name='email' placeholder='Email' />
          <Field id='auth-input' name='password' placeholder='Password' />
          <Button color='primary' variant='contained'>
            Login
          </Button> */}
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
          id='shopName'
          label='Shop Name'
          name='shopName'
          variant='filled'
          onChange={formik.handleChange}
          error={formik.touched.shopName && Boolean(formik.errors.shopName)}
          helperText={formik.touched.shopName && formik.errors.shopName}
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
          onChange={formik.handleChange}
        />
      </Hidden> */}

        {/* <input type='hidden' id='userRole' name='userRole' value={userRole} /> */}

        <TextField
          className={classes.field}
          id='address'
          label='Shop Address'
          name='address'
          variant='filled'
          onChange={formik.handleChange}
          error={
            formik.touched.shopAddress && Boolean(formik.errors.shopAddress)
          }
          helperText={formik.touched.shopAddress && formik.errors.shopAddress}
        />
        <TextField
          className={classes.field}
          id='serviceType'
          name='serviceType'
          select
          // initialValues={formik.initialValues}
          label='Service Type'
          value={serviceType}
          onChange={handleServiceTypeChange}
          helperText={formik.touched.shopAddress && formik.errors.shopAddress}
          variant='filled'
        >
          {serviceTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
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
    </>
  );
}

export default SignUpFormShop;
