import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import './css/Admin.css';

function Users() {
  const [listofUsers, setlistofUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/user/getAllUsers').then((response) => {
      setlistofUsers(response.data);
    });
  }, []);

  return (
    <div className='Users'>
      {listofUsers.map((value, key) => {
        return (
          <div className='user'>
            <Typography component='h6' variant='h5' align='left'>
              {' '}
              <div className='title'>{value.name} Customer </div>
            </Typography>
            <Typography
              component='h6'
              variant='h6'
              align='left'
              style={{ color: 'black' }}
            >
              First Name: {value.firstName}
            </Typography>

            <Typography
              component='h6'
              variant='h6'
              align='left'
              style={{ color: 'black' }}
            >
              Last Name: {value.lastName}
            </Typography>

            <Typography
              component='h6'
              variant='h6'
              align='left'
              style={{ color: 'black' }}
            >
              Mobile Number: {value.mobileNumber}
            </Typography>

            <Typography
              component='h6'
              variant='h6'
              align='left'
              style={{ color: 'black' }}
            >
              Address: {value.address}
            </Typography>

            <Typography
              component='h6'
              variant='h6'
              align='left'
              style={{ color: 'black' }}
            >
              Email : {value.email}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}
export default Users;
