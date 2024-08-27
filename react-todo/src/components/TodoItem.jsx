/* eslint-disable react/prop-types */
export default function TodoItem({ todo, todos, setTodos }) {
    function handleDelete() {
        const updatedTodos = todos.filter((item) => item.id != todo.id);
        setTodos(updatedTodos);
    }

    function handleToggerComplete() {
        const updatedTodos = todos.map((item) =>
            item.id === todo.id ? { ...item, completed: !item.completed } : item
        );
        setTodos(updatedTodos);
    }
    console.log(todos);
    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <input type="checkbox" onChange={handleToggerComplete} />
            <span>{todo.text}</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}
