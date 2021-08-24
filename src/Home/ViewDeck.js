import react, { useState, useEffect } from "react"
import { readDeck } from "../utils/api";
import { useParams, Link } from "react-router-dom"

function ViewDeck () {
    const { deckId } = useParams();
    const [ deck, setDeck] = useState({})

    useEffect(() => {
        const abortController = new AbortController();
        async function loadDeck () {
        const response = await readDeck(deckId, abortController.signal)
        setDeck(response)
        }
        loadDeck();
        return () => abortController.abort();
    }, [deckId])


    console.log(deck)

    return (
        <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link class="oi oi-home" to="/">  Home</Link>
            </li>
            <li className="breadcrumb-item active">
                {deck.name}
            </li>
          </ol>
        </nav>
        <div>
        <div>
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
        </div>
            <Link to="/decks/:deckId/edit">
                <button className="btn btn-secondary oi oi-pencil">Edit</button>
            </Link>
            <Link to="/decks/:deckId/study">
                <button className="btn btn-primary oi oi-book mx-2">Study</button>
            </Link>
            <Link to="/decks/:deckId/cards/new">
                <button className="btn btn-primary oi oi-plus" >Add Cards</button>
            </Link>
            <button className="oi oi-trash btn btn-danger float-right" ></button>
        </div>
            <h2>Cards</h2>
            <ul>
                <Cards />
            </ul>
        </div>
    )
}

export default ViewDeck