import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {  ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import Create from './Pages/Create';
import Notes from './Pages/Notes';
import { purple } from '@material-ui/core/colors';

const theme = createTheme({
  pallete: {
    secondary: purple,
  },
  typgraphy: {
      fontFamily: 'quickSand'
    }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>

          <Route exact path='/'>
              <Notes/>
          </Route>

          <Route  path='/create'>
              <Create />
          </Route>

      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
