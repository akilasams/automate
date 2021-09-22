import React from 'react';
import Card from '@material-ui/core/Card';
import { Link, useHistory } from 'react-router-dom';
import { CardActions, IconButton, Typography } from '@material-ui/core';
import { CardHeader, CardMedia, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useEffect, useState, useRef } from 'react';
import { TextField } from '@material-ui/core';
import axios from 'axios';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { AuthContext } from '../../../src/helpers/AuthContext';
import '../admin/css/ShopItem.css';

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
      marginTop: '50px',
      marginLeft: '50px',
      display: 'flex',
      // flexFlow: 'column',
    },
  };
});

const SellerItems = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { details } = props;
  const { user } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({});
  const [shopDetails, setShopDetails] = useState({});
  const [quantity, setQuantity] = useState(1);

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
  const closeItemShowHandler = () => setitemShow(false);

  const approve = () => {
    axios
      .put(`http://localhost:3001/shop/approveItem/${details.id}`, {
        approval: true,
      })
      .then((res) => {
        console.log(res.data);
        // setShowMessage(true);
        // openMessageHandler();
      })
      .catch((err) => {
        console.log(err);
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

export default SellerItems;
