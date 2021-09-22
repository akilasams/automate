import React from 'react';
import './css/Seller.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';

const bull = (
  <Box
    component=''
    sx={{
      display: 'inline-block',
      mx: '2px',
      transform: 'scale(0)',
      align: 'left',
    }}
  >
    •
  </Box>
);

export default function Dashboard() {
  const [countofUsers, setcountofUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/user/getCount').then((response) => {
      setcountofUsers(response.data);
    });
  }, []);
  const [countofAds, setcountofAds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/shop/getAds').then((response) => {
      setcountofAds(response.data);
    });
  }, []);
  return (
    <Grid container spacing={20}>
      <Grid item xs={12} md={6} sm={4} lg={5}>
        <div className='user'>
          <Card sx={{ minWidth: 80, background: '#663399' }}>
            <CardContent>
              <Typography variant='h5' color='white' gutterBottom>
                My Customers
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <br></br>
          <Typography
            component='h6'
            variant='h6'
            align='center'
            marginLeft='-100'
            style={{ color: 'black' }}
          >
            {' '}
            Total No. of Customers: {countofUsers}
          </Typography>
          <br></br>
        </div>
      </Grid>
      <Grid item xs={12} md={6} sm={4} lg={3}>
        <div className='user'>
          <Card sx={{ minWidth: 80, background: '#663399', top: '8000' }}>
            <CardContent>
              <Typography variant='h5' color='white' gutterBottom>
                My Advertisements
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <br></br>
          <Typography
            component='h6'
            variant='h6'
            align='center'
            marginLeft='-100'
            style={{ color: 'black' }}
          >
            {' '}
            Total No. of Ads: {countofAds}
          </Typography>
          <br></br>
        </div>
      </Grid>
      <Chart />
    </Grid>
  );
}
