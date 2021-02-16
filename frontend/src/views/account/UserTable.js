/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import { Paper } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { Avatar, Button } from '@material-ui/core';

import Http from 'src/utils/http';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    padding: 0
  }
});

// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable(props) {
  const classes = useStyles();
  const [accounts, setAccounts] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    count: 0,
    currentPage: 1
  });

  const getCustomers = async page => {
    try {
      const { data } = await Http.get(`/customers?page=${page}`);

      setAccounts(data.data.map(d => ({ ...d.typeable, email: d.username })));
      setPagination({
        count: data.last_page,
        currentPage: data.current_page
      });
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  React.useEffect(() => {
    getCustomers(pagination.currentPage);
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Profile Picture</TableCell>
              <TableCell>Account Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Validation</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((row, i) => (
              <TableRow key={`account-user-${row.id}`}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <Avatar>{row.first_name[0] + row.last_name[0]}</Avatar>
                </TableCell>
                <TableCell>{row.account_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>Validated</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>{row.contact_number}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={i % 2 === 0 ? 'secondary' : 'default'}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          paddingTop: '2em',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Pagination
          count={pagination.count}
          page={pagination.currentPage}
          onChange={(e, p) => getCustomers(p)}
          shape="rounded"
        />
      </div>
    </>
  );
}
