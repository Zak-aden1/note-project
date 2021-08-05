import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './Pages/Notes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            <Notes/>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
