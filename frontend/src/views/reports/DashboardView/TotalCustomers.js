import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  }
}));

const TotalCustomers = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
          style={{ padding: '1em' }}
        >
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
          <Grid item elevation={1} style={{ border: '1px solid #aaa', borderRadius: 5, }}>
            <ShoppingBasket />
          </Grid>
          <Grid item>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              1,600
            </Typography>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            PHP 42,320.00
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            TOTAL SALES
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

TotalCustomers.propTypes = {
  className: PropTypes.string
};

export default TotalCustomers;
