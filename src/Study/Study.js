import React, {useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { readDeck } from "../utils/api"
import StudyCard from "./StudyCard"
import NotEnoughCards from "./NotEnoughCards"

function Study () {
    const initialState = {
        deckId: null,
        cards: null,
        cardsLength: null,
        name: null}
    const [deck, setDeck] = useState({});
    const deckId = useParams().deckId;

    useEffect(()=> {

        async function getDeck () {
            const response = await readDeck(deckId)
            setDeck({
                deckId: response.id,
                cards: response.cards,
                cardsLength: response.cards.length,
                name: response.name});
        }
        getDeck();
    }, [deckId])

console.log(deck)

 if(deck.cardsLength > 2){
    return (
        <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <Link class="oi oi-home" to="/">Home</Link>
            </li>
            <li class="breadcrumb-item">
                <Link to={`/decks/${deckId}`} >{deck.name}</Link>
            </li>
            <li class="breadcrumb-item active">Study</li>
          </ol>
        </nav>
        <h2>Study: {deck.name}</h2>
            <StudyCard cards={deck.cards} cardsLength={deck.cardsLength}/>
        </div>
    )
    }
    else {
        return (
            <NotEnoughCards cardsLength={deck.cardsLength} deckId={deck.Id}></NotEnoughCards>
        )
    }

}

export default Study