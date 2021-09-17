import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import StoreIcon from '@material-ui/icons/Store';
import ViewListIcon from '@material-ui/icons/ViewList';
import AddIcon from '@material-ui/icons/Add';
import { ListSubheader } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import BookIcon from '@material-ui/icons/Book';
import {Link} from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to= "/ShopDashboard">
      <ListItemIcon style={{color:'#42207A'}}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText style={{color:'#42207A'}} primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to= "/Orderlist">
      <ListItemIcon style={{color:'#42207A'}}>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText style={{color:'#42207A'}} primary="Orders" />
    </ListItem>
    <ListItem button component={Link} to= "/Additem">
      <ListItemIcon style={{color:'#42207A'}}>
        <AddIcon />
      </ListItemIcon >
      <ListItemText style={{color:'#42207A'}} primary="Add Item" />
    </ListItem>
    <ListItem button component={Link} to= "/Itemlist">
      <ListItemIcon style={{color:'#42207A'}}>
        <ViewListIcon />
      </ListItemIcon>
      <ListItemText style={{color:'#42207A'}} primary="Item List" />
    </ListItem>
    <ListItem button component={Link} to= "/Reports">
      <ListItemIcon style={{color:'#42207A'}}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText style={{color:'#42207A'}} primary="Reports" />
    </ListItem>
    <ListItem button component={Link} to= "/Itemlist">
      <ListItemIcon style={{color:'#42207A'}}>
        <StoreIcon />
      </ListItemIcon>
      <ListItemText style={{color:'#42207A'}} primary="View Shop" />
    </ListItem>
  </div>
);
export const SecondaryListItems = (
  <div>
    <ListSubheader inset>Website Information</ListSubheader>
    <ListItem button component={Link} to= "/Blog">
      <ListItemIcon style={{color:'#42207A'}}>
        <BookIcon />
      </ListItemIcon>
      <ListItemText style={{color:'#42207A'}} primary="Blog" />
    </ListItem>
    <ListItem button component={Link} to= "/About">
      <ListItemIcon style={{color:'#42207A'}}>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText style={{color:'#42207A'}} primary="About" />
    </ListItem>
    <ListItem button component={Link} to= "/Contact">
      <ListItemIcon style={{color:'#42207A'}}>
        <ContactsIcon />
      </ListItemIcon>
      <ListItemText style={{color:'#42207A'}} primary="Contact Us" />
    </ListItem>

  </div>
);
