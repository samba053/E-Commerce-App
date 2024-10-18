import DeleteTodo from './DeleteTodo';
import { useState } from 'react';

function Todo(props) {
    const [isShowModal, setIsShowModal] = useState(false);  
    const { todo } = props;

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-800">{todo.title}</h3>
            <p className="text-gray-600 mt-2">{todo.description}</p>
            <div className="mt-4 flex items-center justify-between">
                <span
                    className={`inline-block px-3 py-1 text-sm font-medium rounded-full text-white ${todo.isCompleted ? 'bg-green-500' : 'bg-red-500'}
                        }`}>
                    {todo.isCompleted ? 'Completed' : 'In Complete'}
                </span>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-full ml-4"
                    onClick={() => setIsShowModal(true)}
                >
                    Delete
                </button>
            </div>

            {isShowModal && <DeleteTodo setIsShowModal={setIsShowModal} todoId={todo.id}/>}
        </div>
    )
}

export default Todo;