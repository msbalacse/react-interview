import React from 'react';
import UserRegister from '../components/UserRegister';
import { useAppSelector } from '../hooks';
import { TUsers } from '../types/global';
import { Container } from '@mui/material';

import './User.css';

const Users = () => {
    const users = useAppSelector((state) => state.users.users);

    return (
        <Container className="container">
            <UserRegister />
            <User users={users} />
        </Container>
    );
};

const User: React.FC<TUsers> = ({ users }) => {
    return (
        <section>
            <h1>Users</h1>
            <p>Total : {users.length}</p>
            <section>
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h1>{user.name}</h1>
                            <p>{user.age}</p>
                            <p>{user.country}</p>
                        </div>
                    );
                })}
            </section>
        </section>
    );
};

export default Users;
