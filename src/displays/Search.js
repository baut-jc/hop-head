import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-router-dom'

export const Search = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='Enter ZIP'/>
        <Link to='/home'>
          <button>Search</button>
        </Link>
      </form>
    </div>
  )
}
