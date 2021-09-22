import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpAdmin from './components/SignUpAdmin';
import SignUpFormShop from './components/SignUpFormShop';
import SignUpFormIndi from './components/SignUpFormIndi';
import BeforeSignUp from './components/BeforeSignUp';
import { makeStyles } from '@material-ui/core';

import './forms.css';

const useStyle = makeStyles({
  root: {
    display: 'flex',
  },
});

function AuthForm() {
  const classes = useStyle();

  const location = useLocation(); //To Track Current Page
  let login = location.pathname.match('/Login');
  let beforeSignUp = location.pathname.match('/BeforeSignUp');
  let signUpShop = location.pathname.match('/SignUpShop');
  let signUpIndi = location.pathname.match('/SignUpIndi');
  let signUpAdmin = location.pathname.match('/SignUpAdmin');

  return (
    <div className={classes.root}>
      <div className='img-container'>
        <img src='./images/Vehicle-Repair.jpg' alt='What We Do' />
      </div>
      {login && <LoginForm />}
      {signUpShop && <SignUpFormShop />}
      {signUpIndi && <SignUpFormIndi />}
      {/* {signUpAdmin && <SignUpAdmin />} */}
      {beforeSignUp && <BeforeSignUp />}
    </div>
  );
}

export default AuthForm;
