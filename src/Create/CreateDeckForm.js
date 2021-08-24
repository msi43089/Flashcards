import react from "react"

function CreateDeckForm () {

    return (
        <form>
            <h1>Create Deck</h1>
            <label>Name</label>
            <br />
            <input type="text" class="w-100"></input>
            <div style={{height: "100px"}}>
            <label>Description</label>
            <textarea class="w-100 h-100 "></textarea>
            </div>
        </form>
    )

}

export default CreateDeckForm