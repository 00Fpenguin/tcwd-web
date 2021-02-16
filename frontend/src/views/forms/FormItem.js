/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: '2em',
    alignItems: 'center',
  }
}));

const FormItem = ({
  icon,
  title,
  subTitle,
}) => {
  const classes = useStyles();

  return (
    <Paper elevation={6} className={classes.root}>
      <Box style={{ padding: '0.25em', fontSize: '4em' }}>
        {icon}
      </Box>
      <Box style={{ padding: '1em' }}>
        <Typography variant="h3" gutterBottom>{title}</Typography>
        <Typography variant="body1" style={{ color: 'blue', fontSize: '0.85em' }}>{subTitle}</Typography>
      </Box>
    </Paper>
  );
};

FormItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default FormItem;
