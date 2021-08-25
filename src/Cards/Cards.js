import reat from "react";
import { Link } from "react-router-dom"

function Cards ({card}) {
 
    //still need to handle delete button
  
 
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
            <button className="btn btn-secondary oi oi-pencil mr-2">Edit</button>
          </Link>
          <button className="btn btn-danger oi oi-trash"></button>
        </div>
        </div>
    </li>
      
  )
  
}

export default Cards