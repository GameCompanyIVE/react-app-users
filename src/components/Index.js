import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Index(props) {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetchUsers()
  }, [])
  
  async function fetchUsers() {
    const result = await axios.get('https://603d77d348171b0017b2d4ff.mockapi.io/users')
    setUsers(result.data)
  }
  
  async function performDelete(userID) {
    await axios.delete(`https://603d77d348171b0017b2d4ff.mockapi.io/users/${userID}`)
    fetchUsers()
  }
  
  function deleteUser(event, userID) {
    event.preventDefault()
    performDelete(userID)
  }
  
  return (
    <div>
      <div className='navigation'>
        <Link to='/users/new'>New User</Link>
      </div>
      <h2>Users</h2>
      <ul className='user-list'>
        { users.map(user =>
          <li key={user.id}>
            {user.id} - {user.name}
            <span> </span>
            <Link to={`/users/${user.id}`}>Show</Link>
            <span> </span>
            <Link to={`/users/${user.id}/edit`}>Edit</Link>
            <span> </span>
            <a href={`/users/${user.id}`} onClick={(event) => { deleteUser(event, user.id) }}>Delete</a>
          </li>
        )}
      </ul>
    </div>
  )
}
