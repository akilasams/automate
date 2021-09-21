import React, { useState, useContext, useHistory } from 'react';
import CartItemList from './components/CartItemList';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { AuthContext } from '../../helpers/AuthContext';
import axios from 'axios';
import Modal from '../../shared/components/UIElements/Modal';
import PaymentForm from './components/PaymentForm';
import './Shop.css';

const useStyles = makeStyles((theme) => {
  return {
    quantityField: {
      height: '25px',
      width: '100px',
    },
    gotToHomeButton: {
      justifySelf: 'end',
      width: '200px',
      margin: '10px',
    },
    postAdButton: {
      marginLeft: 5,
      marginRight: '15px',
      height: '40px',
      width: '150px',
    },
  };
});

export default function Cart() {
  const [cartItemsList, setCartItemsList] = useState([]);
  const classes = useStyles();
  const { authState } = useContext(AuthContext);
  const [order, setOrder] = useState({});
  const [paymentConfirmShow, setpaymentConfirmShow] = useState(false);

  const openPaymentConfirmHandler = () => setpaymentConfirmShow(true);
  const closePaymentConfirmHandler = () => setpaymentConfirmShow(false);

  const total = cartItemsList.reduce(function (prev, cur) {
    return prev + cur.unitPrice * cur.quantity;
  }, 0);

  const saveCartItemsHandler = (itemsList) => {
    setCartItemsList(itemsList);
  };

  const checkoutHandler = () => {
    const data = {
      userId: authState.id,
      total: total,
      cartItemsList: cartItemsList,
    };
    axios.post('http://localhost:3001/shop/placeOrder', data).then((res) => {
      setOrder(res.data);
      openPaymentConfirmHandler();
    });
    // console.log(cartItemsList);
  };

  return (
    <>
      {/* <Modal
        show={paymentConfirmShow}
        header='Done Buying?'
        onCancel={closePaymentConfirmHandler}
        footer={
          authState.status && (
            <React.Fragment>
              <Button
                className={classes.postAdButton}
                color='primary'
                variant='contained'
                onClick={checkoutHandler}
              >
                Yes, Confirm Order
              </Button>
              <Button
                className={classes.postAdButton}
                color='primary'
                variant='contained'
                onClick={closePaymentConfirmHandler}
              >
                No, Want to Explore More
              </Button>
            </React.Fragment>
          )
        }
      ></Modal> */}
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
      <div className='cartContainer'>
        <div className='itemContainer'>
          <CartItemList onChange={saveCartItemsHandler} />
        </div>
        <div className='checkout'>
          <div className='amount'>Total Amount : {total} LKR</div>
          <Button
            className={classes.gotToHomeButton}
            color='primary'
            variant='contained'
            onClick={checkoutHandler}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
}
