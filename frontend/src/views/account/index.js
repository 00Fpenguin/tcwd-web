/* eslint-disable object-curly-newline */
/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  makeStyles,
  Tab,
  Tabs,
  Box,
  TextField
} from '@material-ui/core';

import Page from 'src/components/Page';

import Table from './Table';
import AccountTable from './AccountTable';
import UserTable from './UserTable';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    flexGrow: 1,
    '& button.MuiTab-root': {
      background: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      color: 'blue',
      marginRight: '0.25em',
      textTransform: 'none'
    },
    '& button.Mui-selected': {
      background: 'blue',
      color: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    }
  },
  search: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    '& span': {
      marginRight: '1em',
      fontWeight: 'bold'
    },
    '& input': {
      background: 'white'
    }
  },
  tabs: {
    marginTop: '1em',
    borderBottom: '2px solid blue'
  },
  tabPanel: {
    '& .MuiBox-root': {
      padding: 0
    }
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
  value: PropTypes.any.isRequired
};

const Account = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('value', newValue);
    setValue(newValue);
  };

  return (
    <Page className={classes.root} title="Accounts">
      <Container maxWidth={false}>
        <Page.Header title="Accounts Overview" />
        <Box className={classes.search}>
          <TextField variant="outlined" />
          <span>Search: </span>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
        >
          <Tab label="Water Account Applications" />
          <Tab label="Water Accounts" />
          <Tab label="User Accounts" />
        </Tabs>
        <TabPanel value={value} index={0} className={classes.tabPanel}>
          <Table />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}>
          <AccountTable />
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabPanel}>
          <UserTable />
        </TabPanel>
      </Container>
    </Page>
  );
};

export default Account;
