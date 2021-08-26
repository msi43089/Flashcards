import React from "react"
import { Link } from "react-router-dom"

function NotEnoughCards ({cardsLength, deckId}) {

    return (
        <div>
        <h3>Not enough cards.</h3>
        <p>You need at lease 3 cards to study. There are only {cardsLength} in this deck.</p>
        <Link to={`/decks/${deckId}/cards/new`}>
            <button className="btn btn-primary oi oi-plus">  Add Cards</button>
        </Link>
        </div>
    )
}

export default NotEnoughCards