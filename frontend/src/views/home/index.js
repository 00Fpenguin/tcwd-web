import React from 'react';
import {
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';

import Page from 'src/components/Page';

import MainTodo from './MainTodo';
import TodoList from './TodoList';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Container maxWidth={false}>
        <Typography variant="h1" gutterBottom>What would you like to do?</Typography>
        <MainTodo />
        <TodoList />
      </Container>
    </Page>
  );
};

export default Home;
