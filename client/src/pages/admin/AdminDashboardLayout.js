import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

import { PostAdd, People, Storefront, Book } from '@material-ui/icons';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    page: {
      width: '100%',
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#dcc7ff',
    },
    title: {
      padding: theme.spacing(2),
    },
    icon: {
      color: theme.palette.primary.main,
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar, //All classes associated with Toolbar
    welcome: {
      flexGrow: 1, //Itll take up all the space horizontally available to it
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

export default function AdminDashboardLayout({ children }) {
  const classes = useStyles();
  const history = useHistory(); //To link ListItems
  const location = useLocation(); //To Track Current Page

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/Dashboard',
    },
    {
      text: 'Customers',
      icon: <People />,
      path: '/Customers',
    },
    {
      text: 'Advertisements',
      icon: <PostAdd />,
      path: '/Advertisements',
    },
    {
      text: 'Registrations',
      icon: <Storefront />,
      path: '/Registrations',
    },
    {
      text: 'Add Blog',
      icon: <Book />,
      path: '/AddBlog',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.welcome}>
            Welcome to Admin Dashboard
          </Typography>
          <Typography>Admin Name</Typography>
          <Avatar src='/images/guy.jpg' className={classes.avatar} />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Akila
          </Typography>
        </div>

        <List>
          {menuItems.map((listItem) => (
            <ListItem
              key={listItem.text}
              button
              onClick={() => history.push(listItem.path)}
              className={
                location.pathname == listItem.path ? classes.active : null
              }
            >
              <ListItemIcon className={classes.icon}>
                {listItem.icon}
              </ListItemIcon>
              <ListItemText primary={listItem.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
