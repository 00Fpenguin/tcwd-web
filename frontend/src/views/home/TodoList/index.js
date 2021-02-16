/* eslint-disable react/no-array-index-key */
import React from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';

import Item from './Item';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1.5em 0 2em 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    '& button': {
      marginLeft: '1em',
    }
  },
}));

const lists = [{
  done: false,
  name: 'View Account ledger',
}, {
  done: false,
  name: 'View Account ledger',
}, {
  done: true,
  name: 'View Account ledger',
}, {
  done: false,
  name: 'View Account ledger',
}, {
  done: true,
  name: 'View Account ledger',
}];

function TodoList() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.title}>
        <Typography variant="h3">Here is your to do list:</Typography>
        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
      <Grid container className={classes.root}>
        {lists.map((list, i) => <Item key={`item-${i}`} value={list} />)}
      </Grid>
    </>
  );
}

export default TodoList;
