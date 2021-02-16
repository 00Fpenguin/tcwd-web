import React from 'react';
import PropTypes from 'prop-types';

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
    paddingBottom: '5em',
  },
  primarySection: {
    display: 'flex',
    fontSize: '10em',
    color: 'blue'
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
  secondarySection: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1em',
  }
}));

function TodoCard({ icon, secondaryText, secondarySubText }) {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Box className={classes.primarySection}>
          {icon}
        </Box>
        <Box className={classes.secondarySection}>
          <Typography variant="h1" gutterBottom>{secondaryText}</Typography>
          <Typography variant="body1" color="primary" gutterBottom>{secondarySubText}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

TodoCard.propTypes = {
  icon: PropTypes.element,
  secondaryText: PropTypes.string,
  secondarySubText: PropTypes.string,
};

export default TodoCard;
