import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import Autocompile from './components/Autocompile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="h-100">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/autocompile' component={Autocompile} />
        </div>
      </Router>
    );
  }
}

export default App;