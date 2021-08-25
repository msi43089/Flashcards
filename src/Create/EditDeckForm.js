import react, {useState, useEffect} from "react"
import { useHistory, useParams } from "react-router-dom"
import { createDeck, readDeck } from "../utils/api";


function EditDeckForm ({deck}) {
const history = useHistory();
const initialState = {
    name: "",
    description: ""
}
const [ formData, setFormData] = useState({...initialState});

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
    //const response = await createDeck(formData);
    history.push("/")
  
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
                    placeholder={deck.name}
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
                placeholder={deck.description}
                ></textarea>
            </div>
            <div>
            <button onClick={handleCancel} type="cancel" className="btn btn-secondary mr-2">Cancel</button>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )

}
export default EditDeckForm