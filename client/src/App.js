import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import Docs from './components/Docs';
import Selector from './components/Selector';
import Autocompile from './components/Autocompile';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="h-100">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/docs' component={Docs} />
          <Route exact path='/selector' component={Selector} />
          <Route exact path='/autocompile' component={Autocompile} />
          <Route exact path='/register' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;