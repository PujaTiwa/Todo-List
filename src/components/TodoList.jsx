/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodo from './EditTodo';
import { v4 as uuidv4} from 'uuid'
uuidv4();

const TodoList = () => {
    const [todoValue, setTodoValue] = useState([]);

    const createTodo = (todo) => {
        setTodoValue([...todoValue, {id: uuidv4(), task: todo, isEditing: false}])
        // setTodoValue([...todoValue, { task: todo, isEditing: false }])
    }

    const deleteTodo = (id) => {
        setTodoValue(todoValue.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodoValue(todoValue.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodoValue(todoValue.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }
    return (
        <div className='w-[50%] m-auto bg-blue-950 mt-20 p-8 rounded-md shadow-xl shadow-black'>
        <h1 className='text-center text-3xl text-white mb-5 font-bold '>Todo List App</h1>
            <TodoForm createTodo={createTodo} />
            {
                todoValue.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodo key={index} editTodo={editTask} task={todo} />
                    ) : (
                        <Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))
            }
        </div>
    );
}

export default TodoList;
