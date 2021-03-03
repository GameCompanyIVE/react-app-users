import React from 'react'
import { Link } from 'react-router-dom'

export default function Edit(props) {
  return (
    <div>
      <h2>Edit User</h2>
      <div className='navigation'>
        <Link to='/'>Index</Link>
      </div>
    </div>
  )
}
