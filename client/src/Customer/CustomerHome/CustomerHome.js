import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container } from '@material-ui/core';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import ImageSlider from '../components/ImageSlider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Footer from '../components/footer';
import Navbar from '../components/navbar';


import Box from '@material-ui/core/Box';
import { SliderData } from '../components/SliderData';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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




export default function CustomerHome() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
 
  return (
    
    <div className="App">
      <Navbar />

    <ImageSlider slides={SliderData} />;
     

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vw">
        <Typography component="div" style={{  backgroundColor: '#ffffff', height: '80vh' }} />
        <div className="mostpopular">
         MOST POPULAR ITEMS
         </div>
         
         <Grid container justify="center">
         <div className="paper">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
           <Grid item>
             <ButtonBase className={classes.image}>
             <img className={classes.img} alt="complex" src="https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1">
                  Spare parts seller's name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Vehicle Engine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  View
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
      <div className="paper1">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
           <Grid item>
             <ButtonBase className={classes.image}>
             <img className={classes.img} alt="complex" src="https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1">
                  Spare parts seller's name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Vehicle Engine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  View
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
      <div className="paper2">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
           <Grid item>
             <ButtonBase className={classes.image}>
             <img className={classes.img} alt="complex" src="https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1">
                  Spare parts seller's name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Vehicle Engine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  View
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
    
      <div className="paper3">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
           <Grid item>
             <ButtonBase className={classes.image}>
             <img className={classes.img} alt="complex" src="https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1">
                  Spare parts seller's name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Vehicle Engine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  View
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
    
      <div className="paper4">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
           <Grid item>
             <ButtonBase className={classes.image}>
             <img className={classes.img} alt="complex" src="https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1">
                  Spare parts seller's name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Vehicle Engine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  View
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
    
      <div className="paper5">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
           <Grid item>
             <ButtonBase className={classes.image}>
             <img className={classes.img} alt="complex" src="https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1">
                  Spare parts seller's name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Vehicle Engine
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  View
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
    
      </Grid>
        
      </Container>
    </React.Fragment>
    
       <Footer />
   </div>
 
   );
}