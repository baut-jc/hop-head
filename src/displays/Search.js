import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-router-dom'

export const Search = () => {
  return (
    <div className='zip-form'>
      <form>
        <input type='text' placeholder='Enter ZIP'/>
        <Link to='/'>
          <button>Search</button>
        </Link>
      </form>
    </div>
  )
}
