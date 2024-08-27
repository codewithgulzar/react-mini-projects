import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
