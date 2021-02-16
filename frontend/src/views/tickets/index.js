import React from 'react';
import {
  Container,
  makeStyles,
  Grid,
} from '@material-ui/core';
import {
  ConfirmationNumber as ConfirmationNumberIcon,
  HowToReg as HowToRegIcon,
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

const Account = () => {
  const classes = useStyles();

  return (
    <Page className={classes.container} title="Ticket Overview">
      <Container maxWidth={false}>
        <Page.Header title="Tickets Overview" />
        <Grid container spacing={4} style={{ marginTop: '15em', display: 'flex', justifyContent: 'space-around' }}>
          <Grid item lg={4} className={classes.gridContainer}>
            <PaperCard
              icon={<ConfirmationNumberIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Create Tickets"
            />
          </Grid>
          <Grid item lg={4} className={classes.gridContainer}>
            <PaperCard
              icon={<HowToRegIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Assign Tickets"
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
