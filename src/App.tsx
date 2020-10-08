import React, { useState } from 'react';
import './App.css';
import data from './data/data';

function App() {
  const [users] = useState(data());
  return (
    <div className="App">
      <div className="container">
        <div className="all-users-container">
          {users.map((user => (
            <div>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
              <div>Created At: {user.createdAt.toDateString()}</div>
              <div>Updated At: {user.updatedAt.toDateString()}</div>
              <br/>
            </div>
          )))}
        </div>
        <div className="recent-users-container">
        </div>
        <div className="past-users-container">
        </div>
      </div>
    </div>
  );
}

export default App;
