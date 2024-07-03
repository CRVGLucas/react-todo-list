import "./styles.css";
import { useState } from "react";
import { Todo } from "../src/components/Todo"
function App() {
  const [todoName, setTodoName] = useState('')
  const [todoList, setTodoList] = useState([])
  function handleCreateNewTodo(event){
      event.preventDefault()
      setTodoList((beforeTodoListValue) => [...beforeTodoListValue, { name: todoName, done: false }])
      setTodoName('')
  }
  function changeTodoStatusTask(todo) {
    const todoListChanged = todoList
    todoListChanged.map((todoMap) => {
      if(todoMap.name === todo.name) {
        todoMap.done = true
      }
    })
    setTodoList(todoListChanged)
  }
  return (
      <div className="homeContainer">
          <section>
              <form className="formContainer" onSubmit={(event) => handleCreateNewTodo(event)}>
                  <input 
                    value={todoName} 
                    className="formInput"
                    placeholder="Nome da tarefa" 
                    onChange={(event) => setTodoName(event.target.value)} 
                  />
                  <button 
                    type="submit"
                    className="formSubmitButton" 
                    disabled={todoName.length === 0}
                  >Criar Tarefa</button>
              </form>
          </section>
          <section>
              {
                  todoList.length == 0 && <div>
                      <h1>Nenhuma tarefa criada.</h1>
                  </div>
              }

              {
                  todoList.length > 0 && <div className="todoListContainer">
                          {
                              todoList.map((todo) => {
                                  return <Todo todo={todo} onChanteStatus={changeTodoStatusTask}/>
                              })
                          }
                  </div>
              }
          </section>
      </div>
  );
}

export default App;
