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
import Http from 'src/utils/http';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [accounts, setAccounts] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    count: 0,
    currentPage: 1
  });

  const getCustomers = async page => {
    try {
      const { data } = await Http.get(`/customers?type=1&page=${page}`);

      setAccounts(data.data);
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
              <TableCell>Account Name</TableCell>
              <TableCell>Block No.</TableCell>
              <TableCell>Barangay</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Route/Zone</TableCell>
              <TableCell>Contact No.</TableCell>
              <TableCell>Types of Water Service</TableCell>
              <TableCell>Senior CitizenMember</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((row, i) => (
              <TableRow key={`account-applicant-${row.id}`}>
                <TableCell>{row.account_name}</TableCell>
                <TableCell>{row.block_number}</TableCell>
                <TableCell>{row.barangay}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.route}</TableCell>
                <TableCell>{row.contact_number}</TableCell>
                <TableCell>Residential</TableCell>
                <TableCell>No</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={i % 2 === 0 ? 'secondary' : 'default'}
                    onClick={() => {
                      navigate(`/accounts/${row.id}`, { replace: true });
                    }}
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
