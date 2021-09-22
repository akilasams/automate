import React from 'react';
import Card from '@material-ui/core/Card';
import { Link, useHistory } from 'react-router-dom';
import {
  CardActions,
  IconButton,
  responsiveFontSizes,
  Typography,
} from '@material-ui/core';
import { CardHeader, CardMedia, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useEffect, useState, useRef } from 'react';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import Modal from '../../../shared/components/UIElements/Modal';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext';
import PaymentForm from './PaymentForm';

import './ShopItem.css';

const useStyles = makeStyles((theme) => {
  return {
    postAdButton: {
      marginLeft: 5,
      marginRight: '15px',
      height: '40px',
      width: '150px',
    },
    quantityField: {
      height: '40px',
      width: '100px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    card: {
      display: 'flex',
      // flexFlow: 'column',
    },
  };
});

const ShopItem = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { details } = props;
  const { authState } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({});
  const [shopDetails, setShopDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState({});

  const [itemShow, setitemShow] = useState(false);

  const [paymentConfirmShow, setpaymentConfirmShow] = useState(false);

  const openPaymentConfirmHandler = () => setpaymentConfirmShow(true);
  const closePaymentConfirmHandler = () => setpaymentConfirmShow(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/byId/${details.userId}`)
      .then((res) => {
        // console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3001/shop/byId/${details.shopId}`)
      .then((res) => {
        // console.log(res.data);
        setShopDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openItemShowHandler = () => setitemShow(true);
  const closeItemShowHandler = () => setitemShow(false);

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const addtoCartHandler = () => {
    const data = {
      itemId: details.id,
      quantity: quantity,
      unitPrice: details.unitPrice,
    };

    if (quantity <= details.quantity) {
      axios
        .post(`http://localhost:3001/cart/addToCart/${authState.id}`, data)
        .then((res) => {
          console.log(res.data);
          alert('Item Added to Cart');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const buyNowHandler = () => {
    closeItemShowHandler();
    const data = {
      userId: authState.id,
      itemId: details.id,
      quantity: quantity,
      unitPrice: details.unitPrice,
    };
    console.log(data);

    axios.post('http://localhost:3001/shop/buyNow', data).then((res) => {
      console.log(res.data);
      setOrder(res.data);
      openPaymentConfirmHandler();
    });
  };

  // const data = {
  //   itemId: details.id,
  //   userId: user.id,
  // };
  // axios
  //   .post(`http://localhost:3001/shop/placeOrder`, data)
  //   .then((res) => {
  //     history.push({ pathname: '/PaymentForm', state: res.data });
  //     setitemShow(false);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <>
      <Modal
        show={paymentConfirmShow}
        header='Done Buying?'
        onCancel={closePaymentConfirmHandler}
        // footer={
        //   authState.status && (
        //     <React.Fragment>
        //       <Button
        //         className={classes.postAdButton}
        //         color='primary'
        //         variant='contained'
        //         onClick={checkoutHandler}
        //       >
        //         Yes, Confirm Order
        //       </Button>
        //       <Button
        //         className={classes.postAdButton}
        //         color='primary'
        //         variant='contained'
        //         onClick={closePaymentConfirmHandler}
        //       >
        //         No, Want to Explore More
        //       </Button>
        //     </React.Fragment>
        //   )
        // }
      >
        <PaymentForm order={order} />
      </Modal>
      <Modal
        show={itemShow}
        header={details.itemName}
        onCancel={closeItemShowHandler}
        footer={
          authState.status && (
            <React.Fragment>
              <Button
                className={classes.postAdButton}
                color='primary'
                variant='contained'
                onClick={buyNowHandler}
              >
                Buy Now
              </Button>
              <Button
                className={classes.postAdButton}
                color='primary'
                variant='contained'
                onClick={addtoCartHandler}
              >
                Add to Cart
              </Button>
            </React.Fragment>
          )
        }
      >
        {/* <div className='item-container'> */}
        <div className='modal-img-container'>
          <img src={`http://localhost:3001/${details.image}`} alt='' />
        </div>
        <div className='content-container'>
          {shopDetails.shopName} <br />
          {details.unitPrice} LKR <br />
          {details.quantity <= 0 ? 'Out of Stock' : 'In Stock'}
          <br />
          {details.description} <br />
          <p style={{ fontSize: '10px' }}>
            Model No : {details.modelNo}
            <br />
            Manufactured Year : {details.year}
            <br />
            Manufactured Country :{details.country} <br />
            <br />
          </p>
          <TextField
            className={classes.quantityField}
            id='filled-number'
            label='Quantity'
            type='number'
            value={quantity}
            onChange={handleQuantity}
            InputLabelProps={{
              shrink: true,
            }}
            variant='standard'
          />
          <br />
          <br />
          <br />
          <b>Contact Details</b> <br />
          Email : {userDetails.email} <br />
          Mobile Number : {userDetails.mobileNumber}
        </div>
        {/* </div> */}
      </Modal>
      <Card
        className={classes.card}
        onClick={openItemShowHandler}
        style={{ cursor: 'pointer' }}
      >
        <div className='card-media'>
          <img
            className='card-image'
            src={`http://localhost:3001/${details.image}`}
            alt=''
          />
        </div>
        <div className='details-container'>
          <CardHeader
            title={details.itemName}
            subheader={shopDetails.shopName}
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {details.description}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {details.unitPrice} LKR
            </Typography>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default ShopItem;
