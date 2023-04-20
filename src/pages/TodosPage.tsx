import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { v4 as uuidv4 } from 'uuid';
import { addTodo, removeTodo } from '../feature/todosSlice';


function TodosPage() {
    const { todos } = useAppSelector(state => state.todosState)
    const dispatch = useAppDispatch()
    const [todoInput, setTodoInput] = useState("")

    const handleAddTodo = () => {
        dispatch(addTodo({ id: uuidv4(), name: todoInput, done: false }))
    }

    const handleRemoveTodo = (id: string) => {
        dispatch(removeTodo(id))
    }

    return (
        <div>
            <div>
                <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            {todos.map(todo => <div><span>{todo.name}</span> <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button></div>)}
        </div>
    )
}

export default TodosPage