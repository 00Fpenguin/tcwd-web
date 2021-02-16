import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Box,
  Avatar,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '2em'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
  },
  primarySection: {
    display: 'flex',
    fontSize: '6em',
    color: 'blue'
  },
  secondarySection: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1em'
  }
}));
const Item = ({ value }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Avatar>AT</Avatar>
        <Box style={{ display: 'flex', flexDirection: 'column', paddingLeft: '2em' }}>
          <Typography variant="h4" className={classes.text}>{value.name || ''}</Typography>
          <Typography variant="body1" className={classes.text}>{value.name || ''}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

Item.propTypes = {
  value: PropTypes.shape({ done: PropTypes.bool, name: PropTypes.string })
};

export default Item;
