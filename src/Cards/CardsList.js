import reat from "react";
import { Link } from "react-router-dom"
import { deleteCard } from "../utils/api";

function CardsList ({card, deleteCardDeck}) {
 
  async function handleDeleteCard (id) {
    if (window.confirm("Delete this card? You will not be able to recover it.")) {
      await deleteCard(id)
      deleteCardDeck(id)
    }
  }
 
  return (
    <li className="card">
        <div className="card-body">
            <div className="row">
        <div className="col-6" >
            <p>{card.front}</p>
        </div>
        <div className="col-6">
            <p>{card.back}</p>
        </div>
            </div>
        <div className="d-flex justify-content-end" >
          <Link to="/decks/:deckId/cards/:cardId/edit">
            <button className="btn btn-secondary oi oi-pencil mr-2">   Edit</button>
          </Link>
          <button onClick={() => handleDeleteCard(card.id)} className="btn btn-danger oi oi-trash"></button>
        </div>
        </div>
    </li>
      
  )
  
}

export default CardsList