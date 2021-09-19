import React from 'react';
import { useHistory } from 'react-router';
import { useState, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import { shopItemRegisterSchema } from '../../../validations/ShopValidation';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext';
import Modal from '../../../shared/components/UIElements/Modal';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import '../../../shared/components/FormElements/FileUpload.css';

const useStyle = makeStyles({
  field: {
    margin: 7,
    width: '300px',
  },
  formPage: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '100%',
  },
  formColumn: {
    display: 'flex',
  },
  formColumnIn: {
    display: 'flex',
    flexFlow: 'column',
  },
  input: {
    display: 'none',
  },
  inputButton: {
    margin: 7,
    width: '300px',
    height: '55px',
  },
  button: {
    // margin: 7,
    width: '500px',
  },
  modalForm: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '100%',
  },
  goToHomeButton: {
    marginLeft: 5,
    marginRight: '15px',
    height: '40px',
    width: '120px',
  },
});

const initialValues = {
  itemName: '',
  unitPrice: '',
  modelNo: '',
  quantity: '',
  condition: '',
  description: '',
  category: '',
  year: '',
  country: '',
  image: '',
};

const PaymentForm = (props) => {
  const [category, setCategory] = useState('Accessories');
  const [condition, setCondition] = useState('Brand New');
  const { user } = useContext(AuthContext);

  const [image, setImage] = useState();
  const [previewUrl, setPreviewUrl] = useState();

  const filePickerRef = useRef();

  const [showMessage, setShowMessage] = useState(false);

  const openMessageHandler = () => setShowMessage(true);
  const closeMessageHandler = () => setShowMessage(false);

  const classes = useStyle();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    formik.setFieldValue('image', event.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('itemName', data.itemName);
    formData.append('unitPrice', data.unitPrice);
    formData.append('modelNo', data.modelNo);
    formData.append('quantity', data.quantity);
    formData.append('condition', data.condition);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('year', data.year);
    formData.append('country', data.country);
    formData.append('image', data.image);
    for (var value of formData.values()) {
      console.log(value);
    }
    // axios
    //   .post(`http://localhost:3001/shop/addItem/${user.id}`, formData, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setShowMessage(true);
    //     openMessageHandler();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const formik = useFormik({
    initialValues,
    shopItemRegisterSchema,
    onSubmit,
  });

  return (
    <div className={classes.formPage}>
      <h1>Enter Payment Details</h1>
      <form
        className={classes.modalForm}
        onSubmit={formik.handleSubmit}
        encType='multipart/form-data'
      >
        {/* <div className={classes.formRow}> */}
        <div className={classes.formColumn}>
          <div className={classes.formColumnIn}>
            <input type='hidden' name='1216946' value='121XXXX' />
            <input
              type='hidden'
              name='return_url'
              value='http://sample.com/return'
            />
            <input
              type='hidden'
              name='cancel_url'
              value='http://sample.com/cancel'
            />
            <input
              type='hidden'
              name='notify_url'
              value='http://sample.com/notify'
            />
            <input type='text' name='order_id' value='ItemNo12345' />
            <input type='text' name='items' value='Door bell wireless' />
            <input type='hidden' name='currency' value='LKR' />
            <input type='text' name='amount' value='1000' />
            <input type='text' name='first_name' value='Saman' />
            <input type='text' name='last_name' value='Perera' />
            <input type='text' name='email' value='samanp@gmail.com' />
            <input type='text' name='phone' value='0771234567' />
            <input type='text' name='address' value='No.1, Galle Road' />
            <input type='text' name='city' value='Colombo' />
            <input type='hidden' name='country' value='Sri Lanka' />
            <TextField
              className={classes.field}
              id='itemName'
              label='Item Name'
              name='itemName'
              variant='filled'
              onChange={formik.handleChange}
              error={formik.touched.itemName && Boolean(formik.errors.itemName)}
              helperText={formik.touched.itemName && formik.errors.itemName}
            />
            <TextField
              className={classes.field}
              id='unitPrice'
              label='Unit Price'
              name='unitPrice'
              variant='filled'
              onChange={formik.handleChange}
              error={
                formik.touched.unitPrice && Boolean(formik.errors.unitPrice)
              }
              helperText={formik.touched.unitPrice && formik.errors.unitPrice}
            />
            <TextField
              className={classes.field}
              id='modelNo'
              label='Model Number'
              name='modelNo'
              variant='filled'
              onChange={formik.handleChange}
              error={formik.touched.modelNo && Boolean(formik.errors.modelNo)}
              helperText={formik.touched.modelNo && formik.errors.modelNo}
            />
            <TextField
              className={classes.field}
              id='quantity'
              label='Quantity'
              name='quantity'
              variant='filled'
              onChange={formik.handleChange}
              error={formik.touched.quantity && Boolean(formik.errors.quantity)}
              helperText={formik.touched.quantity && formik.errors.quantity}
            />
            <TextField
              className={classes.field}
              id='description'
              label='Description'
              name='description'
              variant='filled'
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </div>
          <div className={classes.formColumnIn}>
            <TextField
              className={classes.field}
              id='year'
              label='Year'
              name='year'
              variant='filled'
              onChange={formik.handleChange}
              error={formik.touched.year && Boolean(formik.errors.year)}
              helperText={formik.touched.year && formik.errors.year}
            />
            <TextField
              className={classes.field}
              id='country'
              label='Country'
              name='country'
              variant='filled'
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
            <input
              // accept='image/*'
              ref={filePickerRef}
              name='image'
              className={classes.input}
              id='contained-button-file'
              // multiple
              onChange={handleImageChange}
              type='file'
            />
            <label htmlFor='contained-button-file'>
              <div className='image-upload center'>
                <div className='image-upload__preview'>
                  {previewUrl && <img src={previewUrl} alt='Preview' />}
                  {!previewUrl && <p>Please Pick an Image</p>}
                </div>
                <Button
                  startIcon={<CloudUploadIcon />}
                  className={classes.inputButton}
                  // onClick={uploadHandler}
                  variant='outlined'
                  color='primary'
                  component='span'
                >
                  Upload Photos
                </Button>
              </div>
            </label>
          </div>
        </div>
        {/* <div className={classes.formRow}> */}
        <Button
          color='primary'
          className={classes.button}
          variant='contained'
          type='submit'
          style={{ margin: '10px' }}
        >
          Confirm Payment
        </Button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default PaymentForm;
