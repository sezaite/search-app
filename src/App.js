import './App.scss';
import Search from './components/Search';
import Article from './components/Article';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
