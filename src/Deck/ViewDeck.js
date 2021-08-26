import { useState, useEffect } from "react";
import { deleteDeck, readDeck } from "../utils/api";
import { useParams, Link, useHistory, } from "react-router-dom";
import CardsList from "../Cards/CardsList";

function ViewDeck () {
    const history = useHistory()
    const { deckId } = useParams();
    const [ deck, setDeck] = useState({cards: []})

    useEffect(() => {
        const abortController = new AbortController();
        async function loadDeck () {
        const response = await readDeck(deckId, abortController.signal)
        setDeck(response)
        }
        loadDeck();
        return () => abortController.abort();
    }, [deckId])


    const deleteCardDeck = (id) => {
        const updatedCards = deck.cards.filter((card)=> id !==card.id)
        setDeck({...deck,
        cards: updatedCards})
    }

    
async function handleDeleteDeck (id) { 
    const abortController = new AbortController();
    if (window.confirm("Delete this deck? You will not be able to recover it.")) {
        await deleteDeck(id, abortController.signal)
        history.push("/")
    }
}

    return (
        <div>
        <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link className="oi oi-home" to="/">  Home</Link>
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
            <Link to={`/decks/${deck.id}/edit`}>
                <button className="btn btn-secondary oi oi-pencil">  Edit</button>
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
                <button className="btn btn-primary oi oi-book mx-2">  Study</button>
            </Link>
            <Link to={`/decks/${deck.id}/cards/new`}>
                <button className="btn btn-primary oi oi-plus" >  Add Cards</button>
            </Link>
            <button onClick={() => handleDeleteDeck(deckId)} className="float-right oi oi-trash btn btn-danger" ></button>
        </div>
        <h2>Cards</h2>
            <ul>
            {deck.cards.map((card) => (
            <CardsList card={card} deleteCardDeck={deleteCardDeck} />
            ))}
            </ul>
        </div>

        </div>
    )
}

export default ViewDeck