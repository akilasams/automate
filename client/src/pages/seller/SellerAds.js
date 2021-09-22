import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ShopItem from '../admin/ShopItem';
import SellerItems from './SellerItems';

import Grid from '@material-ui/core/Grid';
// import { Container } from '@material-ui/core';

const ShopItemList = () => {
  // if (props.items.length === 0) {
  //   return <div className='place-list center'>No Items Found</div>;
  // }
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/shop/getItems')
      .then((res) => {
        // console.log(res.data);
        setShopItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {shopItems.map((shopItem) => (
        <Grid item xs={12} md={6} sm={4} lg={3} key={shopItem.id}>
          <SellerItems details={shopItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ShopItemList;
