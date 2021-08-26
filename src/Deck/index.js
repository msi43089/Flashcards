import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Study from "../Study/Study";
import EditDeck from "./EditDeck";
import ViewDeck from "./ViewDeck";
import Cards from "../Cards";

function Deck () {
const {path} = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route exact path={`${path}`} >
                    <ViewDeck />
                </Route>
                <Route exact path={`${path}/study`}>
                    <Study />
                </Route>
                <Route exact path={`${path}/edit`}>
                    <EditDeck />
                </Route>
                <Route path={`${path}/cards`}>
                    <Cards />
                </Route>
            </Switch>
        </div>
    )
}

export default Deck