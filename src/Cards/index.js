import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddCard from "./AddCard";
import EditCard from "./EditCard"
    

function Cards () {
const {path} = useRouteMatch();
console.log(path)
    return (
        <Switch>
            <Route exact path={`${path}/new`}>
                <AddCard />
            </Route>
            <Route exact path={`${path}/:cardId/edit`}>
                <EditCard />
            </Route>
        </Switch>
    )
}

export default Cards