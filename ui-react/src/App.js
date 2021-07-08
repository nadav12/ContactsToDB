import React, { Component } from 'react';

import './App.css';
import Form from './components/form';
import FilterableContactTable from './components/FilterableContactTable';
// import store from './store';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list :[]
    }
  }

  render() {

    return (
      <div className="app">
        <header className="app-header">
          <h1>node.js mongoDB and React Porject</h1>
        </header>
        <p className="app-intro">
        </p>
        <Form store={this.props.store}/>
        <div>
          <FilterableContactTable update={this.update} className="table-wrap" store={this.props.store} />

        </div>
      </div>
    );
  }
}


export default App;
