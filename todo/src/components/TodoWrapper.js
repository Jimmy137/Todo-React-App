import TodoForm from "./TodoForm"
import { useState } from "react"
import {v4 as uuid} from 'uuid'
import Task from "./Task"


export default function TodoWrapper (props) {
    const [tasks, setTasks] = useState([])
    const addTask = (t) => {
        setTasks([...tasks, {id:uuid(), name: t, isDone: false, isEditing: false}] )
        
    }
    console.log(tasks)

    const toggle = (id) => {
        setTasks(tasks.map((task)=> (
            task.id === id ? {...task, isDone : !task.isDone} : task
        )))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((t)=> t.id !== id))
    }

    const edit = (id) => {
        setTasks(tasks.map((task)=> (
            task.id === id ? {...task, isEditing : true} : task
        )))
       
    }
    const submitEdited = (id, v) => {
        
            
            console.log(tasks)
            setTasks(tasks.map((task)=> (
                task.id === id ? {...task, name : v, isEditing : false} : task
            )))

        
    }
    return (
        <div className="TodoWrapper">
            <h1>Tasks</h1>
            <TodoForm addTask = {addTask}/>
            <ul>
                {tasks.map((t,i) => <Task submitEdited= {submitEdited} edit = {edit} deleteTask={deleteTask} toggle={toggle} key={i} task = {t}/>)}
            </ul>
            
        </div>
        
    )
}