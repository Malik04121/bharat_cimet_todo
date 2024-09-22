import { useEffect, useState } from "react"
import "../Css/Edit.css"

function Edit({EditToddo,id, todos, closeModal}) {
    const [todo, setTodo] = useState("")

    function formSubmit(event) {
        event.preventDefault();
        EditToddo(todo)
    }

    useEffect(()=>{
       let filteredTodo = todos.filter((elem)=>{
            if(elem.id==id){
                return true
            }
            return false
        })

        setTodo(()=>filteredTodo[0])

    },[id])

    return (
        <div className="edit-modal">
            <button onClick={closeModal} className="cut-close">X</button>
            <form className="create-form" onSubmit={formSubmit}>
                <input type="text" onChange={(e) => setTodo(() =>{return {...todo,todo: e.target.value}})} value={todo.todo} placeholder="Todo here..." />
                <input className="create-btn" type="submit" value="Create" />
            </form>
        </div>
    )
}

export default Edit