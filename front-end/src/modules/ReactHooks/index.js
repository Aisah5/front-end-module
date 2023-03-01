import React, { useState, useEffect } from 'react';
import useCounter from './components/counterHooks'

function ReactHooks() {
    const [count, increments, decrements] = useCounter(0,1);

    useEffect(() => {
        document.title = `you click ${count} times`
    }, [count]);

    return (
        <div>
            <h2>React Hooks</h2>

            <p>you clicked {count}</p>
            <button onClick={increments}>
                increase count
            </button>
            <button onClick={decrements}>
                Decrements count
            </button>
        </div>
    )
}

export default ReactHooks;