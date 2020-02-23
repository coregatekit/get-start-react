import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

// Class Style
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <AddTodo />
      </Fragment>
    )
  }
}


export default App;