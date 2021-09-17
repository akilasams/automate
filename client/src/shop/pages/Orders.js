import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, address, paymentMethod, amount) {
  return { id, date, name, address, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2021', 'Sam Perera', 'Nugegoda,Colombo', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '20 Mar, 2021', 'Paul Silva', 'Nugegoda,Colombo', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '13 June,2021', 'Tom Holand', 'Nugegoda,Colombo', 'MC ⠀•••• 1253', 100.81),
  createData(3, '21 May, 2021', 'Achini Silva', 'Nugegoda,Colombo', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 July, 2021', 'Sachini Dias ', 'Nugegoda,Colombo', 'VISA ⠀•••• 5919', 212.79)
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}