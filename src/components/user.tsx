import React from 'react';
import IUserModel from '../models/UserModel';

interface IUserComponent {
    user: IUserModel
}

const UserComponent: React.FunctionComponent<IUserComponent> = ({user}) => {
    return(
        <div>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Created At: {user.createdAt.toDateString()}</div>
            <div>Updated At: {user.updatedAt.toDateString()}</div>
            <br/>
        </div>
    )
}

export default UserComponent;
