import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    page: {
      width: '100%',
      padding: theme.spacing(3),
    },
    appbar: {
      backgroundColor: '#fff',
    },
    toolbar: theme.mixins.toolbar,
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

export default function HomeLayout({ children }) {
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

  return (
    <div className={classes.root}>
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
              LOGIN
            </Button>
            <Button
              className={classes.button}
              color='primary'
              variant='outlined'
            >
              SIGN UP
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
