/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  makeStyles,
  Paper,
  Box,
  Typography
} from '@material-ui/core';

import Page from 'src/components/Page';
import Table from 'src/components/Table';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    // minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    // flexGrow: 1,
    '& button': {
      background: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      color: 'blue',
      marginRight: '0.25em',
      textTransform: 'none',
    },
    '& .Mui-selected': {
      background: 'blue',
      color: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  },
  search: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    '& span': {
      marginRight: '1em',
      fontWeight: 'bold',
    },
    '& input': {
      background: 'white',
    }
  },
  tabs: {
    marginTop: '1em',
    borderBottom: '2px solid blue',
  },
  tabPanel: {
    '& .MuiBox-root': {
      padding: 0,
    },
  }
}));

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Account = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Accounts">
      <Container maxWidth={false}>
        <Page.Header title="Complaints Overview" />

        <Box style={{ marginTop: '1em', display: 'flex' }}>
          <Box style={{ marginRight: '4em' }}>
            <Typography variant="h4" gutterBottom>Open tickets</Typography>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'center'
              }}
            >
              <Paper
                style={{
                  width: 75,
                  marginRight: '1.5em',
                  padding: '0.5em'
                }}
                elevation={10}
              >
                <Typography variant="h3">0</Typography>
                <Typography variant="body1">YOU</Typography>
              </Paper>
              <Paper style={{ width: 75, marginRight: '1.5em', padding: '0.5em' }} elevation={10}>
                <Typography variant="h3">14</Typography>
                <Typography variant="body1">Groups</Typography>
              </Paper>
            </Box>
          </Box>
          <Box style={{ margin: '0 1em' }}>
            <Typography variant="h4" gutterBottom>Ticket Statistics</Typography>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'center'
              }}
            >
              <Paper style={{ width: 75, marginRight: '1.5em', padding: '0.5em' }} elevation={10}>
                <Typography variant="h3">11</Typography>
                <Typography variant="body1">GOOD</Typography>
              </Paper>
              <Paper style={{ width: 75, marginRight: '1.5em', padding: '0.5em' }} elevation={10}>
                <Typography variant="h3">6</Typography>
                <Typography variant="body1">BAD</Typography>
              </Paper>
              <Paper style={{ width: 75, marginRight: '1.5em', padding: '0.5em' }} elevation={10}>
                <Typography variant="h3">24</Typography>
                <Typography variant="body1">SOLVED</Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
        <Box style={{ marginTop: '4em', display: 'flex' }}>
          <Table />
        </Box>
      </Container>
    </Page>
  );
};

export default Account;
