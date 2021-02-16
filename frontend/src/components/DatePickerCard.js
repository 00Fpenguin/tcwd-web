import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import {
  Grid,
  Paper,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '27%',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  primarySection: {
    display: 'flex',
    fontSize: '6em',
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
    paddingLeft: '1em'
  }
}));
const DatePickerCard = () => {
  const classes = useStyles();
  const [date, changeDate] = useState(new Date());

  return (
    <Grid item className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <DatePicker
          autoOk
          disableToolbar
          orientation="landscape"
          variant="static"
          value={date}
          onChange={changeDate}
        />
      </Paper>
    </Grid>

  );
};

export default DatePickerCard;
