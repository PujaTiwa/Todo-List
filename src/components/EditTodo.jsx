/* eslint-disable react/prop-types */
import { useState } from 'react'

const EditTodo = ({editTodo, task}) => {
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('')
    }

  return (
    <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
        <input type='text' className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='Update your task' onChange={(e) => setValue(e.target.value)} value={value} />
        <button className='bg-gray-700 border-none p-2 text-white cursor-pointer ml-2'>Edit Task</button>
    </form>
  )
}

export default EditTodo;