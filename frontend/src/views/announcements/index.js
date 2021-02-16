import React from 'react';
import {
  Container,
  makeStyles,
  Grid,
} from '@material-ui/core';
import {
  Announcement as AnnouncementIcon,
  History as HistoryIcon,
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

const Announcement = () => {
  const classes = useStyles();

  return (
    <Page className={classes.container} title="Announcement Page">
      <Container maxWidth={false}>
        <Page.Header title="Announcement Page" />
        <Grid container spacing={4} style={{ marginTop: '15em', display: 'flex', justifyContent: 'space-around' }}>
          <Grid item lg={4} className={classes.gridContainer}>
            <PaperCard
              icon={<AnnouncementIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Create Announcement"
            />
          </Grid>
          <Grid item lg={4} className={classes.gridContainer}>
            <PaperCard
              icon={<HistoryIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Recent Announcement"
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Announcement;
