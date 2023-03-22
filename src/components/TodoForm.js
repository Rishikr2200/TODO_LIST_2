import React from 'react'

const TodoForm = ({handlesubmit,todo,settodo,editId}) => {
  return (
    <form className='todoform' onSubmit={handlesubmit}>
        <input type="text" value={todo} onChange={(e)=>settodo(e.target.value)} />
        <button type='submit'>{editId ? "Edit" : "Go"}</button>
    </form>
  )
}

export default TodoForm
