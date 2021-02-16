/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  makeStyles,
  Paper,
  Box
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import Page from 'src/components/Page';
import PieChart from 'src/components/PieChart';

import PaymentItem from './PaymentItem';

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

const lists = [{
  avatar: '',
  name: 'John Doe',
  payment_date: new Date(),
  amount: 1000,
}, {
  avatar: '',
  name: 'John Doe',
  payment_date: new Date(),
  amount: 1000,
}, {
  avatar: '',
  name: 'John Kou',
  payment_date: new Date(),
  amount: 1000,
}, {
  avatar: '',
  name: 'John Ji',
  payment_date: new Date(),
  amount: 1000,
}, {
  avatar: '',
  name: 'John Bu',
  payment_date: new Date(),
  amount: 1000,
}, {
  avatar: '',
  name: 'John Bu',
  payment_date: new Date(),
  amount: 1000,
}, {
  avatar: '',
  name: 'John Bu',
  payment_date: new Date(),
  amount: 1000,
}, {
  avatar: '',
  name: 'John Bu',
  payment_date: new Date(),
  amount: 1000,
}, {
  avatar: '',
  name: 'John Bu',
  payment_date: new Date(),
  amount: 1000,
}];

const Account = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Accounts">
      <Container maxWidth={false}>
        <Page.Header title="Payments Overview" />
        <Box style={{ marginTop: '1em', display: 'flex', flexDirection: 'row' }}>
          <Box className={classes.root} style={{ flex: 1.5, marginRight: '1em' }}>
            {lists.map((list, i) => <PaymentItem key={`item-${i}`} value={list} />)}
          </Box>
          <Box className={classes.root} style={{ background: 'none', flex: 1, marginLeft: '1em' }}>
            <Paper elevation={10} style={{ margin: '0 auto' }}>
              <PieChart />
            </Paper>

            <Paper elevation={10} style={{ margin: '2em auto' }}>
              <DatePicker
                autoOk
                disableToolbar
                orientation="landscape"
                variant="static"
                value={new Date()}
                onChange={() => {}}
              />
            </Paper>
          </Box>
        </Box>
      </Container>
    </Page>
  );
};

export default Account;
