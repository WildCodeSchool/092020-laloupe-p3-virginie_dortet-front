import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Author from "./Author/Author";
import Book from "./Book/Book";
import Funding from "./Funding/Funding";
import News from "./News/News";
import Workshops from "./Workshops/Workshops";
import Preorder from "./Preorder/Preorder";
import Testimony from "./Testimony/Testimony";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";

function Client() {
  const { path } = useRouteMatch();

  return (
    <div>
      <ScrollToTop />
      <Header />
      <NavBar />
      <Switch>
        <Route exact path={path} component={Author} />
        <Route path={`${path}livres`} component={Book} />
        <Route path={`${path}partenaires`} component={Funding} />
        <Route path={`${path}actualites`} component={News} />
        <Route path={`${path}ateliers`} component={Workshops} />
        <Route path={`${path}precommande`} component={Preorder} />
        <Route path={`${path}temoignage`} component={Testimony} />
        <Route path={`${path}contact`} component={ContactForm} />
        <Route path={`${path}Footer`} component={ContactForm} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Client;
