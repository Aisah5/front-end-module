import React, { useState, useEffect } from 'react';
import useCounter from './components/counterHooks'

import useProfile from './json/userProfile.json'

function ReactHooks() {
    const [count, increments, decrements] = useCounter(0,1);
    const { name, age } = useProfile;

    useEffect(() => {
        document.title = `you click ${count} times`
    }, [count]);

    return (
        <div>
            <h2>React Hooks</h2>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <br/>
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