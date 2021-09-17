import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import "./css/Admin.css";

 function Advertisements() {
  const [listofAds, setlistofAds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/ads").then((response) => {
       setlistofAds(response.data);
    });
  }, [])
  return <div className="Ads">{listofAds.map((value, key) => {
    return (
       <div className="ad">
      <Typography component="h6" variant="h5" align="left"> <div className="title">General Details</div></Typography>
      <br></br>
      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}> Title: {value.name}</Typography> 
      
      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}>Description: {value.description}</Typography>
      
      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}>Unit Price: Rs.{value.price} </Typography>
     
      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}>Quantity Available: {value.quantity} </Typography>
      
      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}>Condition: {value.condition} </Typography>
      
      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}>Category: {value.category} </Typography>
      
      <Typography component="h6" variant="h5" align="left"> <div className="title">Vehicle Details for the Spare Part</div></Typography>
      <br></br>
      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}> Model: {value.vehicleModel} </Typography>

      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}> Manufactured Year: {value.year} </Typography>

      <Typography component="h6" variant="h6" align="left" style={{ color: 'black' }}> Manufactured Country: {value.country} </Typography>
      </div>
  );
  })} 
  </div>  
};
export default Advertisements;
