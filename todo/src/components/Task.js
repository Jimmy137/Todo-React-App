import { useState } from "react"


export default function Task (props) {
    let task = props.task
    let done = task.isDone
    const [edited, setEdited] = useState(task.name)
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     addTask(task)
    //     setTask('')
    // }

    const handleChange = (e) => {
        
        setEdited(e.target.value)
        
        
    }
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            props.submitEdited(task.id,e.target.value)
        }
        
    }
    return (
        <li key={props.key} >
            {task.isEditing ? 
            <div>
                <input className="edit" value={edited} onKeyDown={handleKey} onChange={handleChange}></input>
            </div>
            : 
            <p onClick={()=> props.toggle(task.id)} className={done? 'done': ''}>{task.name}</p>
            }
            
            <div className="btns">
                <button onClick={()=> {props.deleteTask(task.id)}} >Delete</button>
                <button onClick={()=> {props.edit(task.id)}} >Edit</button>
            </div>
            
        </li>
    )
}