import { useEffect, useState} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import DeckForm from "./DeckForm";
import { readDeck, updateDeck } from "../utils/api";

function EditDeck () {
    const [ deck, setDeck ] = useState({name: "", description: ""});
    const {deckId} = useParams();
    const history = useHistory();

    useEffect(() => {
        const abortController = new AbortController();
        async function loadDeck () {
        const response = await readDeck(deckId, abortController.signal)
        setDeck(response)
    }
    loadDeck();
    return () => abortController.abort();
}, [deckId])
    
    async function handleSubmit (event) {
        event.preventDefault();
        await updateDeck(deck);
        history.push(`/decks/${deck.id}`)
    }

    function handleChange ({target}) {
        setDeck({...deck,
        [target.name]: target.value})
    }


  
    return (
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link className="oi oi-home" to="/">  Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            Edit Deck
                        </li>
                    </ol>
                </nav>
            <h1>Edit Deck</h1>
            <div>
                <DeckForm history={history} handleChange={handleChange} handleSubmit={handleSubmit} deck={deck}/>
            </div>
        </div>
    </div>
    ) 

}



export default EditDeck;