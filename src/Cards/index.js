import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import AddCard from "./AddCard";
import EditCard from "./EditCard";
import { readDeck } from "../utils/api";

function Cards () {

    const {path} = useRouteMatch();
    const [deck, setDeck] = useState({cards: []});
    const { deckId } = useParams();

    useEffect(() => {
        const abortController = new AbortController();
        async function loadDeck () {
            const response = await readDeck(deckId, abortController.signal);
            setDeck(response);
        }
        loadDeck();
        return () => abortController.abort();
    }, [deckId])

    return (
        <Switch>
            <Route exact path={`${path}/new`}>
                <AddCard deck={deck} />
            </Route>
            <Route exact path={`${path}/:cardId/edit`}>
                <EditCard deck={deck}/>
            </Route>
        </Switch>
    )
}

export default Cards;