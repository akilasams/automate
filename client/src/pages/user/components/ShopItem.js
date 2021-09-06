import React from 'react';
import Card from '@material-ui/core/Card';
import { CardActions, IconButton, Typography } from '@material-ui/core';
import { CardHeader, CardMedia, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShopItem = (props) => {
  const { details } = props;

  const [userDetails, setUserDetails] = useState({});
  const [shopDetails, setShopDetails] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/byId/${details.UserId}`)
      .then((res) => {
        console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3001/shop/byId/${details.shopId}`)
      .then((res) => {
        console.log(res.data);
        setShopDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card>
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
      <CardActions>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ShopItem;
