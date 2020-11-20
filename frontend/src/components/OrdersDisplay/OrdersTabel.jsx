import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    marginTop: 30,
    maxWidth:900
  },
  bold: {
    fontWeight:'bold'
  },
  container: {
    border: '1px solid red',
    borderRadius: '10px',
    boxShadow:'0 0 5px red'
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { orderId:name, time:calories, details:fat, price:carbs };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, "2xchickentandoori", 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <TableContainer className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold}>Order Id</TableCell>
            <TableCell className={classes.bold} align="right">Time</TableCell>
            <TableCell className={classes.bold} align="right">Deails</TableCell>
            <TableCell className={classes.bold} align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orderId}>
              <TableCell >{row.orderId}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.details}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
