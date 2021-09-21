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

const categories = [
  {
    value: 'Accessories',
    label: 'Accessories',
  },
  {
    value: 'Air Condition Parts',
    label: 'Air Condition Parts',
  },
  {
    value: 'Alloy Wheels',
    label: 'Alloy Wheels',
  },
  {
    value: 'Audio/Video/Sound Systems',
    label: 'Audio/Video/Sound Systems',
  },
  {
    value: 'Batteries',
    label: 'Batteries',
  },
  {
    value: 'Beading and Rubber Mounts',
    label: 'Beading and Rubber Mounts',
  },
  {
    value: 'Brake System',
    label: 'Brake System',
  },
  {
    value: 'Cables',
    label: 'Cables',
  },
  {
    value: 'Electrical Parts',
    label: 'Electrical Parts',
  },
  {
    value: 'Engine',
    label: 'Engine',
  },
  {
    value: 'Engine Cooling System',
    label: 'Engine Cooling System',
  },
  {
    value: 'Exhaust and Silencer',
    label: 'Exhaust and Silencer',
  },
  {
    value: 'External Body Parts',
    label: 'External Body Parts',
  },
  {
    value: 'Filters',
    label: 'Filters',
  },
  {
    value: 'Gear box and Transmission system',
    label: 'Gear box and Transmission system',
  },
  {
    value: 'Hose and Clips',
    label: 'Hose and Clips',
  },
  {
    value: 'Hybrid Parts',
    label: 'Hybrid Parts',
  },
  {
    value: 'Interior Body Parts',
    label: 'Interior Body Parts',
  },
  {
    value: 'Lamps and Signal Lights',
    label: 'Lamps and Signal Lights',
  },
  {
    value: 'Fluid and Lubricants',
    label: 'Fluid and Lubricants',
  },
  {
    value: 'Mirrors and Glasses',
    label: 'Mirrors and Glasses',
  },
  {
    value: 'Nuts and Bolts',
    label: 'Nuts and Bolts',
  },
  {
    value: 'Sensors',
    label: 'Sensors',
  },
  {
    value: 'Seats',
    label: 'Seats',
  },
  {
    value: 'Steering Wheels',
    label: 'Steering Wheels',
  },
  {
    value: 'Switches and controls',
    label: 'Switches and controls',
  },
  {
    value: 'Tyres and Rims',
    label: 'Tyres and Rims',
  },
  {
    value: 'Undercarriage Parts',
    label: 'Undercarriage Parts',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const conditions = [
  {
    value: 'Brand New',
    label: 'Brand New',
  },
  {
    value: 'Used',
    label: 'Used',
  },
];

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

const PostAnAdForm = (props) => {
  const [category, setCategory] = useState('Accessories');
  const [condition, setCondition] = useState('Brand New');
  const { authState } = useContext(AuthContext);

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
    // for (var value of formData.values()) {
    //   console.log(value);
    // }
    axios
      .post(`http://localhost:3001/shop/addItem/${authState.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log(res.data);
        setShowMessage(true);
        openMessageHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues,
    shopItemRegisterSchema,
    onSubmit,
  });

  useEffect(() => {
    if (!image) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(image);
  }, [image]);

  const uploadHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className={classes.formPage}>
      <Modal
        show={showMessage}
        header='Congratulations!'
        onCancel={closeMessageHandler}
        footer={
          <Button
            className={classes.gotToHomeButton}
            color='primary'
            variant='contained'
            onClick={closeMessageHandler}
            to='/Shop'
          >
            <Link to='/Shop' style={{ textDecoration: 'none', color: '#fff' }}>
              View Shop
            </Link>
          </Button>
        }
      >
        <div className='modal-msg-container'>
          <h3>Your ad needs to be approved by the Admin before publishing. It will be available in the Shop after the Approval is complete.</h3><br></br>
        
        </div>
      </Modal>
      <h1>Add an Item</h1>
      <form
        className={classes.modalForm}
        onSubmit={formik.handleSubmit}
        encType='multipart/form-data'
      >
        {/* <div className={classes.formRow}> */}
        <div className={classes.formColumn}>
          <div className={classes.formColumnIn}>
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
              id='condition'
              label='Condition'
              select
              name='condition'
              variant='filled'
              value={condition}
              onChange={handleConditionChange}
              // error={formik.touched.condition && Boolean(formik.errors.condition)}
              helperText={formik.touched.condition && formik.errors.condition}
            >
              {conditions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.field}
              id='description'
              label='Description'
              name='description'
              variant='filled'
              multiline
              rows={4}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <TextField
              className={classes.field}
              id='category'
              name='category'
              select
              label='Category'
              value={category}
              initialValues={formik.initialValues}
              onChange={handleCategoryChange}
              helperText={formik.touched.category && formik.errors.category}
              variant='filled'
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
                  onClick={uploadHandler}
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
          Post Ad
        </Button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default PostAnAdForm;
