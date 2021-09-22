import React from 'react';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import { shopItemRegisterSchema } from '../../../validations/ShopValidation';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext';

import '../../../shared/components/FormElements/FileUpload.css';

const useStyle = makeStyles({
  field: {
    margin: 5,
    width: '300px',
    height: '15px',
    padding: '5px',
  },
  label: {
    width: '130px',
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
  formControl: {
    display: 'flex',
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
  const { authState } = useContext(AuthContext);
  const params = useParams();
  const [showMessage, setShowMessage] = useState(false);
  const location = useLocation();
  const [userDetails, setUserDetails] = useState({});
  const [city, setCity] = useState('');

  const openMessageHandler = () => setShowMessage(true);
  const closeMessageHandler = () => setShowMessage(false);

  const { order } = props;
  // console.log(order);

  const classes = useStyle();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const onSubmit = (data) => {
    axios.post('https://sandbox.payhere.lk/pay/checkout', data);
  };

  const formik = useFormik({
    initialValues,
    shopItemRegisterSchema,
    onSubmit,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/byId/${authState.id}`)
      .then((res) => {
        // console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authState]);

  return (
    <div className={classes.formPage}>
      <h1>Order Details</h1>
      <form
        className={classes.modalForm}
        onSubmit={formik.handleSubmit}
        method='post'
        action='https://sandbox.payhere.lk/pay/checkout'
      >
        {/* <div className={classes.formRow}> */}
        <div className={classes.formColumn}>
          <div className={classes.formColumnIn}>
            <input type='hidden' name='merchant_id' value='1218673' />
            <input
              type='hidden'
              name='return_url'
              value='http://localhost:3001/PaymentSuccess'
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
            <div className={classes.formControl}>
              <label className={classes.label}>Order Id : </label>
              <input
                type='text'
                className={classes.field}
                name='order_id'
                value={order.id}
              />
            </div>
            <div className={classes.formControl}>
              {/* <label className={classes.label}>Items : </label> */}
              <input
                type='hidden'
                className={classes.field}
                name='items'
                value='ItemsList'
              />
            </div>
            <input
              type='hidden'
              className={classes.field}
              name='currency'
              value='LKR'
            />
            <div className={classes.formControl}>
              <label className={classes.label}>Amount : </label>
              <input
                type='text'
                className={classes.field}
                name='amount'
                value={order.amount}
                readonly
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label}>First Name : </label>
              <input
                type='text'
                className={classes.field}
                name='firstName'
                value={userDetails.firstName}
                readonly
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label}>Last Name : </label>
              <input
                type='text'
                className={classes.field}
                name='lastName'
                value={userDetails.lastName}
                readonly
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label}>Email : </label>
              <input
                type='text'
                className={classes.field}
                name='email'
                value={userDetails.email}
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label}>Mobile Number : </label>
              <input
                type='text'
                className={classes.field}
                name='mobileNo'
                value={userDetails.mobileNumber}
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label}>Address : </label>
              <input
                type='text'
                className={classes.field}
                name='address'
                value={userDetails.address}
              />
            </div>
            <div className={classes.formControl}>
              <label className={classes.label}>City : </label>
              <input
                type='text'
                className={classes.field}
                name='city'
                onChange={handleCityChange}
                // value='Colombo'
                placeholder='Enter Your City'
              />
            </div>
            <input type='hidden' name='country' value='Sri Lanka' />
          </div>
        </div>
        {/* <input type='submit' value='Confirm Payment' /> */}
        <Button
          color='primary'
          className={classes.button}
          variant='contained'
          type='submit'
          style={{ margin: '10px' }}
        >
          Confirm Payment
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
