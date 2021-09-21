import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ShopItem from './ShopItem';

import Grid from '@material-ui/core/Grid';
// import { Container } from '@material-ui/core';

const ShopItemList = () => {
  // if (props.items.length === 0) {
  //   return <div className='place-list center'>No Items Found</div>;
  // }
<<<<<<< HEAD
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/shop/getShopItems')
      .then((res) => {
        // console.log(res.data);
        setShopItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
=======
  const { authState } = useContext(AuthContext);
  const [shopItems, setShopItems] = useState([]);

  async function fetchItemsHandler() {
    // axios
    //   .get('http://localhost:3001/shop/getItems')
    //   .then((res) => {
    //     // console.log(res.data);
    //     setShopItems(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const response = await fetch('http://localhost:3001/shop/getItems');
    const data = await response.json();
    setShopItems(data);
  }

  useEffect(() => {
    fetchItemsHandler();
>>>>>>> map display done
  }, []);

  return (
    <Grid container spacing={2}>
      {shopItems.map((shopItem) => (
        <Grid item xs={12} md={6} sm={4} lg={3} key={shopItem.id}>
<<<<<<< HEAD
          <ShopItem details={shopItem} />
=======
          {shopItem.userId !== authState.id && <ShopItem details={shopItem} />}
>>>>>>> map display done
        </Grid>
      ))}
    </Grid>
  );
};

export default ShopItemList;
