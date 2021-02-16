/* eslint-disable arrow-parens */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
// import TopBar from './TopBar';
import { AppContext } from 'src/AppProvider';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
    // paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const MainLayout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { token } = React.useContext(AppContext);

  if (token) {
    navigate('/?authenticated=1', { replace: true });
  }

  return (
    <div className={classes.root}>
      {/* <TopBar /> */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
