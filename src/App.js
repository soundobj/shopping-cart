import React, { Component } from 'react';
import './index.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import BasketListContainer from './components/BasketListContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h2>Shopping Cart</h2>
        </div>
        <div className="shopping__cart">
            <ItemListContainer />
            <BasketListContainer />
        </div>
      </div>
    );
  }
}

export default App;