import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';

function App() {

  let lightTheme = createMuiTheme({
    palette: {
      type: 'light'
    }
  })
  let darkTheme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  })

  let [theme, setTheme] = useState(darkTheme)


  return (
    <ThemeProvider theme={theme} >
      <div>
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
