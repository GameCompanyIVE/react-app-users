import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Form from './Form'
import axios from 'axios'

export default function New(props) {
  const history = useHistory()
  
  function onFormSubmit(user) {
    axios.post('https://603d77d348171b0017b2d4ff.mockapi.io/users', user)
      .then(response => {
        history.push('/')
      }
    )
  }
  
  return (
    <div>
      <div className='navigation'>
        <Link to='/'>Index</Link>
      </div>
      <h2>New User</h2>
      <Form submitButtonTitle='Create' onFormSubmit={onFormSubmit} />
    </div>
  )
}
