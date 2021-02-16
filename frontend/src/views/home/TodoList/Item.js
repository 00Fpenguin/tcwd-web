import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  makeStyles,
  Checkbox,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '63.5%',
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
  text: {
    paddingLeft: '2em',
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
        <Checkbox
          edge="start"
          disableRipple
        />
        <Typography variant="h3" className={classes.text}>{value.name || ''}</Typography>
      </Paper>
    </Grid>

  );
};

Item.propTypes = {
  value: PropTypes.shape({ done: PropTypes.bool, name: PropTypes.string })
};

export default Item;
