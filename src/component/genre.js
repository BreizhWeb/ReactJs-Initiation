import React from "react";

// Employee Component
class Genres extends React.Component {
    constructor() {
        super();
      }
    render() {
      return (
        <li class="liste">
          <div>
            <b>Nom :</b> <button class="btnData">{this.props.nom}</button>
          </div>
        </li>
      );
    }
}
  
  // EmployeeList Component
  class GenreList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Genres: [
            { empId: 1, nom: "Fantastique"},
            { empId: 2, nom: "Triller"},
            { empId: 3, nom: "Science Fiction"}
        ]
      };
    }
  
    render() {
      // Array of <Employee>
      var listItems = this.state.Genres.map(genre => (
        <Genres nom={genre.nom}/>
      ));
      return (
          <div>
            <h1>Liste des Genres</h1>
            <ul>
                {listItems}
            </ul>
          </div>
        );
    }
  }

  const Genre = () => {
    return (
        <GenreList/>
    );
};

export default Genre;