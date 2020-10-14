import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data/data';
import moment from 'moment';
import UserComponent from './components/user';
import IUserModel from './models/UserModel';
import FilterList from './components/filter-list';
import TextInput from './components/text-input';
import Button from './components/button';

function App() {
  const [users] = useState(data());
  const [textInput, setTextInput] = useState("");
  const [texts, setTexts] = useState<string[]>([]);
  // const isRecentCallback = (user: IUserModel) => moment(user.updatedAt) >= moment(moment().subtract(2, 'days').format());
  // const isNotRecentCallback = (user : IUserModel) => moment(user.updatedAt) <= moment(moment().subtract(2, 'days').format());


  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.currentTarget.value);
  }

  const handleClick = () => {
    setTexts([textInput, ...texts]);
  }

  return (
    <div className="App">
      <TextInput handleChange={handleTextInput}/>
      <Button handleClick={handleClick} />
      <div>
        {texts.map(text => <div>{text}</div>)}
      </div>
      
      {//<div className="container">
       // <div className="all-users-container">
       //   {users.map((user => (
       //     <UserComponent user={user} />
       //   )))}
       // </div>
       // <div className="recent-users-container">
       //   <FilterList users={users} filterFunction={isRecentCallback} />
       // </div>
       // <div className="past-users-container">
       //   <FilterList users={users} filterFunction={isNotRecentCallback} />
       // </div>
       // <div className="past-users-container">
       //   <FilterList users={users} filterFunction={(user) => user.name === "Stephen Beer"} />
       // </div>
      
      // </div>
    }
    </div>
  );
}

const useDateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  return date;
}

export default App;
