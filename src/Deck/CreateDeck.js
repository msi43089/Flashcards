import react from "react";
import { Link } from "react-router-dom"
import CreateDeckForm from "./CreateDeckForm";

function CreateDeck () {

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="oi oi-home" to="/">  Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Create Deck
                    </li>
                </ol>
            </nav>
            <h1>Create Deck</h1>
            <div>
                <CreateDeckForm />
            </div>
        </div>
    ) 
}

export default CreateDeck