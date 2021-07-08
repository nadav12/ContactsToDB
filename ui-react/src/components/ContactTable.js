import React from 'react';
import ContactRow from './ContactRow';



class ContactTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list :this.props.contact
    }
  }
  // this.setState({
  //   list: this.props.users
  // });

  deleteUser = (id) => {
    const path = "users/" + id;
    // console.log(key)
    const method = "DELETE";
  fetch(path, { method })
  .then(res => res.json())
  .then(data => alert(JSON.stringify(data, null, "\t")))
  .then(this.props.trigData());


  }

  render() {
    var rows = [];
    this.props.contacts.forEach((contact, i) => {
      console.log(this.props);
      if (contact.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ContactRow contact={contact} delete={this.deleteUser} key={i} />);
    });
    return (
      <table className="pure-table-striped tableC">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
export default ContactTable;
