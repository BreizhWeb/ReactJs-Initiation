import React from "react";
// import LogiqueModale from "./LogiqueModale";
// import Modale from "./Modale";

//const {revele, toggle} = LogiqueModale();

// Employee Component
class Users extends React.Component {
    constructor() {
        super();
      }
    render() {
      return (
        <li class="liste">
          <div>
            <b>User : </b><button class="btnData" /*</div>onClick={toggle*/>{this.props.nom} {this.props.prenom}</button>
          </div>
        </li>
      );
    }
}
  
  // EmployeeList Component
  class UserList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
            { empId: 1, nom: "Haupas", prenom: "Dorian"},
            { empId: 2, nom: "MDS", prenom: "Nicolas"},
            { empId: 3, nom: "MDS", prenom: "Elouan"},
            { empId: 4, nom: "MDS", prenom: "Gwen"},
            { empId: 5, nom: "MDS", prenom: "Agenor"},
            { empId: 6, nom: "MDS", prenom: "Ronan"}
        ]
      };
    }
  
    render() {
      // Array of <Employee>
      var listItems = this.state.users.map(user => (
        <Users nom={user.nom} prenom={user.prenom}/>
      ));
      return (
          <div>
            <h1>Liste des users</h1>
            <ul>
                {listItems}
            </ul>
          </div>
        );
    }
  }

  const User = () => {
    return (
        <UserList/>
    );
};

export default User;