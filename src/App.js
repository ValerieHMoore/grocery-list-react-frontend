import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import ItemsContainer from './containers/ItemsContainer'
import AddItemContainer from './containers/AddItemContainer'
import ItemContainer from './containers/ItemContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/items' component={ItemsContainer} />
          <Route exact path="/items/new/item" component={AddItemContainer} />
          <Route exact path='/items/:id' component={ItemContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
