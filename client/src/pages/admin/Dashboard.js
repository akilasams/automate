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
import Sales from './Sales.js';
import Grid from '@material-ui/core/Grid';


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

  const [countofUsers, setcountofUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/user/getCount").then((response) => {
       setcountofUsers(response.data);
       
    });
  }, [])

  return <div className="users">{listofUsers.map((value, key) => {
    return (
       

      <Sales/>
      
  );
  })} 
  </div>  
};


