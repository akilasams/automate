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
import BeforeSignUp from '../../../pages/user/components/BeforeSignUp';

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      backgroundColor: '#fff',
    },
    navlinks: {
      display: 'flex',
      flexFlow: 'row',
    },
    button: {
      marginLeft: 5,
      marginRight: 5,
      height: '40px',
      width: '100px',
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
  };
});

const MainNav = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

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
        <div>
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
          >
            <Link to='/Login' style={{ textDecoration: 'none', color: '#fff' }}>
              LOGIN
            </Link>
          </Button>
          <Button className={classes.button} color='primary' variant='outlined'>
            <Link to='/BeforeSignUp' style={{ textDecoration: 'none' }}>
              SIGN UP
            </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
