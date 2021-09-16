
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
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';


const useTableStyles = makeStyles({
  tableT: {
    Width: 600,
  },
});

function createData(date, item, price, quantity, payment, remove) {
  return {date, item, price, quantity, payment, remove };
}

const rows = [
  createData('16 July, 2021', 'Head Lamp', 6000, 1, <Button style={{variant:"contained", backgroundColor:"#FF0000", color:'white'}}>Not Completed</Button>,<IconButton style={{color:'red'}} ><DeleteIcon/></IconButton>),
  createData('01 June, 2021', 'Cable', 2000, 1, <Button style={{variant:"contained", backgroundColor:"#006400", color:'white'}}>Completed</Button>,<IconButton style={{color:'red'}} ><DeleteIcon/></IconButton>),
  createData('02 May, 2021', 'Ball Joint', 4000, 1, <Button style={{variant:"contained", backgroundColor:"#006400", color:'white'}}>Completed</Button>,<IconButton style={{color:'red'}} ><DeleteIcon/></IconButton>),
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,  
  },

  table:{

    width:'100%',
    
  },
  card: {

    marginTop: 10,
    marginLeft:1057,
    width: 425,
    backgroundColor:'ffffff' ,
    color: '#ffffff', 
    height: 100,
    
  },
  Paper: {
    padding: theme.spacing(2),
    width: '95%',
    height: 400,
    marginLeft: '36px',
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
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
 const [course, setCourse]=React.useState("")
 
  return (
    <div className="App">
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vw">
        <Typography component="div" style={{ backgroundColor: '#ffffff', height: '0vh' }} />
      </Container>
    </React.Fragment>
   
  <div>
  <Typography variant="h4" className={classes.title}style={{color:'#42207A' , marginTop: '3%', marginLeft:'48%' }}>
           <b>Your Cart</b> 
  </Typography>
  <Typography variant="h6" className={classes.title}style={{color:'#42207A' , marginTop: '3%'}}>
  </Typography>
  </div>
  <TableContainer component={Paper} className={classes.Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Item</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="center">{row.item}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.remove}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>
    <Card className={classes.card}>
    <CardActions>
    <Button component ={Link} to= "/Shop" style={{variant:"contained", backgroundColor:"#CBC3E3", color:'#000000'}}>CONTINUE SEARCH</Button>
    <Button style={{variant:"contained", backgroundColor:"#CBC3E3", color:'#000000'}}>UPDATE ORDER</Button>
    <Button style={{variant:"contained", backgroundColor:"#42207A", color:'white'}}>PAY ONLINE</Button>
      </CardActions>
      <CardContent>
          <Typography variant="body4" color="textSecondary" component="p" align="left">
            Delivery charges included and added to the payment
          </Typography>
        </CardContent>
    </Card>
    </div>
  </div>

   );
}

