/* eslint-disable react/prop-types */
import { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    createTodo(value);
    setValue('')
  }

  return (
    <form className='flex justify-center items-center mb-4 font-primary w-full ' onSubmit={handleSubmit}>
      <input
        type='text'
        className='outline-none bg-transparent tracking-wide font-bold border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300'
        placeholder='Add your next todo here...' onChange={(e) => setValue(e.target.value)} value={value}
      />
      <button
        className='bg-gray-700 mb-7 border-none p-3 text-white cursor-pointer ml-6 rounded font-bold tracking-wider text-xl'
      >
        Add Task
      </button>
    </form>
  )
}

export default TodoForm;