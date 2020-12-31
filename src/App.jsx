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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Author} />
          <Route path="/livres" component={Book} />
          <Route path="/partenaires" component={Funding} />
          <Route path="/actualites" component={News} />
          <Route path="/ateliers" component={Workshops} />
          <Route path="/precommande" component={Preorder} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// React.createRef pour naviguer d'une section à une autre
