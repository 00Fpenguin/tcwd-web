import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '27%',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  contentIcon: {
    border: '1px solid #eee',
    padding: '1em',
  },
  primarySection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1em',
  },
  icon: {
    padding: '0.75em',
    display: 'inline-block',
    border: '1px solid #eee',
    borderRadius: 5,
    boxShadow: '0 0 1px 0 rgb(0 0 0 / 31%), 0 3px 4px -2px rgb(0 0 0 / 25%)',
  },
  text: {
    display: 'flex',
    textAlign: 'center',
    '& svg': {
      margin: '0 0.5em',
      borderRadius: '50%',
      padding: 3,
      background: '#EEE',
    }
  },
  error: {
    color: '#F70808',
  },
  success: {
    color: '#21CA45',
  },
  secondarySection: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

function StatItem({
  primaryIcon,
  primaryTextIcon,
  primaryText,
  secondaryText,
  secondarySubText,
  declined,
}) {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Box className={classes.primarySection}>
          <Box className={classes.icon}>
            {primaryIcon}
          </Box>
          <Box className={clsx([classes.text, declined ? classes.error : classes.success])}>
            {primaryTextIcon}
            <Typography variant="caption">{primaryText}</Typography>
          </Box>
        </Box>
        <Box className={classes.secondarySection}>
          <Typography variant="h2">{secondaryText}</Typography>
          <Typography variant="body1">{secondarySubText}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

StatItem.propTypes = {
  primaryIcon: PropTypes.element,
  primaryTextIcon: PropTypes.element,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  secondarySubText: PropTypes.string,
  declined: PropTypes.bool,
};

StatItem.defaultProps = {
  declined: false,
};

export default StatItem;
