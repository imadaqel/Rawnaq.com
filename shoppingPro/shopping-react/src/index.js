import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './index.css'

const App = () => (
  <MuiThemeProvider>

  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
