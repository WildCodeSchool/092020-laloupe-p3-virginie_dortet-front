import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Typography } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import Author from "./components/Author/Author";
import Book from "./components/Book/Book";
import Funding from "./components/Funding/Funding";
import News from "./components/News/News";
import Workshops from "./components/Workshops/Workshops";
import Preorder from "./components/Preorder/Preorder";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Typography variant="h1" color="initial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit minima
          explicabo nulla, maiores ipsa soluta? Distinctio cum delectus eius rem
          odit sit doloribus non nobis totam, dicta quisquam impedit?
        </Typography>
        <Switch>
          <Route path="/auteure" component={Author} />
          <Route path="/livres" component={Book} />
          <Route path="/partenariats" component={Funding} />
          <Route path="/actualites" component={News} />
          <Route path="/ateliers" component={Workshops} />
          <Route path="/precommande" component={Preorder} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
