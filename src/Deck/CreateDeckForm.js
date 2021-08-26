import {useState} from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";


function CreateDeckForm () {

const history = useHistory();
const initialState = {
    name: "",
    description: ""
}
const [ formData, setFormData] = useState({...initialState})

function handleChange ({target}) {
    setFormData({...formData,
    [target.name]: target.value})
}

function handleCancel (event) {
    event.preventDefault();
    history.push("/")
}

async function handleSubmit (event) {
    event.preventDefault();
    const response = await createDeck(formData);
    history.push(`/decks/${response.id}`)
  
}

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <br />
                <input
                    id="name" 
                    name="name" 
                    type="text" 
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Deck Name"
                ></input>
            </div>
            <div className="form-group">
            <label htmlFor="description"> Description</label>
            <textarea 
                id="description"
                className="form-control"
                rows="3"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief description of the deck"
                ></textarea>
            </div>
            <div>
            <button onClick={handleCancel} type="cancel" className="btn btn-secondary mr-2">Cancel</button>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )

}

export default CreateDeckForm