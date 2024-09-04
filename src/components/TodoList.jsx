/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
// import {v4 as uuidv4} from 'uuid'
// uuidv4();

const TodoList = () => {
    const [todoValue, setTodoValue] = useState([]);

    const createTodo = (todo) => {
        // setTodoValue([...todoValue, {id: uuidv4(), task: todo, isEditing: false}])
        setTodoValue([...todoValue, {task: todo, isEditing: false}])
    }

    const deleteTodo = (id) => {
        setTodoValue(todoValue.filter(todo => todo.id !== id))
    }

    const editTodo = (id) =>{
        setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo))
    }
  return (
    <div className='container bg-blue-950 mt-20 p-8 rounded-md'>
      <TodoForm createTodo = {createTodo} />
      {
        todoValue.map((todo, index) => 
         <Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      }
    </div>
  )
}

export default TodoList;
