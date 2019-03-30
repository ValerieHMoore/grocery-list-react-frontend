import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import ItemsContainer from './containers/ItemsContainer'
import AddItemContainer from './containers/AddItemContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/items' component={ItemsContainer} />
          <Route exact path="/items/new/item" component={AddItemContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
