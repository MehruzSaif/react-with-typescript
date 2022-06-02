import React from 'react';
import User from './User';

const Users = () => {

    const handleAddUser = (): void => {

    }

    return (
        <div>
            <h2>My users</h2>
            <User name="Arnob" age={55} addUser={handleAddUser}></User>
        </div>
    );
};

export default Users;