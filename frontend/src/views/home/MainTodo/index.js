import React from 'react';

import {
  Grid,
  makeStyles
} from '@material-ui/core';
import {
  ViewHeadline,
  CheckCircleOutline,
} from '@material-ui/icons';

import DatePickerCard from 'src/components/DatePickerCard';

import TodoCard from './TodoCard';

const useStyles = makeStyles(() => ({
  root: {
    margin: '3em 0 2em 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
  },
}));

function MainTodo() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <TodoCard
        icon={<ViewHeadline fontSize="inherit" />}
        secondaryText="Approve Forms"
        secondarySubText="View the Forms submitted by Users"
      />
      <TodoCard
        icon={<CheckCircleOutline fontSize="inherit" />}
        secondaryText="Approve Forms"
        secondarySubText="View the Account Status of Users"
      />
      <DatePickerCard />
    </Grid>
  );
}

export default MainTodo;
