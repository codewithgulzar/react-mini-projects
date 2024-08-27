/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTodo({ todos, setTodos }) {
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event) {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }
    // console.log(inputValue);

    function handleAddTodo(event) {
        event.preventDefault();

        if (inputValue.trim() === "") {
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: inputValue.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setInputValue("");
    }

    return (
        <div className="add-todo">
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Add a new todo"
                    onChange={handleInputChange}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}
