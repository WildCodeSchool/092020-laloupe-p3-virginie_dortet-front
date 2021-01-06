import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Author from "./components/Author/Author";
import Book from "./components/Book/Book";
import Funding from "./components/Funding/Funding";
import News from "./components/News/News";
import Workshops from "./components/Workshops/Workshops";
import Preorder from "./components/Preorder/Preorder";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.scss";
import Auteur from "./components/Author/Author";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />
        <NavBar />

        <Switch>
          <Route exact path="/auteure" component={Author} />
          <Route exact path="/livres" component={Book} />
          <Route exact path="/partenaires" component={Funding} />
          <Route exact path="/actualites" component={News} />
          <Route exact path="/ateliers" component={Workshops} />
          <Route exact path="/precommande" component={Preorder} />
          <Route exact path="/contact" component={ContactForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
