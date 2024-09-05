/* eslint-disable react/prop-types */
import { useState } from 'react'

const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(value, task.id);
    setValue('')
  }

  return (
    <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
      <input
        type='text'
        className='outline-none bg-transparent tracking-wider font-bold border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='Update your task here...'
        onChange={(e) => setValue(e.target.value)} value={value}
      />
      <button
        className='bg-gray-700 mb-7 border-none p-3 text-white cursor-pointer ml-6 rounded font-bold tracking-wider text-xl'
      >
        Edit Task
      </button>
    </form>
  )
}

export default EditTodo;