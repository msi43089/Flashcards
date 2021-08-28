import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createCard } from "../utils/api";
import CardForm from "./CardForm";

function AddCard ({deck}) {
    const history = useHistory();
    const [card, setCard] = useState({front: "", back: ""});

    function handleChange ({target}) {
        setCard({...card,
        [target.name]: target.value})
    }
    
    async function handleSave (event) {
        event.preventDefault();
        await createCard(deck.id, card);
        history.push(`/decks/${deck.id}`)

    }
    
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="oi oi-home" to="/">  Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Add Card
                    </li>
                </ol>
            </nav>
            <h3>{deck.name}: Add Card</h3>
            <div>
                <CardForm handleChange={handleChange} card={card}/>
            </div>
            <div>
                <Link to={`/decks/${deck.id}`}>
                    <button className="btn btn-secondary mr-2">Done</button>
                </Link>
                <button onClick={handleSave} type="submit" className="btn btn-primary">Save</button>
            </div>
        </div>
        )
}

export default AddCard;