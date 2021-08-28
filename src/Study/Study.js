import React, {useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import StudyCard from "./StudyCard";
import NotEnoughCards from "./NotEnoughCards";

function Study () {
    const [deck, setDeck] = useState({cards: []});
    const deckId = useParams().deckId;

    useEffect(()=> {
        const abortController = new AbortController();
        async function getDeck () {
            const response = await readDeck(deckId, abortController.signal)
            setDeck(response)      
        }  
        getDeck();
        return () => abortController.abort();
    }, [deckId])


    if (!deck.id){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
 if(deck.cards.length > 2){
    return (
        <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link className="oi oi-home" to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
                <Link to={`/decks/${deck.id}`} >{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active">Study</li>
          </ol>
        </nav>
        <h2>Study: {deck.name}</h2>
            <StudyCard cards={deck.cards} cardsLength={deck.cards.length}/>
        </div>
    )
    }
    else {
        return (
            <div>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                  <Link className="oi oi-home" to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                  <Link to={`/decks/${deck.id}`} >{deck.name}</Link>
              </li>
              <li className="breadcrumb-item active">Study</li>
            </ol>
          </nav>
          <h2>Study: {deck.name}</h2>
            <NotEnoughCards cardsLength={deck.cards.length} deckId={deck.id}></NotEnoughCards>
        </div>
        )
    }

}

export default Study;