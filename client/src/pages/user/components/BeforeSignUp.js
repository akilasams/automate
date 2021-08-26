import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function BeforeSignUp() {
  return (
    <form className='form-container'>
      <div className='logo-container'>
        <img src='./images/logo.png' alt='Automate' />
      </div>
      <p>Welcome to Automate!</p>
      <Button
        color='primary'
        variant='contained'
        style={{ width: '60%', margin: '5px' }}
      >
        <Link
          to='/SignUpIndi'
          style={{ textDecoration: 'none', color: '#fff' }}
        >
          I'M A CUSTOMER
        </Link>
      </Button>
      <Button
        color='primary'
        variant='contained'
        style={{ width: '60%', margin: '5px' }}
      >
        <Link
          to='/SignUpIndi'
          style={{ textDecoration: 'none', color: '#fff' }}
        >
          I'M AN INDIVIDUAL SELLER
        </Link>
      </Button>
      <Button
        color='primary'
        variant='contained'
        style={{ width: '60%', marginTop: '5px', marginBottom: '10px' }}
      >
        <Link
          to='/SignUpShop'
          style={{ textDecoration: 'none', color: '#fff' }}
        >
          I OWN A SHOP
        </Link>
      </Button>
    </form>
  );
}

export default BeforeSignUp;
