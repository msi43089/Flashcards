import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import { Route, Router, Switch } from "react-router-dom"
import Study from "../Study/Study";
import CreateDeck from "../Create/CreateDeck";
import ViewDeck from "../Home/ViewDeck";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Route>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/decks/:deckId/study">
              <Study />
            </Route>
            <Route exact path="/decks/new">
              <CreateDeck />
            </Route>
            <Route exact path="/decks/:deckId">
              <ViewDeck />
              </Route>
              <Route >
            <NotFound />
            </Route>
        {/* TODO: Implement the screen starting here */}

        </Switch>
        </Route>
      </div>
    </>
  );
}

export default Layout;
