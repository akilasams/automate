import React from 'react';

import ShopItem from './ShopItem';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const ShopItemList = (props) => {
  // if (props.items.length === 0) {
  //   return <div className='place-list center'>No Items Found</div>;
  // }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <ShopItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ShopItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ShopItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ShopItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ShopItem />
      </Grid>
    </Grid>
  );
};

export default ShopItemList;
