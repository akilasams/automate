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
import Map from './Map';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../helpers/AuthContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Modal from './Modal';
import PostAnAdForm from '../../../pages/user/components/PostAnAdForm';
// import axios from 'axios';
// import { useEffect } from 'react';
// import BeforeSignUp from '../../../pages/user/components/BeforeSignUp';
import Profile from '../../../pages/user/Profile';

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
    // buttonSubmit: {
    //   margin: 7,
    //   width: '500px',
    // },
  };
});

const MainNav = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const { authState, setAuthState } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const open = Boolean(anchorEl);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

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
    history.push('/');
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

  const coordinates = {
    lat: 6.927079,
    lng: 79.861244,
  };

  return (
    <AppBar className={classes.appbar}>
      <Modal
        show={showMap}
        header='Find Nearby Shops'
        onCancel={closeMapHandler}
        footer={
          <Button
            className={classes.gotToHomeButton}
            color='primary'
            variant='contained'
            onClick={closeMapHandler}
          >
            Close Map
          </Button>
        }
      >
        <Map center={coordinates} zoom={16} />
      </Modal>
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
              <ListItem className={classes.listitem}>
                <ListItemText primary={listItem.text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Button
          className={classes.postAdButton}
          color='primary'
          variant='contained'
          onClick={openMapHandler}
          disableElevation
        >
          Open Map
        </Button>
        {!authState.status ? (
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
          <React.Fragment>
            {/* <Modal
              show={showPostAd}
              onCancel={closePostAdHandler}
              header='Post An Ad'
            >
              <PostAnAdForm />
            </Modal> */}
            <div className={classes.navlinks}>
              {authState.userRole === 'Shop' && (
                <Button
                  className={classes.postAdButton}
                  color='primary'
                  variant='contained'
                  disableElevation
                >
                  <Link
                    to='/PostAnAd'
                    style={{ textDecoration: 'none', color: '#fff' }}
                  >
                    Post an Ad
                  </Link>
                </Button>
              )}
              <Typography
                color='primary'
                style={{ marginRight: '8px', fontWeight: 'bold' }}
              >
                {authState.firstName}
              </Typography>
              <IconButton>
                <Link to='/Cart'>
                  <ShoppingCartIcon color='primary' />
                </Link>
              </IconButton>
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
                <MenuItem onClick={handleClose}>
                  <Link to='/Profile' style={{ textDecoration: 'none' }}>
                    My Profile
                  </Link>
                </MenuItem>
                {authState.userRole === 'Shop' && (
                  <MenuItem onClick={handleClose}>
                    <Link to='/Seller' style={{ textDecoration: 'none' }}>
                      Dashboard
                    </Link>
                  </MenuItem>
                )}
                <MenuItem onClick={logout}>Sign Out</MenuItem>
              </Menu>
            </div>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
