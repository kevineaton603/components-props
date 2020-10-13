import React, { useState } from 'react';
import './App.css';
import data from './data/data';
import moment from 'moment';
import UserComponent from './components/user';
import IUserModel from './models/UserModel';
import FilterList from './components/filter-list';

function App() {
  const [users] = useState(data());
  const isRecentCallback = (user: IUserModel) => moment(user.updatedAt) >= moment(moment().subtract(2, 'days').format());
  const isNotRecentCallback = (user : IUserModel) => moment(user.updatedAt) <= moment(moment().subtract(2, 'days').format());
  return (
    <div className="App">
      <div className="container">
        <div className="all-users-container">
          {users.map((user => (
            <UserComponent user={user} />
          )))}
        </div>
        <div className="recent-users-container">
          <FilterList users={users} filterFunction={isRecentCallback} />
        </div>
        <div className="past-users-container">
          <FilterList users={users} filterFunction={isNotRecentCallback} />
        </div>
        <div className="past-users-container">
          <FilterList users={users} filterFunction={(user) => user.name === "Stephen Beer"} />
        </div>

      </div>
    </div>
  );
}

export default App;
