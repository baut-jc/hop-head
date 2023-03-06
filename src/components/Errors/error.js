import React, { useState } from 'react'
import { Search } from '../Search/Search'
import './error.css'

export function Error() {
  const [zipCode, setZipCode] = useState('')
  
  const takeZipCode = inputZip => {
    setZipCode(inputZip)
    console.log('cheers', zipCode)
  }

  return (
    <div className='error'>
      <section>
        <h3>at a different zipCode.</h3>
        <Search 
          takeZipCode={takeZipCode}/>
      </section>
    </div>
  )
}
