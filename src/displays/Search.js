import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-router-dom'

export function Search({takeZipCode}) {
  
  const [postalCode, setPostalCode] = useState('')

  const submitForm = event => {
    event.preventDefault()
    takeZipCode(`${postalCode}`)
    clearForm()
  }
  
  const clearForm = () => {
    setPostalCode('')
  }

  return (
    <div className='zip-form'>
      <form onSubmit={submitForm}>
        <input 
          name='zipCode'
          type='number'
          min='00501'
          max='99950'
          value={postalCode}
          placeholder='Enter ZIP'
          onChange={(e) => setPostalCode(e.target.value)}
          required 
          />
          <button>Cheers</button> {/* cheers sound*/}
        {/* <Link to='/'> */}
        {/* </Link> */}
      </form>
    </div>
  )
}
