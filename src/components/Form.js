import React, { useRef } from 'react'

export default function Form(props) {
  const nameField = useRef()
  const cityField = useRef()
  const addressField = useRef()
  const zipcodeField = useRef()
  
  function onSubmit(event) {
    event.preventDefault()
    
    const user = {
      name: nameField.current.value,
      city: cityField.current.value,
      address: addressField.current.value,
      zipcode: zipcodeField.current.value
    }
    props.onFormSubmit(user)
  }
  
  return (
    <form onSubmit={ onSubmit }>
      <div className='form-group'>
        <label htmlFor='name'>Full Name</label>
        <input type='text' id='name' ref={nameField} />
      </div>
      <div className='form-group'>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityField} />
      </div>
      <div className='form-group'>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' ref={addressField} />
      </div>
      <div className='form-group'>
        <label htmlFor='zipcode'>ZIP code</label>
        <input type='text' id='zipcode' ref={zipcodeField} />
      </div>
      <button type='submit'>{props.submitButtonTitle}</button>
    </form>
  )
}
