import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    
  },
  tabs: {
    borderRight: '1px solid ${theme.palette.divider}',
    width: 400,
  },

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 500,
    height:200,
    
  },
  image: {
    width: 200,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function MyAccount() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        <Tab label="My Profile" {...a11yProps(0)} />
        
        
       
      </Tabs>
      <TabPanel value={value} index={0}>
      <Typography component="h1" variant="h5" style={{ color:'#42207A'}}>
          <b> MY PROFILE</b>
          </Typography>
          <Divider />
          <br></br>
      

     
          <Typography component="h2" variant="h6" style={{color:'black'}}>
          <b> Profile Details</b>
          </Typography> 
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
            /> 
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobileNumber"
              label="Mobile Number"
              name="mobileNumber"
              autoComplete="mobileNumber"
              autoFocus
            />
            <IconButton>
            <EditIcon style = {{color:'#42207A', fontSize: 40, }} />
            </IconButton>
            <IconButton>
            <DeleteIcon style = {{color:'#42207A', fontSize: 40, }} />
            </IconButton>
          <br></br>
          <Divider />

          <Typography component="h2" variant="h6" style={{color:'black'}}>
              <br></br>
          <b> Change Password</b>
          </Typography> 
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Current Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="newpassword"
              label="New Password"
              name="newpassword"
              autoComplete="newpassword"
              autoFocus
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="reenterpassword"
              label="Re-enter New Password"
              name="reenterpassword"
              autoComplete="Re-enter New Password"
              autoFocus
            />

            <Button
              type="submit"
              variant="contained"
              style={{backgroundColor:"#42207A", color:"#ffffff"}}
              className={classes.submit}
            >
             Change Password
            </Button>
            </TabPanel>


     
      
    </div>
  );
}