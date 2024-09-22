import { useState } from "react"
import "../Css/CreateTodo.css"

function CreateTodo({createTodo}) {
    const [todo, setTodo] = useState("")
    const [status, setStatus] = useState("pending")

    function formSubmit(event) {
        event.preventDefault();
        let id = Date.now()
        createTodo({todo,status,id})
        setTodo(()=>"")
    }

    return (
        <div>
            <form className="create-form" onSubmit={formSubmit}>
                <input type="text" onChange={(e) => setTodo(() => e.target.value)} value={todo} placeholder="Todo here..." />
                {/* <div className="status-container">
                    Status: 
                    <label>
                        <input
                            type="radio"
                            value="complete"
                            checked={status === "complete"}
                            onChange={onValueChange} />
                        Complete
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="pending"
                            checked={status === "pending"}
                            onChange={onValueChange} />
                        Pending
                    </label>
                </div> */}
                <input className="create-btn" type="submit" value="Create" />
            </form>
        </div>
    )
}

export default CreateTodo