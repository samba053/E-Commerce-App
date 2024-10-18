import TodoContext from '../services/TodoContext';
import { useState } from 'react';
import Todo from '../components/Todo';

function Todos() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Complete project documentation",
            description: "Finalize and submit the project documentation to the team",
            isCompleted: false
        },
        {
            id: 2,
            title: "Weekly meeting with client",
            description: "Discuss project milestones and next deliverables",
            isCompleted: true
        },
        {
            id: 3,
            title: "Code review session",
            description: "Review pull requests and provide feedback",
            isCompleted: false
        },
        {
            id: 4,
            title: "Update team on progress",
            description: "Send a status update email to the team by EOD",
            isCompleted: true
        },
        {
            id: 5,
            title: "Test new features",
            description: "Test the newly implemented features before deployment",
            isCompleted: false
        }
    ]);
    const confirmDelete = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Todos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TodoContext.Provider value={{confirmDelete}}>
                    {todos.map(todo => (
                        <Todo todo={todo}/>
                    ))}
                </TodoContext.Provider>
            </div>
        </div>
    )
}

export default Todos;