/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  makeStyles,
  Grid,
} from '@material-ui/core';
import {
  PlaylistAdd as PlaylistAddIcon,
  RemoveRedEye as RemoveRedEyeIcon,
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
  search: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    '& span': {
      marginRight: '1em',
      fontWeight: 'bold',
    },
    '& input': {
      background: 'white',
    }
  },
  tabs: {
    marginTop: '1em',
    borderBottom: '2px solid blue',
  },
  tabPanel: {
    '& .MuiBox-root': {
      padding: 0,
    },
  },
  gridContainer: {
    '& :hover': {
      background: '#fafafa',
      cursor: 'pointer'
    }
  }
}));

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Account = () => {
  const classes = useStyles();

  return (
    <Page className={classes.container} title="Job">
      <Container maxWidth={false}>
        <Page.Header title="Jobs Overview" />
        <Grid container spacing={4} style={{ marginTop: '15em', display: 'flex', justifyContent: 'space-around' }}>
          <Grid item lg={4} className={classes.gridContainer}>
            <PaperCard
              icon={<PlaylistAddIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="Create New Job"
            />
          </Grid>
          <Grid item lg={4} className={classes.gridContainer}>
            <PaperCard
              icon={<RemoveRedEyeIcon fontSize="inherit" style={{ color: 'blue' }} />}
              title="View All Jobs"
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
