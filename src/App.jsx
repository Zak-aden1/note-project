import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {  ThemeProvider, createTheme } from '@material-ui/core';
import Create from './Pages/Create';
import Notes from './Pages/Notes';
import { purple } from '@material-ui/core/colors';
import Layout from './Layout';
import UserContext from './context/UserContext';

const theme = createTheme({
  pallete: {
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400, 
    fontWeightRegular: 500,
    fontWeightBold: 600,
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserContext>
    <Router>
      <Layout>
      <Switch>

          <Route exact path='/'>
              <Notes/>
          </Route>

          <Route  path='/create'>
              <Create />
          </Route>

      </Switch>
      </Layout>
    </Router>
    </UserContext>
    </ThemeProvider>
  );
}

export default App;
