import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import { Container } from '@material-ui/core';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types'; 
import Box from '@material-ui/core/Box';
import PlaceIcon from '@material-ui/icons/Place';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import CallIcon from '@material-ui/icons/Call';
import headlamp from '../images/HeadLamp.jpg';
import Verticalg from '../images/Verticalg.jpg';
import Grid from '@material-ui/core/Grid';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Footer from '../components/footerp';
import {Link} from "react-router-dom";
import Navbar from '../components/navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  card: {

    marginTop: -150,
    marginLeft:545,
    width: 400,
    color: '#CBC3E3',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 1000,
    height: 620,
    marginTop: 80,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  
  const updateSelectVal=(e)=>{
    console.warn(e.target.value)
    setCourse(e.target.value)

  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
 const [course, setCourse]=React.useState("")
 
  return (
    <div className="App">
  <Navbar/>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vw">
        <Typography component="div" style={{ backgroundColor: '#ffffff', height: '0vh' }} />
      </Container>
    </React.Fragment>
    
<React.Fragment>
      <CssBaseline />
      <Container maxWidth="300vw">
        <Typography component="div" style={{  backgroundColor: '#ffffff', height: '0vh', fontSize: '10px' }} />
         <Grid container justify="center">
         <div className="paperP">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
         <Grid item xs container direction="row" spacing={2}>
           <Grid item>
           <Typography gutterBottom variant="subtitle1" style={{fontSize: 30}}>
                <b>Toyota - Head Lamp</b>
                </Typography>
             <ButtonBase className={Verticalg}>
             <img src={headlamp} alt="headlamp" style={{  height: '42vh',width:'30vw',alignItems:'revert',left:'2vw'}}/>
            </ButtonBase>
          </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1" style={{fontSize: 10}}>
                </Typography>
              </Grid>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1" style={{fontSize: 20}}>
                For Sale By <b>Auto Mirage PVT Ltd.</b>
                </Typography>
              </Grid>
              <Grid item sm>
              <IconButton>
               <ChatIcon style = {{color:'#42207A', fontSize: 20, marginLeft: '20px' }} />
               <Typography gutterBottom variant="subtitle1" style={{}}>
                <b>Chat with Seller</b>
                </Typography>
             </IconButton>
              </Grid>
              <Grid item sm>
              <IconButton>
               <CallIcon style = {{color:'#42207A', fontSize: 20, marginLeft: '20px' }} />
               <Typography gutterBottom variant="subtitle1" style={{}}>
                <b>Contact Seller</b>
                </Typography>
             </IconButton>
              </Grid>
              <Grid item sm>
              <IconButton>
               <PlaceIcon style = {{color:'#42207A', fontSize: 23, marginLeft: '20px' }} />
               <Typography gutterBottom variant="subtitle1" style={{}}>
                <b>No: 82, Honiton Place, Avissawella</b>
                </Typography>
             </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={0.5}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1" style={{fontSize: 10}}>
                </Typography>
              </Grid>

              <Grid item sm>
               <Typography gutterBottom variant="subtitle1" style={{}}>
                Condition: <b>New</b>
                </Typography>
              </Grid>
              <Grid item sm>
               <Typography gutterBottom variant="subtitle1" style={{}}>
                Genuine: <b>Yes</b>
                </Typography>
              </Grid>
              <Grid item sm>
               <Typography gutterBottom variant="subtitle1" style={{}}>
                Quantity: <b>1</b>
                </Typography>
              </Grid>
              <Grid item sm>
             <Typography gutterBottom variant="subtitle1" style={{}}>
             <b>Statement:</b> Suzuki S-CROSS 2018 HEAD LAMPS and all other parts available at your most reliable automobile partner. 
            </Typography>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs container direction="column" spacing={2}>
           <Grid item style={{color:'#006400' }}> 
           <Grid item sm >
                <Typography gutterBottom variant="subtitle1" style={{fontSize: 20}}>
                </Typography>
              </Grid>
              <Grid item sm> 
              </Grid>
              <Grid item sm> 
              <Typography gutterBottom variant="subtitle1" style={{fontSize: 18, color: '	#006400'}}>
              
             
              </Typography>
              </Grid>
          </Grid>
          </Grid>
        </Grid>
        <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="subtitle1" style={{fontSize: 20, color: '	#006400'}}>
                Price: <b>Rs. 6 000/=</b>
                <Typography gutterBottom variant="subtitle1" style={{fontSize: 18, color: '	#006400'}}>
              Order Online :
              <Button component ={Link} to= "/Cart" style={{ backgroundColor: '#42207A',color:"#ffffff", left: '20px' }} >ADD TO CART</Button>
              </Typography>
              </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
      </Paper>
      <Typography></Typography>
      <Typography gutterBottom variant="subtitle1" style={{fontSize: 13}}>
                Copyright <CopyrightIcon style = {{ fontSize:10}} /> Automate 2021
      </Typography>
      </div>
      </Grid>
      </Container>   
    </React.Fragment>
    <Footer/>
</div>

   );
}
