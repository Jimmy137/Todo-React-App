import { useState } from "react"

export default function TodoForm ({addTask}) {
    const [task, setTask] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(task)
        setTask('')
    }
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={task}
                 placeholder="New task" 
                 name='task' 
                 onChange={handleChange} 
                 className="todo-input"
                 required></input>
                <button className="todo-btn" type="submit" >Add Task</button>
            </form>
        </div>
    )
}