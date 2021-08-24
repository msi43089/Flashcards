import React from "react"
import { Link} from "react-router-dom"
import { deleteDeck } from "../utils/api"

function Decks ({deck, clickDelete}) {

    function handleDelete () {
        if (window.confirm("Delete this deck?")){
            async function deleteDecks() {
                await deleteDeck(deck.id);
                clickDelete(deck.id)
            }
            deleteDecks();
        }
    }

    return (
        <li class="mt-3 card">
            <div class ="card-body">
                <div class="card-title"> 
                <span class="float-right text-muted">
                    <p>{deck.cards.length} cards</p>
                </span>
                <span>
                    <h3>{deck.name}</h3>
                </span>
                </div> 
                    
            <p class="card-text">{deck.description}</p>
            <div> 
                <span> 
                    <Link to={`/decks/${deck.id}/edit`}>
                        <button class="btn btn-secondary oi oi-eye" > View</button> 
                    </Link> 
                </span>
                <span> 
                    <Link to={`/decks/${deck.id}/study`}>
                        <button class="btn btn-primary oi oi-book mx-3"> Study</button> 
                    </Link> 
                </span>
                <span>
                    <button onClick={handleDelete} class="float-right btn btn-danger oi oi-trash p-2"></button>
                </span>
            </div>
            </div>
        </li>
    )

    

}

export default Decks