import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

import { PostAdd, People, Storefront, Book } from '@material-ui/icons';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => {
  return {
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
    welcome: {
      flexGrow: 1, //Itll take up all the space horizontally available to it
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const AdminLeftNav = (props) => {
  const classes = useStyles();
  const history = useHistory(); //To link ListItems
  const location = useLocation(); //To Track Current Page

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/Admin',
    },
    {
      text: 'Customers',
      icon: <People />,
      path: '/Admin/Customers',
    },
    {
      text: 'Advertisements',
      icon: <PostAdd />,
      path: '/Admin/Advertisements',
    },
    {
      text: 'Registrations',
      icon: <Storefront />,
      path: '/Admin/Registrations',
    },
    {
      text: 'Add Blog',
      icon: <Book />,
      path: '/Admin/AddBlog',
    },
  ];

  return (
    <React.Fragment>
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
    </React.Fragment>
  );

  // return ReactDOM.createPortal(
  //   content,
  //   document.getElementById('leftNav-hook')
  // );
};

export default AdminLeftNav;
