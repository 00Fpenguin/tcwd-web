import React from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import {
  ShoppingBasket,
  CallMade,
  PieChart,
  CallReceived,
  Accessibility,
} from '@material-ui/icons';

import StatItem from './StatItem';

const useStyles = makeStyles(() => ({
  root: {
    margin: '3em 0 2em 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
}));

function Statistics() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <StatItem
        primaryIcon={<ShoppingBasket />}
        primaryTextIcon={<CallMade fontSize="small" />}
        primaryText="+32.40%"
        secondaryText="PHP 42, 000"
        secondarySubText="Total Sales"
      />
      <StatItem
        primaryIcon={<PieChart />}
        primaryTextIcon={<CallReceived fontSize="small" />}
        primaryText="-32.40%"
        secondaryText="PHP 12, 320.00"
        secondarySubText="Total Expenses"
        declined
      />
      <StatItem
        primaryIcon={<Accessibility />}
        primaryTextIcon={<CallMade fontSize="small" />}
        primaryText="+32.40%"
        secondaryText="People 20, 000"
        secondarySubText="Total Visitors"
      />
    </Grid>
  );
}

export default Statistics;
