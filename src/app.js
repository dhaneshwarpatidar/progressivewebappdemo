import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarDemo from './include/appbar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Layout = () => (
  <MuiThemeProvider>
    <AppBarDemo />
  </MuiThemeProvider>
);
 export default Layout;