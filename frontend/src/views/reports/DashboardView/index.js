import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';

import Page from 'src/components/Page';
import Sales from './Sales';
import Progress from './Progress';
import Statistics from './Statistic';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Page.Header title="Accounts Overview" />
        <Statistics />
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            lg={7}
            md={10}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={5}
            md={8}
            xl={3}
            xs={12}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Progress />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
