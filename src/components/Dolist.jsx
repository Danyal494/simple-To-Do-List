import React, { useEffect, useState } from 'react'

const Dolist = () => {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : ["Eat Breakfast", "Take a shower", "Walk the dog"];
    });
    const [newTask, setNewTask] = useState('');

    // Save tasks to localStorage whenever the tasks state is updated
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleInputChange(event){
        setNewTask(event.target.value)

    }
    function addTask(){
        if(newTask.trim() !== ""){ // in this func after clearing all whitespaceing it will strickly check is the input is empty or not

            setTasks(t => [...t,newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){
const updatedTasks = tasks.filter((_,i) => i !==index) // This function removes the element at the specified index from the tasks array and returns a new array with all other elements.
setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index > 0 && tasks.length > 1) { // Ensure valid index and array length
            const updatedTasks = [...tasks];
            // Swap the element with the one above it
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
    
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index) {
        if (index < tasks.length - 1 && tasks.length > 1) { // Ensure valid index and array length
            const updatedTasks = [...tasks];
            // Swap the element with the one below it
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    
            setTasks(updatedTasks);
        }
    }
    
  return (
    <div className='to-do-list bg-slate-700 h-screen '>
        <h1 className='text-center text-white pt-2 font-bold text-xl'>TO-DO-List</h1>
        <div className='my-8 flex justify-center items-center'>
            <input className='shadow-lg  border-2 pl-3 rounded-md' type="text" placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange}/>
            <button className='add-button bg-blue-600 p-2 rounded-lg text-white  ml-4' onClick={addTask}>
                Add
            </button>
        </div>

<ol className='flex justify-evenly items-center flex-wrap '>
    {
        tasks.map((task,index)=>
            <li key={index} className='shadow-2xl     my-5  p-4 rounded-xl bg-white '>
                <p className='text '>{task}</p>
                <div className='my-5'>

                <button className='delete-buton mx-4 bg-red-600 p-2 rounded-lg font-bold text-white' onClick={() => deleteTask(index)}>Delete</button>
                <button className='move-task-up-buton mx-4 bg-green-500 p-2 rounded-lg font-bold ' onClick={() => moveTaskUp(index)}>👆</button>
                <button className='move-task-down-buton  bg-blue-500 p-2 rounded-lg font-bold ' onClick={() => moveTaskDown(index)}>👇</button>
                </div>

            </li>
        )
    }
</ol>

    </div>
  )
}

export default Dolist