import './App.scss';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/search-app">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
