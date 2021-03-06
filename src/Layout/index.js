import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import { Route, Switch } from "react-router-dom";
import Deck from "../Deck/index";
import AddDeck from "../Deck/AddDeck";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/decks/new">
              <AddDeck />
            </Route>
            <Route path="/decks/:deckId">
              <Deck />
            </Route> 
            <Route >
              <NotFound />
            </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
