import React, { useState } from 'react';

function ToDoApp(){

    const [tasks, setTasks] = useState(["Eat", "shower", "iron"]);
    const [newTask, setNewTask] = useState("");

    // //tutor's version
    // function handleInputChange(event){
    //     setNewTask(event.target.value);
    // }

    //my own version
    const handleInputChange = (e) => setNewTask(e.target.value);

    const addTask = () => {
        if(newTask.trim() !== ""){
                setTasks(t=> [...t, newTask]);
                setNewTask("");
        }
    }

    const deleteTask = (index) => {

        //tutor version - better to debug
        const updatedTasks = tasks.filter((_, i) => index !== i);
        setTasks(updatedTasks);

        // //my version - shorter but not very readable, not easy to debug
        // setTasks(tasks.filter((_, i) => index !== i));
    }

    const moveTaskUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index-1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index-1]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown= (index) => {
        if(index < tasks.length - 1){
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
                setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder="Enter Task" value={newTask} onChange={handleInputChange}/> 
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                    <span className="text">{task}</span>
                    <button className="move-btn" onClick={() => moveTaskUp(index)}>🔼</button>
                    <button className="move-btn" onClick={() => moveTaskDown(index)}>🔽</button>
                    <button className="delete-btn" onClick={()=> deleteTask(index)}>✖️</button>
                </li>)}
            </ol>
        </div>
    );
}

export default ToDoApp;