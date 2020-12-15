import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Nabvar';
import About from './components/routes/About';
import Grid from './components/Grid';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>;
      <div className="container">
        <Switch>
          <Route exact path="/" component={Grid}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
