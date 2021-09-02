import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext';
// import axios from 'axios';
// import { useEffect } from 'react';
// import BeforeSignUp from '../../../pages/user/components/BeforeSignUp';

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      backgroundColor: '#fff',
    },
    navlinks: {
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center',
    },
    button: {
      marginLeft: 5,
      marginRight: 5,
      height: '40px',
      width: '100px',
    },
    postAdButton: {
      marginLeft: 5,
      marginRight: '15px',
      height: '40px',
      width: '120px',
    },
    list: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-around',
      marginRight: '30px',
    },
    listitem: {
      // display: 'flex',
      color: theme.palette.primary.main,
      width: 'inherit',
      height: '40px',
      // justifyContent: 'center',
    },
    title: {
      color: theme.palette.primary.main,
      fontWeight: 'bolder',
      flexGrow: 1,
    },
    navlink: {
      textDecoration: 'none',
      borderRadius: '4px',
    },
    active: {
      backgroundColor: '#e5d5ff',
      color: '#fff',
    },
    space: {
      flexGrow: 1,
    },
    signedIn: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.primary.main,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const MainNav = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  // const [authState, setAuthState] = useState(false);
  const { authState, setAuthState, user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/user/auth', {
  //       headers: {
  //         accessToken: localStorage.getItem('accessToken'),
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.error) {
  //         setAuthState(false);
  //       } else {
  //         setAuthState(true);
  //       }
  //     });
  // });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setAnchorEl(null);
    localStorage.removeItem('accessToken');
    setAuthState(false);
  };

  const menuItems = [
    {
      text: 'ABOUT',
      path: '/About',
    },
    {
      text: 'CONTACT US',
      path: '/ContactUs',
    },
    {
      text: 'BLOG',
      path: '/Blog',
    },
    {
      text: 'SHOP',
      path: '/Shop',
    },
  ];

  if (location.pathname.match('/Admin')) {
    return null;
  }

  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        <Button onClick={() => history.push('/')}>
          <Typography className={classes.title}>AUTOMATE</Typography>
        </Button>
        <div className={classes.space}></div>
        <List className={classes.list}>
          {menuItems.map((listItem) => (
            <NavLink
              to={listItem.path}
              className={classes.navlink}
              activeClassName={classes.active}
              key={listItem.text}
            >
              <ListItem
                className={classes.listitem}
                // onClick={() => history.push(listItem.path)}
              >
                <ListItemText primary={listItem.text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        {!authState ? (
          <div>
            <Button
              className={classes.button}
              color='primary'
              variant='contained'
            >
              <Link
                to='/Login'
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                LOGIN
              </Link>
            </Button>
            <Button
              className={classes.button}
              color='primary'
              variant='outlined'
            >
              <Link to='/BeforeSignUp' style={{ textDecoration: 'none' }}>
                SIGN UP
              </Link>
            </Button>
          </div>
        ) : (
          <div className={classes.navlinks}>
            <Button
              className={classes.postAdButton}
              color='primary'
              variant='contained'
            >
              <Link to='' style={{ textDecoration: 'none', color: '#fff' }}>
                Post an Ad
              </Link>
            </Button>
            <Typography
              color='primary'
              style={{ marginRight: '8px', fontWeight: 'bold' }}
            >
              {user.firstName}
            </Typography>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle color='primary' />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={logout}>Sign Out</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
