import React from 'react';
import Card from '@material-ui/core/Card';
import { Link, useHistory } from 'react-router-dom';
import { CardActions, IconButton, Typography } from '@material-ui/core';
import { CardHeader, CardMedia, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../../../shared/components/UIElements/Modal';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext';

import './ShopItem.css';

const useStyles = makeStyles((theme) => {
  return {
    postAdButton: {
      marginLeft: 5,
      marginRight: '15px',
      height: '40px',
      width: '150px',
    },
  };
});

const ShopItem = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { details } = props;
  const { user } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({});
  const [shopDetails, setShopDetails] = useState({});

  const [itemShow, setitemShow] = useState(false);

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
  const closeItemShowHandler = () => {
    const data = {
      itemId: details.id,
      userId: user.id,
    };
    axios
      .post(`http://localhost:3001/shop/placeOrder`, data)
      .then((res) => {
        history.push({ pathname: '/PaymentForm', state: res.data });
        setitemShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Modal
        show={itemShow}
        header={details.itemName}
        onCancel={closeItemShowHandler}
        footer={
          <React.Fragment>
            <Button
              className={classes.postAdButton}
              color='primary'
              variant='contained'
              onClick={closeItemShowHandler}
            >
              Buy Now
            </Button>
            <Button
              className={classes.postAdButton}
              color='primary'
              variant='contained'
              onClick={closeItemShowHandler}
            >
              Add to Cart
            </Button>
          </React.Fragment>
        }
      >
        {/* <div className='item-container'> */}
        <div className='modal-img-container'>
          <img src={`http://localhost:3001/${details.image}`} alt='' />
        </div>
        <div className='content-container'>
          {shopDetails.shopName} <br />
          {details.description} <br />
          <br />
          <b>Contact Details</b> <br />
          Email : {userDetails.email} <br />
          Mobile Number : {userDetails.mobileNumber}
        </div>
        {/* </div> */}
      </Modal>
      <Card onClick={openItemShowHandler} style={{ cursor: 'pointer' }}>
        <CardHeader title={details.itemName} subheader={shopDetails.shopName} />
        {/* <CardMedia /> */}
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {details.description}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {details.unitPrice} LKR
          </Typography>
          <Typography variant='body2' color='textSecondary' component='h4'>
            Contact Details <br />
            Email : {userDetails.email} <br />
            Mobile Number : {userDetails.mobileNumber}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </CardActions> */}
      </Card>
    </>
  );
};

export default ShopItem;
