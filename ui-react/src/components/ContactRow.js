import React from 'react';

class ContactRow extends React.Component {

handleClick = () => this.props.delete(this.props.contact._id);

  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.birthdate}</td>
        <td>{this.props.contact.email}</td>
        <td><button onClick={this.handleClick}><i className="fa fa-trash"></i></button></td>
      </tr>

    );
  }
}
export default ContactRow;
