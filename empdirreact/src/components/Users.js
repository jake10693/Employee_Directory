import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        setUsers(response.data)
    })
    
  });
// 
  return (
    <div>
    {users.map((user) => {return <p>{user.name}</p>})}
    </div>
  );
}

export default Users;
