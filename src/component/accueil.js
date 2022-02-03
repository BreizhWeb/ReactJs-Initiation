import React from "react";

// Employee Component
class Livre extends React.Component {
    constructor() {
        super();
      }
    render() {
      return (
        <li className="livre">
          <div>
            <img src={process.env.PUBLIC_URL + this.props.image}></img>
          </div>
          <div>
            <b>Titre :</b> {this.props.titre}
          </div>
          <div>
            <b>Genre :</b> {this.props.genre}
          </div>
        </li>
      );
    }
}
  
  // EmployeeList Component
  class LivreList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        livres: [
          { empId: 1, titre: "Harry Potter à l'école des sorciers", genre: "Fantastique", image: "./img/1.jpg", auteur: "JP", prix: 35},
          { empId: 2, titre: "Harry Potter et la Chambre des secrets", genre: "Fantastique", image: "./img/2.jpg", auteur: "JP", prix: 35},
          { empId: 3, titre: "Harry Potter et le Prisonnier d'Azkaban", genre: "Fantastique", image: "./img/3.jpg", auteur: "JP", prix: 35},
          { empId: 4, titre: "Harry Harry Potter et la Coupe de feu à l'école des sorciers", genre: "Fantastique", image: "./img/4.jpg", auteur: "JP", prix: 35},
          { empId: 5, titre: "Harry Potter et la Harry Potter et l'Ordre du phénix des secrets", genre: "Fantastique", image: "./img/5.jpg", auteur: "JP", prix: 35},
          { empId: 6, titre: "Harry Potter et le Prince de sang-mêlé", genre: "Fantastique", image: "./img/6.jpg", auteur: "JP", prix: 35},
          { empId: 7, titre: "Harry Potter et les Reliques de la Mort", genre: "Fantastique", image: "./img/7.jpg", auteur: "JP", prix: 35}

        ]
      };
    }
  
    render() {
      // Array of <Employee>
      var listItems = this.state.livres.map(livre => (
        <Livre image={livre.image} titre={livre.titre} genre={livre.genre} auteur={livre.auteur} prix={livre.prix}/>
      ));
      return (
          <div>
            <h1>Liste des livres</h1>
            <ul className="livre-list">
                {listItems}
            </ul>
          </div>
        );
    }
  }

  const Auteur = () => {
    return (
        <LivreList/>
    );
};

export default Auteur;