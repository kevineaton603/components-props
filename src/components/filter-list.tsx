import React from 'react';
import IUserModel from '../models/UserModel';
import UserComponent from './user';

interface IFilterListProps {
    users: IUserModel[]
    filterFunction: (user: IUserModel) => boolean
}

const FilterList : React.FunctionComponent<IFilterListProps> = ({users, filterFunction}) => {
    return (
        <React.Fragment>
            {users
                .filter(filterFunction)
                .map((user => (
                    <UserComponent user={user} />
            )))}
        </React.Fragment>
);
}

export default FilterList;
