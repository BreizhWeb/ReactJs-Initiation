import React from "react";

// Employee Component
class Auteurs extends React.Component {
    constructor() {
        super();
      }
    render() {
      return (
        <li class="liste">
          <div>
          <b>Auteur : </b><button class="btnData">{this.props.nom} {this.props.prenom}</button>
          </div>
        </li>
      );
    }
}
  
  // EmployeeList Component
  class AuteurList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        auteurs: [
            { empId: 1, nom: "Raymond", prenom: "Abellio"},
            { empId: 2, nom: "Edmond", prenom: "About"},
            { empId: 3, nom: "Pierre ", prenom: "Abraham"}
        ]
      };
    }
  
    render() {
      // Array of <Employee>
      var listItems = this.state.auteurs.map(auteur => (
        <Auteurs nom={auteur.nom} prenom={auteur.prenom}/>
      ));
      return (
          <div>
            <h1>Liste des auteurs</h1>
            <ul>
                {listItems}
            </ul>
          </div>
        );
    }
  }

  const Auteur = () => {
    return (
        <AuteurList/>
    );
};

export default Auteur;