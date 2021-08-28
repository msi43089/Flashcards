import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import DeckForm from "./DeckForm";
import { createDeck } from "../utils/api";


function AddDeck () {
    const history = useHistory();
 
const [ deck, setDeck] = useState({name: "", description: ""});

async function handleSubmit (event) {
    event.preventDefault();
    const response = await createDeck(deck);
    history.push(`/decks/${response.id}`)
}

function handleChange ({target}) {
    setDeck({...deck,
    [target.name]: target.value})
}

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="oi oi-home" to="/">  Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Create Deck
                    </li>
                </ol>
            </nav>
            <h1>Create Deck</h1>
            <div>
                <DeckForm deck={deck} history={history} handleSubmit={handleSubmit} handleChange={handleChange}/>
            </div>
        </div>
    ) 
}

export default AddDeck;