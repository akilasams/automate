import React from 'react';
import "./css/Admin.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useEffect, useState } from 'react';

const bull = (
  <Box
    component=""
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0)' }}
  >
    •
  </Box>
);

export default function Dashboard() {
  const [listofUsers, setlistofUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/user").then((response) => {
       setlistofUsers(response.data);
       
    });
  }, [])
  return <div className="users">{listofUsers.map((value, key) => {
    return (
       <div className="user">
      <Card sx={{ minWidth: 100}}>
      <CardContent>
      <Typography variant="h5" color="text.secondary" gutterBottom>
      Customers
      </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}>First Name:  {value.firstName}</Typography>
      
      <br></br>
      </div>
  );
  })} 
  </div>  
};


