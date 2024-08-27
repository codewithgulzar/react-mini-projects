/* eslint-disable react/prop-types */
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
    return (
        <div className="todo-list">
            <AddTodo todos={todos} setTodos={setTodos} />
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    );
}
