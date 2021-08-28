import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api";
import DecksList from "./DecksList";

function Home () {

    const [decks, setDecks] = useState([]);

    useEffect(()=> {
        async function getDecks() {
            const response = await listDecks();
            setDecks(response)
        }
        getDecks();
    }, [])
    
    function newDecks (id) { 
        setDecks(decks.filter(deck => deck.id !== id))
    }
 
    return (
        <div>
            <div className="ml-5">
                <Link to="/decks/new">
                    <button className="btn btn-secondary oi oi-plus">  Create Deck </button>
                </Link> 
            </div>
        <ul>
            {decks.map((deck) => (
            <DecksList deck={deck} key={deck.id} newDecks={newDecks} />
            ))}
        </ul>
        </div>
    )
}

    export default Home;