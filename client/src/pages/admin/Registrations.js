import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import RegShop from './RegShop';

import Grid from '@material-ui/core/Grid';
// import { Container } from '@material-ui/core';

const RegShopList = () => {
  // if (props.items.length === 0) {
  //   return <div className='place-list center'>No Items Found</div>;
  // }
  const [regShops, setRegShops] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/shop/getShops')
      .then((res) => {
        // console.log(res.data);
        setRegShops(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {regShops.map((regshop) => (
        <Grid item xs={12} md={6} sm={4} lg={3} key={regshop.id}>
          <RegShop details={regshop} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RegShopList;
