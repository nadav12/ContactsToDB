import React, { Component } from 'react';
import {connect} from 'react-redux';
//import '../styles/form.css';
import * as actionCreators from '../actions/index.js';

class Form extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  const method = "POST";
 const body = new FormData(this.form);

fetch("users", { method, body })
  .then(res => res.json())
  .then(data => alert(JSON.stringify(data, null, "\t")));
    console.log(JSON.stringify(body));
    this.props.loadData()
  }

  render() {
    return (<form  className="pure-form pure-form-stacked formC" ref={el => (this.form = el)} onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Add contact</legend>
            <div><label htmlFor="username">Enter username </label>
            <input id="username" name="username" type="text" /></div>

             <div><label htmlFor="email">Enter your email </label>
             <input id="email" name="email" type="email" /></div>

            <div> <label htmlFor="birthdate">Enter your birth date </label>
             <input id="birthdate" name="birthdate" type="date" /></div>

            <button className="pure-button pure-button-primary">Send data!</button>
          </fieldset>
          </form>);
  }
}
function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps, actionCreators)(Form);
