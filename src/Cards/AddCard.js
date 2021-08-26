import { useState } from "react"
import { Link } from "react-router-dom";
import CardForm from "./CardForm";

function AddCard ({deck}) {
    const [card, setCard] = useState({front: "", back: ""});

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
                <CardForm card={card}/>
            </div>
            <div>
                <button  type="cancel" className="btn btn-secondary mr-2">Done</button>
                <button type="submit" className="btn btn-primary">Save</button>
        </div>
        </div>
        )
}

export default AddCard