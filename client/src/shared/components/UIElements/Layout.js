import React from 'react';
import MainNav from './MainNav';
import LeftNav from './AdminLeftNav';
import SellerLeftNav from './SellerLeftNav';
import { makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    page: {
      width: '100%',
      // padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  };
});

export default function Layout(props) {
  const classes = useStyles();
  const location = useLocation(); //To Track Current Page
  let admin = location.pathname.match('/Admin');
  let seller = location.pathname.match('/Seller');
  let user = location.pathname.match('/');
  let login = location.pathname.match('/Login');
  let signUp = location.pathname.match('/SignUp');
  let beforeSignUp = location.pathname.match('/BeforeSignUp');

  return (
    <div className={classes.root}>
      {user && !login && !signUp && !beforeSignUp && <MainNav />}
      {admin && <LeftNav />}
      {seller && <SellerLeftNav />}
      <div className={classes.page}>
        {!login && !signUp && !beforeSignUp && (
          <div className={classes.toolbar}></div>
        )}
        {props.children}
      </div>
    </div>
  );
}
