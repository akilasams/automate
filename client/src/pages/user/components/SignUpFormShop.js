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
import { useState, useRef, useEffect  } from 'react';
// import { Hidden } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import '../../../shared/components/FormElements/FileUpload.css';

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
  input:{
    display: 'none',

  },
  inputButton: {
    margin: 7,
    width: '350px',
    height: '55px',
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
  file: '',
  password: '',
  confirmPassword: '',
};

function SignUpFormShop(props) {
  const [serviceType, setServiceType] = useState('Spare Part Seller');
  const [showMessage, setShowMessage] = useState(false);

  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();

  const filePickerRef = useRef();

  const openMessageHandler = () => setShowMessage(true);
  const closeMessageHandler = () => setShowMessage(false);

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    formik.setFieldValue('file', event.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('shopName', data.shopName);
    formData.append('mobileNumber', data.mobileNumber);
    formData.append('address', data.address);
    formData.append('serviceType', data.serviceType);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('file', data.file);
    // for (var value of formData.values()) {
    //   console.log(value);
    // }
    axios.post('http://localhost:3001/user/regShop', formData).then(() => {
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

 
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const uploadHandler = () => {
    filePickerRef.current.click();
  };
  return (
    <>
      <Modal
        show={showMessage}
        header='Success!'
        onCancel={closeMessageHandler}
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
        <div className='modal-msg'>
          <h2 align='center'>Your Registration is submitted for review. <br></br>
          You will be able to login after it is confirmed.<br></br>
          <div className='msg'>We will notify you through the email provided when your registration is approved or not. This may take upto few hours.</div></h2>
          
        </div>
      </Modal>
      <form  className='form-container' encType='multipart/form-data' onSubmit={formik.handleSubmit}>
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
          initialValues={formik.initialValues}
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
        <input
              // accept='image/*'
              ref={filePickerRef}
              name='file'
              className={classes.input}
              id='contained-button-file'
              // multiple
              onChange={handleFileChange}
              type='file'
            />
            <label htmlFor='contained-button-file'>
              <div className='image-upload center'>
                 <div className='file-upload__preview'>
                  {previewUrl && <img src={previewUrl} alt='Preview' />}
                  {!previewUrl && <p>Please upload a scanned copy of your Business Registration Document</p>}
                </div> 
                <Button
                  startIcon={<CloudUploadIcon />}
                  className={classes.inputButton}
                  onClick={uploadHandler}
                  variant='outlined'
                  color='primary'
                  component='span'
                >
                  Upload Document
                </Button>
              </div>
            </label>
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
