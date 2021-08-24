import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { listDecks } from "../utils/api";
import Decks from "./Decks";


function Home () {
const [decks, setDecks] = useState([]);

//returns an array of the two decks
//each item in the array is an array of cards
    useEffect(()=> {
        async function getDecks() {
            const response = await listDecks();
            setDecks(response)
        }
        getDecks();
    }, [])
    
    function clickDelete (id) { 
        setDecks(decks.filter(deck => deck.id !== id))
    }
 
    return (
        <div>
            <div class="ml-5">
                <Link to="/decks/new">
                    <button class="btn btn-secondary oi oi-plus">  Create Deck </button>
                </Link> 
            </div>
        <ul>
            {decks.map((deck) => (
            <Decks deck={deck} key={deck.id} clickDelete={clickDelete} />
            ))}
        </ul>
        </div>
    )
}

    export default Home