import { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import EditDeckForm from "./EditDeckForm";
import {readDeck} from "../utils/api";

function EditDeck () {
    const [ deck, setDeck ] = useState({});
    const {deckId} = useParams();

    useEffect(() => {
        const abortController = new AbortController();
        async function loadDeck () {
        const response = await readDeck(deckId, abortController.signal)
        setDeck(response)
    }
    loadDeck();
    return () => abortController.abort();
}, [deckId])


    return (
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
                <EditDeckForm deck={deck}/>
            </div>
        </div>
    ) 
}



export default EditDeck