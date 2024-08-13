import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    // console.log(count);
    function increaseCount() {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        console.log(count);
    }

    function decreaseCount() {
        setCount((prevCount) => prevCount - 1);
        setCount((prevCount) => prevCount - 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div className="counter">
            <h1>Counter: {count}</h1>
            <button className="increment" onClick={increaseCount}>
                Increase
            </button>
            <button className="decrement" onClick={decreaseCount}>
                Decrease
            </button>
            <button className="reset" onClick={resetCount}>
                Reset
            </button>
        </div>
    );
}
