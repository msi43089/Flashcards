import { useState, useEffect} from "react"
import CardForm from "./CardForm";
import { Link, useParams } from "react-router-dom"
import { readCard } from "../utils/api";


function EditCard ({deck}) { 

    const [ card, setCard ] = useState({front: "", back: ""})
    const { cardId } = useParams() 


    useEffect(() => {
        const abortController = new AbortController();
        async function loadCard () {
        const response = await readCard(cardId, abortController.signal);
        setCard(response);
        }
        loadCard();
        return () => abortController.abort();
    }, [cardId])
    

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="oi oi-home" to="/">  Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={`/decks/${deck.id}`}>Deck {deck.name}</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Edit Card {cardId}
                    </li>
                </ol>
            </nav>
            <h3>Edit Card</h3>
            <div>
                <CardForm card={card} deck={deck} />
            </div>
            <div>
                <button  type="cancel" className="btn btn-secondary mr-2">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </div>
        )
}

export default EditCard