import TodoContext from "../services/TodoContext";
import { useContext } from "react";

function DeleteTodo(props) {
    const { setIsShowModal, todoId } = props;
    const { confirmDelete } = useContext(TodoContext);
    
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Delete Todo</h2>
                <p className="mb-6">Are you sure you want to delete this todo? This action cannot be undone.</p>
                <div className="flex justify-end">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                        onClick={() => setIsShowModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            confirmDelete(todoId);
                            setIsShowModal(false);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteTodo;