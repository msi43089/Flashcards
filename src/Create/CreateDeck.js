import react from "react";
import { Link } from "react-router-dom"
import CreateDeckForm from "./CreateDeckForm";

function CreateDeck () {

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link class="oi oi-home" to="/">  Home</Link>
                    </li>
                    <li class="breadcrumb-item active">
                        Create Deck
                    </li>
                </ol>
            </nav>
            <div>
                <CreateDeckForm />
            </div>
        </div>
    ) 
}

export default CreateDeck