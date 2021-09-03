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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import {Select,MenuItem } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import cable from '../images/cable.jpg';
import headlamp from '../images/HeadLamp.jpg';
import Verticalg from '../images/Verticalg.jpg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Footer from '../components/footers';
import {Link} from "react-router-dom";
import Navbar from '../components/navbar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  filter: {
    marginTop:'4%',
    width: '40%',
    marginLeft: '30%',
    backgroundColor: purple,
  
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 500,
    height: 270,
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
     <Navbar />
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vw">
        <Typography component="div" style={{ backgroundColor: '#ffffff', height: '0vh' }} />
      </Container>
    </React.Fragment>
  
    <div className="searchbar">
    <Tab aria-label="Searchicon" style={{color:'#42207A'}} icon={<SearchIcon/>} {...a11yProps(5)} />
    <input type="text" placeholder = "Search..."/>
    </div>

    <div className={classes.filter}>
      <AppBar position="static" style={{ backgroundColor: '#CBC3E3' }} className="AppBar">
        <Toolbar>
          <Typography variant="h6" className={classes.title}style={{textAlign:'center',color:'#42207A'}}>
          <Select value ={course}
            displayEmpty
            onChange= {updateSelectVal}
          >
            <MenuItem value="" disabled>Brand</MenuItem>
            <MenuItem value={1}>Toyota</MenuItem>
            <MenuItem value={2}>Mercedes-Benz</MenuItem>
            <MenuItem value={3}>Nissan</MenuItem>
            <MenuItem value={4}>BMW</MenuItem>
            </Select>
  
          </Typography>
          <Typography variant="h6" className={classes.title}style={{textAlign:'center',color:'#42207A'}}>
          <Select value ={course}
          displayEmpty
          onChange= {updateSelectVal}
          >
          <MenuItem value="" disabled>Year</MenuItem>
          <MenuItem value={5}>2000</MenuItem>
          <MenuItem value={6}>2008</MenuItem>
          <MenuItem value={7}>1990</MenuItem>
          <MenuItem value={8}>1980</MenuItem>
          </Select>
          </Typography>
          <Typography variant="h6" className={classes.title}style={{textAlign:'center',color:'#42207A'}}>
          <Select value ={course}
          displayEmpty
          onChange= {updateSelectVal}
          >
          <MenuItem value="" disabled>Area</MenuItem>
          <MenuItem value={9}>Colombo</MenuItem>
          <MenuItem value={10}>Panadura</MenuItem>
          <MenuItem value={11}>Avissawella</MenuItem>
          <MenuItem value={12}>Homagama</MenuItem>
          </Select>
          </Typography>
          <Typography variant="h6" className={classes.title}style={{textAlign:'center',color:'#42207A'}}>
          <Select value ={course}
          displayEmpty
          onChange= {updateSelectVal}
          >
          <MenuItem value="" disabled>Condition</MenuItem>
          <MenuItem value={13}>Good</MenuItem>
          <MenuItem value={14}>Satisfactory</MenuItem>
          <MenuItem value={15}>Moderate</MenuItem>
          <MenuItem value={16}>Best</MenuItem>
          </Select>
          </Typography>
          <Typography variant="h6" className={classes.title}style={{textAlign:'center',color:'#42207A'}}>
          <Select value ={course}
          displayEmpty
          onChange= {updateSelectVal}
          >
          <MenuItem value="" disabled>Rating</MenuItem>
          <MenuItem value={17}>80% -100%</MenuItem>
          <MenuItem value={18}>60% - 80%</MenuItem>
          <MenuItem value={19}>40% - 60%</MenuItem>
          <MenuItem value={20}>20% - 40%</MenuItem>
          </Select>
          </Typography>
          <Typography variant="h6" className={classes.title}style={{textAlign:'center',color:'#42207A'}}>
          <Select value ={course}
          displayEmpty
          onChange= {updateSelectVal}
          >
          <MenuItem value="" disabled>Sort by</MenuItem>
          <MenuItem value={21}>Manufacturer</MenuItem>
          <MenuItem value={22}>Vehicle Type</MenuItem>
          <MenuItem value={23}>Location</MenuItem>
          </Select>
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
<React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vw">
        <Typography component="div" style={{  backgroundColor: '#ffffff', height: '10vh',width:'100%', fontSize: '30px' }} />
        <div className="sale">
         <b>Items on Sale</b>
         </div> 
         <Grid container justify="center">
         <div className="papers">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
           <Grid item>
             <ButtonBase className={Verticalg}>
             <img src={Verticalg} alt="Verticalg" style={{  height: '25vh',width:'15vw',alignItems:'revert',left:'20vw'}}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1">
                <b>Mercedes - Vertical Grille</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                Mercedes E Class W213 W238 Sedan
                </Typography>
              </Grid>
              <Grid item>
              <b>Rs. 38 000/=</b>
              </Grid>
              <Grid item>
              <Button component ={Link} to= "/Payment" style={{ backgroundColor: '#ffffff',color:"#42207A",borderBlockColor:"#42207A",border: "2px solid #42207A",top:'3%'}} ><b>View More </b></Button>
              </Grid>
            </Grid>
          
          </Grid>
        </Grid>
      </Paper>
      </div>
         <div className="paper6">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
           <Grid item>
             <ButtonBase className={headlamp}>
             <img src={headlamp} alt="headlamp" style={{  height: '25vh',width:'15vw',alignItems:'revert'}}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1">
                <b>Toyota - Head Lamp</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                TOYOTA HILUX REVO 2015 Toyota genuine part number (81150-0K681)
                </Typography>
              </Grid>
              <Grid item>
              <b>Rs. 6 000/=</b>
              </Grid>
              <Grid item>
              <Button component ={Link} to= "/Payment" style={{ backgroundColor: '#ffffff',color:"#42207A",borderBlockColor:"#42207A",border: "2px solid #42207A",top:'3%'}} ><b>View More </b></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
      <div className="paper7">
         <Paper className={classes.paper}>
         <Grid container spacing={2}>
           <Grid item>
             <ButtonBase className={cable}>
             <img src={cable} alt="cable" style={{ height: '25vh',width:'15vw',alignItems:'revert'}}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item sm>
                <Typography gutterBottom variant="subtitle1">
                <b>Suzuki Swift - Gear Cable</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Gear Cable - TSK 2013-2016
                </Typography>
              </Grid>
              <Grid item>
              <b>Rs. 8 000/=</b>
              </Grid>
              <Grid item>
              <Button component ={Link} to= "/Payment" style={{ backgroundColor: '#ffffff',color:"#42207A",borderBlockColor:"#42207A",border: "2px solid #42207A",top:'3%'}} ><b>View More </b></Button>
              </Grid>
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
