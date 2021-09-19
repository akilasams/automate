import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext';

import CartItem from './CartItem';

import Grid from '@material-ui/core/Grid';
// import { Container } from '@material-ui/core';

const CartItemList = () => {
  // if (props.items.length === 0) {
  //   return <div className='place-list center'>No Items Found</div>;
  // }
  const [cartItems, setCartItems] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/cart/getItems/${user.id}`)
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {cartItems.map((cartItem) => (
        <Grid item xs={12} md={6} sm={4} lg={3} key={cartItem.id}>
          <CartItem details={cartItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CartItemList;
