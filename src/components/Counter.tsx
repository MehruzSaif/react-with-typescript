import React, { ChangeEvent, FormEvent, useState } from 'react';

const Counter = () => {

    interface User {
        name?: string,
        job?: string
    }

    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    const handleIncrease = (): void => {
        setCounter(counter + 1);
    }
    const handleDecrease = (): void => {
        setCounter(counter - 1);
    }

    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'Adam',
            job: 'Dev'
        }
        setUser(userData)
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }

    return (
        <div>
            <h1>This is counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>+</button> <span> Quantity </span>
            <button onClick={handleDecrease}>-</button>
        </div>
    );
};

export default Counter;