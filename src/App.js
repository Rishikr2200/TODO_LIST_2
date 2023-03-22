import React, { useState } from 'react';
import "./App.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
    const [todo,settodo] = useState("");
    const [todos,settodos] = useState([]);
    const [editId,setEditId] = useState(0);

    const handlesubmit = (e) =>{
        e.preventDefault();

        if(editId){
            const edittodo = todos.find((i)=> i.id === editId);
            const updatedtodos=todos.map((t)=>t.id===edittodo.id?
            (t={id:t.id,todo}):{id:t.id,todo:t.todo});
            settodos(updatedtodos);
            setEditId(0)
            settodo("")
            return;
        }

        if(todo !== ''){
            settodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
            settodo("")
        }
    };
    const handleDelete =(id)=>{
        const deltodo=todos.filter((to)=>to.id !== id);
        settodos([...deltodo])
    }
    const handleEdit =(id)=>{
        const edittodo=todos.find((i)=>i.id===id);
        settodo(edittodo.todo);
        setEditId(id);
    }
  return (
    <div className='App'>
        <div className='container'>
            <h1>ToDo List</h1>
            <TodoForm handlesubmit={handlesubmit} todo={todo} settodo={settodo} editId={editId} />

            <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    </div>
  )
}

export default App;
