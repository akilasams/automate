import React from 'react';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import NavBar from '../components/NavBar';
//import clsx from 'clsx';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Additem from './additem';
import {Link} from 'react-router-dom';
import Sidemirror from '../images/sidemirror.jpg';
import Tire from '../images/tire.jpg';
//import { Image } from '@material-ui/icons';
//import sidemirror from './images/sidemirror.jpg'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'#42207A',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  editButton:{
    variant:"outlined" ,
    color:"primary"
  },
  deleteButton:{
    variant:"contained",
     color:"secondary"
  
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  
}))(TableRow);
function createData(id, name, price, brand, availability, type, condition, image, description, edit , remove) {
  return { id, name, price, brand, availability, type, condition, image, description,edit,remove};
}

const rows = [
  createData(0, 'Side Mirror', 312.44, 'Toyota Axio',24, 'Genuine','Brand new',<img  src={Sidemirror} alt="Sidemirror" style={{height:'10vh'}}  /> , 'Side mirrors for Toyota Axio 2018 version',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(1, 'Tire', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Tire} alt="Tire" style={{height:'10vh'}}/> , 'Side mirrors for Toyota Axio 2018 version ',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(2, 'Tire', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Tire} alt="Tire" style={{height:'10vh'}}/>, 'Side mirrors for Toyota Axio 2018 version ',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(3, 'Side Mirror', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Sidemirror} alt="Sidemirror" style={{height:'10vh'}}  />, 'Side mirrors for Toyota Axio 2018 version ',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(4, 'Side Mirror', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Sidemirror} alt="Sidemirror" style={{height:'10vh'}}  />, 'Side mirrors for Toyota Axio 2018 version ',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(5, 'Tire', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Tire} alt="Tire" style={{height:'10vh'}}/>, 'Side mirrors for Toyota Axio 2018 version ',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(6, 'Side Mirror', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Sidemirror} alt="Sidemirror" style={{height:'10vh'}}  />, 'Side mirrors for Toyota Axio 2018 version ',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(7, 'Side Mirror', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Sidemirror} alt="Sidemirror" style={{height:'10vh'}}  />, 'Side mirrors for Toyota Axio 2018 version ',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(8, 'Side Mirror', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Sidemirror} alt="Sidemirror" style={{height:'10vh'}}  />, 'Side mirrors for Toyota Axio 2018 version ',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(9, 'Side Mirror', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Sidemirror} alt="Sidemirror" style={{height:'10vh'}}  />, 'Side mirrors for Toyota Axio 2018 version ',<IconButton component={Link} to= "/Additem" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  createData(10, 'Side Mirror', 312.44, 'Toyota Axio',24, 'Genuine','Brand new', <img  src={Sidemirror} alt="Sidemirror" style={{height:'10vh'}}  />, 'Side mirrors for Toyota Axio 2018 version ',<IconButton  style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  
];

const useStyles = makeStyles((theme) => ({
  root: {
      //backgroundColor:'#C7F2F4',
      display: 'flex',
    },
  appBarSpacer: theme.mixins.toolbar,
  content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
  },
  container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
  },
  paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      
    },
    fixedHeight: {
      height: 240,
    },
    table: {
      minWidth: 1000,
      
    },
    

}));

export default function Itemlist(){
  const classes = useStyles();
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return(
    
       <div className={classes.root}>
       <NavBar/>
       <div className="table" style={{position:'relative',top:'15vh',left:'3vw'}}>
       <TableContainer component={Paper}>
       <h2 style={{color:'#42207A' , textAlign: "center"}}>Selling Item List</h2>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell>Brand</StyledTableCell>
            <StyledTableCell align="right">Availability</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Condition</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Edit</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.id}
            </StyledTableCell>
            <StyledTableCell>{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.price}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{row.brand}</StyledTableCell>
            <StyledTableCell align="right">{row.availability}</StyledTableCell>
            <StyledTableCell>{row.type}</StyledTableCell>
            <StyledTableCell component="th" scope="row"> {row.condition}</StyledTableCell>
            <StyledTableCell >{row.image}</StyledTableCell>
            <StyledTableCell >{row.description}</StyledTableCell>
            <StyledTableCell >{row.edit}</StyledTableCell>
            <StyledTableCell >{row.remove}</StyledTableCell>
            
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
       </div>
       </div>
       );    
      }