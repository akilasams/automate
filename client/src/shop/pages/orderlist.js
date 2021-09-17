import React from 'react';
// import './App.css';
import '../cssfiles/orderlist.css';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import NavBar from '../components/NavBar';
//import clsx from 'clsx';
//import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Ordereditems from './ordereditems';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#42207A',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function createData(
  id,
  date,
  name,
  address,
  paymentMethod,
  amount,
  view,
  remove
) {
  return { id, date, name, address, paymentMethod, amount, view, remove };
}

const rows = [
  createData(
    0,
    '16 Mar, 2021',
    'Sam Perera',
    'Nugegoda,Colombo',
    'VISA ⠀•••• 3719',
    312.44,
    <Button
      component={Link}
      to='/Ordereditems'
      style={{
        variant: 'contained',
        backgroundColor: '#42207A',
        color: 'white',
      }}
    >
      View
    </Button>,
    <IconButton style={{ color: 'red' }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    1,
    '20 Mar, 2021',
    'Paul Silva',
    'Nugegoda,Colombo',
    'VISA ⠀•••• 2574',
    866.99,
    <Button
      style={{
        variant: 'contained',
        backgroundColor: '#42207A',
        color: 'white',
      }}
    >
      View
    </Button>,
    <IconButton style={{ color: 'red' }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    2,
    '13 June,2021',
    'Tom Holand',
    'Nugegoda,Colombo',
    'MC ⠀•••• 1253',
    100.81,
    <Button
      style={{
        variant: 'contained',
        backgroundColor: '#42207A',
        color: 'white',
      }}
    >
      View
    </Button>,
    <IconButton style={{ color: 'red' }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    3,
    '21 May, 2021',
    'Achini Silva',
    'Nugegoda,Colombo',
    'AMEX ⠀•••• 2000',
    654.39,
    <Button
      style={{
        variant: 'contained',
        backgroundColor: '#42207A',
        color: 'white',
      }}
    >
      View
    </Button>,
    <IconButton style={{ color: 'red' }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    4,
    '15 July, 2021',
    'Sachini Dias ',
    'Nugegoda,Colombo',
    'VISA ⠀•••• 5919',
    212.79,
    <Button
      style={{
        variant: 'contained',
        backgroundColor: '#42207A',
        color: 'white',
      }}
    >
      View
    </Button>,
    <IconButton style={{ color: 'red' }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    5,
    '16 Mar, 2021',
    'Sam Perera',
    'Nugegoda,Colombo',
    'VISA ⠀•••• 3719',
    312.44,
    <Button
      style={{
        variant: 'contained',
        backgroundColor: '#42207A',
        color: 'white',
      }}
    >
      View
    </Button>,
    <IconButton style={{ color: 'red' }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    6,
    '20 Mar, 2021',
    'Paul Silva',
    'Nugegoda,Colombo',
    'VISA ⠀•••• 2574',
    866.99,
    <Button
      style={{
        variant: 'contained',
        backgroundColor: '#42207A',
        color: 'white',
      }}
    >
      View
    </Button>,
    <IconButton style={{ color: 'red' }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    7,
    '13 June,2021',
    'Tom Holand',
    'Nugegoda,Colombo',
    'MC ⠀•••• 1253',
    100.81,
    <Button
      style={{
        variant: 'contained',
        backgroundColor: '#42207A',
        color: 'white',
      }}
    >
      View
    </Button>,
    <IconButton style={{ color: 'red' }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    8,
    '21 May, 2021',
    'Achini Silva',
    'Nugegoda,Colombo',
    'AMEX ⠀•••• 2000',
    654.39,
    <Button
      style={{
        variant: 'contained',
        backgroundColor: '#42207A',
        color: 'white',
      }}
    >
      View
    </Button>,
    <IconButton style={{ color: 'red' }}>
      <DeleteIcon />
    </IconButton>
  ),
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

export default function Orderlist() {
  const classes = useStyles();
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <NavBar />
      <div
        className='table'
        style={{ position: 'relative', top: '15vh', left: '5vw' }}
      >
        <TableContainer component={Paper}>
          <h2 style={{ color: '#42207A', textAlign: 'center' }}>Orders List</h2>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align='right'>Date</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Payment Method</StyledTableCell>
                <StyledTableCell align='right'>Sale Amount</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component='th' scope='row'>
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.date}</StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {row.address}
                  </StyledTableCell>
                  <StyledTableCell>{row.paymentMethod}</StyledTableCell>
                  <StyledTableCell align='right'>{row.amount}</StyledTableCell>
                  <StyledTableCell>{row.view}</StyledTableCell>
                  <StyledTableCell component='th' scope='row'>
                    {' '}
                    {row.remove}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
