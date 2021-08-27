import { useState, useEffect} from "react"
import CardForm from "./CardForm";
import { Link, useParams, useHistory } from "react-router-dom"
import { readCard, updateCard } from "../utils/api";


function EditCard ({deck}) { 
    const history = useHistory()
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
    

    function handleChange ({target}) {
        setCard({...card,
        [target.name]: target.value})
    }

    async function handleSubmit (event) {
        event.preventDefault();
        await updateCard(card);
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
                        <Link to={`/decks/${deck.id}`}>Deck {deck.name}</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Edit Card {cardId}
                    </li>
                </ol>
            </nav>
            <h3>Edit Card</h3>
            <div>
                <CardForm handleChange={handleChange} card={card} deck={deck} />
            </div>
            <div>
                <button  type="cancel" className="btn btn-secondary mr-2">Cancel</button>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
        </div>
        </div>
        )
}

export default EditCard