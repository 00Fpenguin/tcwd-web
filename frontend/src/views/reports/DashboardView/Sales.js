import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  CardContent,
  CardHeader,
  makeStyles,
  Card,
} from '@material-ui/core';
import BasicLine from './BasicLine';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      elevation={10}
    >
      <CardHeader title="Sales Chart" />
      <CardContent>
        <Box position="relative">
          <BasicLine />
        </Box>
      </CardContent>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
