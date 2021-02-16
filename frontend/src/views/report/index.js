import React from 'react';
import {
  Container,
  makeStyles,
  Grid,
} from '@material-ui/core';
import {
  Assignment as AssignmentIcon,
  LocalAtm as LocalAtmIcon,
  Announcement as AnnouncementIcon,
  HowToReg as HowToRegIcon
} from '@material-ui/icons';

import Page from 'src/components/Page';
import PaperCard from 'src/components/PaperCard';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
  gridContainer: {
    '& :hover': {
      background: '#fafafa',
      cursor: 'pointer'
    }
  }
}));

const Reports = () => {
  const classes = useStyles();

  return (
    <Page className={classes.container} title="Reports Page">
      <Container maxWidth={false}>
        <Page.Header title="Reports Page" />
        <Grid container spacing={4} style={{ marginTop: '8em', display: 'flex', justifyContent: 'space-around' }}>
          <Grid item lg={5} className={classes.gridContainer}>
            <PaperCard
              icon={<AssignmentIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="View Bill Reports"
            />
          </Grid>
          <Grid item lg={5} className={classes.gridContainer}>
            <PaperCard
              icon={<LocalAtmIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="View Payment Reports"
            />
          </Grid>

          <Grid item lg={5} className={classes.gridContainer}>
            <PaperCard
              icon={<AnnouncementIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="View Request Reports"
            />
          </Grid>
          <Grid item lg={5} className={classes.gridContainer}>
            <PaperCard
              icon={<HowToRegIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="View Account Status Reports"
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Reports;
