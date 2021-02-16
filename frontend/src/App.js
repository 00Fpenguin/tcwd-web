import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import MomentUtils from '@date-io/moment';

import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';
import routes from 'src/routes';

import 'src/mixins/chartjs';
import 'react-perfect-scrollbar/dist/css/styles.css';
import AppProvider from './AppProvider';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <GlobalStyles />
          {routing}
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
