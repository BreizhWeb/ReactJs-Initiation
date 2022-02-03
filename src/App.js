import React from "react";
import Navbar from "./component/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from './component/accueil';
import User from './component/user';
import Auteur from './component/auteur';
import Genre from './component/genre';

function App() {
  return (
    // menu routes pour changer les components afficher
    <Router>
      <Navbar />
      <Switch>
        <Route path="/accueil" component={Accueil} />
        <Route path="/user" component={User} />
        <Route path="/auteur" component={Auteur} />
        <Route path="/genre" component={Genre} />
      </Switch>
    </Router>
  );
}

export default App;