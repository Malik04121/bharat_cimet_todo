import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import CreateTodo from './Components/CreateTodo';
import Edit from './Components/Edit';


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))||[])
  const [id,setId]= useState("")

  function createTodo(todo) {
    localStorage.setItem('todos',JSON.stringify([...todos, todo]))
    setTodos(() => [...todos, todo])
  }

  function toggleTodoStatus(id){
    let toggledData =todos.map((elem)=>{
      if(elem.id==id){
        return {...elem, status:elem.status=="complete"?"pending":"complete"}
      }
      return elem
    })
    localStorage.setItem('todos',JSON.stringify([...toggledData]))
    setTodos(()=>toggledData)
  }

  function EditToddo(todo){
      let newTodos =  todos.map((elem)=>{
          if(elem.id == todo.id){
            return todo
          }
          return elem
      })
      setTodos(()=>newTodos)
      localStorage.setItem('todos',JSON.stringify([...newTodos]))
      setId(()=>"")
  }

  function DeleteTodo(id){
        let newdata = todos.filter((elem)=>{
            return elem.id!=id
        })
        localStorage.setItem('todos',JSON.stringify([...newdata]))
        setTodos(()=>newdata)
  }

  function closeModal(){
    setId(()=>"")
  }

  return (
    <div className="App">
      <CreateTodo createTodo={createTodo} />
      <div >
        <table className='all-todos'>

        <tr className='table-row'>
          <th>Todo</th>
          <th>Status</th>
          <th>Buttons</th>
        </tr>
        {
         todos.length>0 &&  todos.map((elem) => {
            return <tr className='table-row' key={elem.id}>
              <td>{elem.todo}</td>
              <td>{elem.status}</td>
              <td className='btn-container'>
                { elem.status=="complete"?<button className='toggle-status-btn' onClick={()=>toggleTodoStatus(elem.id)}>
                  mark as incomplete
                </button>:
                  <button className='toggle-status-btn' onClick={()=>toggleTodoStatus(elem.id)}>
                  mark as complete
                </button>
                }
                <button onClick={()=>DeleteTodo(elem.id)}>
                  Delete
                </button>
                <button onClick={()=>setId(elem.id)}>Edit</button>
              </td>
            </tr>
          })
        }
        </table>
      </div>
        {id && <Edit closeModal={closeModal} todos={todos} EditToddo={EditToddo} id={id} />}
    </div>
  );
}

export default App;
