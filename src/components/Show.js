import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Show(props) {
  // Grab userID from Router
  let { userID } = useParams()
  
  const [user, setUser] = useState(0)
  
  useEffect(() => {
    async function fetchUser() {
      const result = await axios.get(`https://603d77d348171b0017b2d4ff.mockapi.io/users/${userID}`)
      setUser(result.data)
    }
    
    fetchUser()
  }, [userID])
  
  return (
    <div>
      <div className='navigation'>
        <Link to='/'>Index</Link>
      </div>
      <h2>User Details</h2>
      <div className='show-wrap'>
        <div className='show-element'>
          <p>ID: {user.id}</p>
          <p>Full Name: {user.name}</p>
          <p>City: {user.city}</p>
          <p>ZIP code: {user.zipcode}</p>
          <p>Address: {user.address}</p>
        </div>
      </div>
    </div>
  )
}
