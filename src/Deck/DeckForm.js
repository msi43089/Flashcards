
function DeckForm ({handleCancel, handleChange, handleSubmit, deck}) {

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
                    value={deck.name}
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
                value={deck.description}
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

export default DeckForm