import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState<number>(0);

    const handleIncrease = (): void => {
        setCounter(counter + 1);
    }
    const handleDecrease = (): void => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>This is counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>+</button> <span></span>
            <button onClick={handleDecrease}>-</button>
        </div>
    );
};

export default Counter;