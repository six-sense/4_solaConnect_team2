import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mixin from './Styles/mixin';
import { GlobalStyles } from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';


ReactDOM.render(
  <>
    <GlobalStyles />
      <ThemeProvider theme={{ ...mixin }}>
        <App />
      </ThemeProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
