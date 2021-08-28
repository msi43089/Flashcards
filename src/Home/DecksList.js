import React from "react";
import { Link} from "react-router-dom";
import { deleteDeck } from "../utils/api";

function DecksList ({deck, newDecks}) {

    function handleDelete () {
        if (window.confirm("Delete this deck?")){
            async function deleteDecks() {
                await deleteDeck(deck.id);
                newDecks(deck.id)
            }
            deleteDecks();
        }
    }

    return (
        <li className="mt-3 card">
            <div className ="card-body">
                <div className="card-title"> 
                <span className="float-right text-muted">
                    <p>{deck.cards.length} cards</p>
                </span>
                <span>
                    <h3>{deck.name}</h3>
                </span>
                </div> 
                    
            <p className="card-text">{deck.description}</p>
            <div> 
                <span> 
                    <Link to={`/decks/${deck.id}`}>
                        <button className="btn btn-secondary oi oi-eye" > View</button> 
                    </Link> 
                </span>
                <span> 
                    <Link to={`/decks/${deck.id}/study`}>
                        <button className="btn btn-primary oi oi-book mx-3"> Study</button> 
                    </Link> 
                </span>
                <span>
                    <button onClick={handleDelete} className="float-right btn btn-danger oi oi-trash p-2"></button>
                </span>
            </div>
            </div>
        </li>
    )

    

}

export default DecksList;