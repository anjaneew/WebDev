import React, {useState} from 'react'

// localStorage.removeItem("todolist");

function ToDoApp(){

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("todolist")) || []);
    const [activity, setActivity] = useState("");
     

    const saveTasks = (data) => localStorage.setItem("todolist", JSON.stringify(data));

    const handleTaskChange = (e) => {
        const newTask = e.target.value;
        setActivity(newTask);
    }

    const handleAddTask = () => {
        setTasks((t) => {
            const updated = [...t, activity];
            saveTasks(updated);
            return updated
        })
        setActivity("");
    }

    const handleTaskRemove = (index) => {
        setTasks(() => {
            const updated = tasks.filter((_,i) => index !== i);
            saveTasks(updated);
            return updated;
        });
        
    }

    return(
        <>
            <h1>~To Do App~</h1>
            <ul>
                {tasks.map(((task, index) => <li key={index}>{task} 
                    <span onClick={() => handleTaskRemove(index)}>✖️</span></li>))}
            </ul>

            <input type="text" onChange={handleTaskChange} value={activity}/>
            <button onClick={handleAddTask}>Add Task</button>
        </>
    );
}

export default ToDoApp;