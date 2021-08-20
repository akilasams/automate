import React from 'react';
import { makeStyles } from '@material-ui/core';
import * as yup from 'yup';

const useStyle = makeStyles({
  field: {
    margin: 10,
    width: '70%',
  },
});

function SignUp() {
  const classes = useStyle();

  return (
    <div className='login-form-container'>
      <div className='img-container'>
        <img src='./images/vehicle-repair-register.jpg' alt='What we do' />
      </div>
    </div>
  );
}

export default SignUp;
