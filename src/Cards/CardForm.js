import React from "react";

function CardForm ({card}) {




    return (
        <form>
        <div className="form-group">
            <label htmlFor="front">Front</label>
            <br />
            <textarea
                id="front" 
                name="front" 
                rows="2"
                className="form-control"
                value={card.front}
   
                placeholder="Front side of card"
            ></textarea>
        </div>
        <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea 
            id="back"
            className="form-control"
            rows="2"
            name="back"
            value={card.back}

            placeholder="Back side of card"
            ></textarea>
        </div>
    </form>
    )
}

export default CardForm