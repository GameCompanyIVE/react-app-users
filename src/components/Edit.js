import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import axios from "axios";
import Form from "./Form";

export default function Edit(props) {
    // Grab userID from Router
    let { userID } = useParams()

    const [user, setUser] = useState(0)

    const history = useHistory()

    useEffect(() => {
        async function fetchUser() {
            const result = await axios.get(`https://603d77d348171b0017b2d4ff.mockapi.io/users/${userID}`)
            setUser(result.data)
        }

        fetchUser()
    }, [userID])

    function onFormSubmit(user) {
        axios.put(`https://603d77d348171b0017b2d4ff.mockapi.io/users/${userID}`, user)
            .then(response => {
                    history.push('/')
                }
            )
    }

    return (
    <div>
      <div className='navigation'>
          <div className="container">
              <div className="navigation-wrap">
                  <h2>Edit User</h2>
                  <Link to='/'>Index</Link>
              </div>
          </div>
      </div>
        <div className="container">
            <div className='show-wrap'>
                <div className='show-element'>
                    <p>ID: {user.id}</p>
                    <p>Full Name: {user.name}</p>
                    <p>City: {user.city}</p>
                    <p>Address: {user.address}</p>
                    <p>ZIP code: {user.zipcode}</p>
                </div>
            </div>
        </div>
        <Form submitButtonTitle='Edit' name={user.name} city={user.city} address={user.address} zipcode={user.zipcode} onFormSubmit={onFormSubmit} />
    </div>
  )
}
