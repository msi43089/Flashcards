import react, { useState } from "react"
import { useHistory } from "react-router-dom"


function StudyCard ({cards, cardsLength}) {
    const history = useHistory();

    const initialState = {
        cardNumber: 0,
        frontSide: true,
    };
    const [card, setCard] = useState({...initialState});

    //if not last card in array. reset side state and increase card # by 1
    //if last card - prompt alert
    function handleNext () {
        if(card.cardNumber + 1 === cardsLength) {
            if(window.confirm("Restart cards? Click 'cancel' to return to the home page.")){
                setCard({...initialState})
            }
            else {
                history.push("/")
            }
        }
        else {
            setCard({
                ...initialState,
                cardNumber: card.cardNumber + 1
            })
        }
    }

    //change side of card showing
    function handleFlip () {
        if(card.frontSide){
            setCard({...card,
            frontSide: false})
        }
        else {
            setCard({...card,
            frontSide: true})
        }
    }

    //shows front of card if frontSide state is true - back if not
   let description = card.frontSide ? cards[card.cardNumber].front : cards[card.cardNumber].back
  
    if(card.frontSide){
        return (
            <div className="card">
                <div>
                    <h3 className="card-title m-3">Card {card.cardNumber + 1} of {cardsLength}</h3>
                    <p className="card-body">{description}</p>
                </div>
                <div>
                <span>
                    <button onClick={handleFlip} className="btn btn-secondary mx-3 mb-3">Flip</button>
                </span>
                </div>
            </div>
    )
    }
    else {
        return (
            <div className="card">
                <div>
                    <h3 className="card-title m-3">Card {card.cardNumber + 1} of {cardsLength}</h3>
                    <p className="card-body">{description}</p>
                </div>
                <div>
                <span>
                    <button onClick={handleFlip} className="btn btn-secondary mx-3 mb-3">Flip</button>
                </span>
                <span>
                    <button onClick={handleNext} className="btn btn-primary mb-3">Next</button>
                </span>
                </div>
            </div>
        )
    }


}

export default StudyCard