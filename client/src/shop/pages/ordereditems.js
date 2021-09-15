import React from 'react';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
//import { IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import NavBar from '../components/NavBar';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
function createData(id, name, unitprice,quantity, amount ) {
  return { id, name, unitprice,quantity, amount};
}

const rows = [
  createData(0,'Side mirror', '1200.00', 2, '2400.00 '),
  createData(1,'Tire', '2200.00', 1, '2200.00 '),
  createData(2,'Side mirror', '1200.00', 2, '2400.00'),
  createData(3, 'Side mirror', '1200.00', 2, '2400.00'),
  createData(4,'Tire', '2200.00', 1, '2200.00'  ),
  createData(5,'Tire', '2200.00', 1, '2200.00'  ),
  
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

export default function OrderedItemlist(){
  const classes = useStyles();
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return(
    
       <div className={classes.root}>
       <NavBar/>
       <div className="table" style={{position:'relative',top:'15vh',left:'5vw'}}>
       <TableContainer component={Paper}>
       <h2 style={{color:'#42207A' , textAlign: "center"}}>Ordered Items</h2>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell>Item Id</StyledTableCell>           
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Unit Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right" >Total Price</StyledTableCell>
            
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.id}
            </StyledTableCell>           
            <StyledTableCell>{row.name}</StyledTableCell>
            <StyledTableCell align="right" >{row.unitprice}</StyledTableCell>
            <StyledTableCell align="right" >{row.quantity}</StyledTableCell>
            <StyledTableCell align="right" >{row.amount}</StyledTableCell>
                       
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
       </div>
       </div>
       );    
      }