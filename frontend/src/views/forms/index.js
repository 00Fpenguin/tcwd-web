/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  makeStyles,
  Grid,
} from '@material-ui/core';
import {
  Build,
  Share as ShareIcon,
  EditLocation as EditLocationIcon,
  SlowMotionVideo as SlowMotionVideoIcon,
  Person as PersonIcon,
  AttachMoney as AttachMoneyIcon
} from '@material-ui/icons';

import Page from 'src/components/Page';

import FormItem from './FormItem';

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
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
  },
  gridContainer: {
    '& :hover': {
      background: '#fafafa',
      cursor: 'pointer'
    }
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
    <Page className={classes.container} title="Accounts">
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item lg={4} className={classes.gridContainer}>
            <FormItem
              icon={<Build fontSize="inherit" style={{ color: 'blue' }} />}
              title="New Service"
              subTitle="This form will inform TCWD that you are in need of water connection"
            />
          </Grid>
          <Grid item lg={4} className={classes.gridContainer}>
            <FormItem
              icon={<ShareIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Reconnection"
              subTitle="This form will inform TCWD that you are in need of water reconnection"
            />
          </Grid>
          <Grid item lg={4} className={classes.gridContainer}>
            <FormItem
              icon={<EditLocationIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Relocation"
              subTitle="This form will inform TCWD that you are in need of water relocation"
            />
          </Grid>
          <Grid item lg={4} className={classes.gridContainer}>
            <FormItem
              icon={<SlowMotionVideoIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Change Meter"
              subTitle="This form will inform TCWD that your meter needs to be changed"
            />
          </Grid>
          <Grid item lg={4} className={classes.gridContainer}>
            <FormItem
              icon={<PersonIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Change Name"
              subTitle="This form will inform TCWD that you want to change your water connection name"
            />
          </Grid>
          <Grid item lg={4} className={classes.gridContainer}>
            <FormItem
              icon={<AttachMoneyIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Senior Citizen Discount"
              subTitle="This form will inform TCWD that you could avail for the Senior Citizens Discount"
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
