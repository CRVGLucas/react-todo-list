import './styles.css'
export function Todo({ todo, onChanteStatus }) {
    return (
        <div class="todo">
            <h1>{todo.name}</h1>
            <div className="todoTaskCheckContainer">
                <span className="tasksStatusTitle">Concluido ?</span>
                <input 
                    type="checkbox" 
                    value={todo.done}
                    disabled={todo.done === true}
                    className="checkBoxTodo"
                    onChange={() => onChanteStatus(todo)}
                />
            </div>


        </div>
    )
}