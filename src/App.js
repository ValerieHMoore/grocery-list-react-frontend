import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Wrapper from './components/Wrapper'
import ItemsContainer from './containers/ItemsContainer'
import AddItemContainer from './containers/AddItemContainer'
import ItemContainer from './containers/ItemContainer'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home} />
            <Route exact path='/items' component={ItemsContainer} />
            <Route exact path="/items/new/item" component={AddItemContainer} />
            <Route exact path={`/items/:itemId`} component={ItemContainer} />
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
