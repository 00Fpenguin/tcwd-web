import React from 'react';
import {
  Container,
  makeStyles,
  Box,
  Button,
  TextField,
} from '@material-ui/core';
import {
  AddCircle as AddCircleIcon
} from '@material-ui/icons';

import Page from 'src/components/Page';
import Table from 'src/components/Table';

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

const Faq = () => {
  const classes = useStyles();

  return (
    <Page className={classes.container} title="Faq">
      <Container maxWidth={false}>
        <Page.Header title="Faq" />
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button style={{ height: 40 }} variant="contained" color="primary" endIcon={<AddCircleIcon />}>
            Create FAQ
          </Button>
          <TextField variant="outlined" placeholder="Search" />
        </Box>
        <Box style={{ marginTop: '2em' }}>
          <Table />
        </Box>
      </Container>
    </Page>
  );
};

export default Faq;
