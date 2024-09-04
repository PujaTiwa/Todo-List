import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

const Todo = ({ task, deleteTodo, editTodo }) => {
    return (
        <div className='flex justify-between items-center bg-violet-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
            <p className='font-primary'>{task.task}</p>
            <div className='flex items-center gap-x-4'>
                <FaEdit className='text-xl' onClick={() => editTodo(task.id)} />
                <MdAutoDelete className='text-xl' onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo
