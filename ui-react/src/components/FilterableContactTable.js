import React from 'react';
import SearchBar from './SearchBar';
import ContactTable from './ContactTable';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js';

class FilterableContactTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
  };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);

  }

  componentDidMount(){

  this.props.loadData(this.props.users);

  }

  handleFilterTextInput(filterText) {

    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <h1>Find user by name</h1>

        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <ContactTable
          trigData={this.props.loadData}
          contacts={this.props.users}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users
  };
}


export default connect(mapStateToProps, actionCreators)(FilterableContactTable);
