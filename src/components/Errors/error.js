import React, { useState } from 'react'
import { Search } from '../../displays/Search'
import './error.css'

export function Error() {
  const [zipCode, setZipCode] = useState('')
  
  const takeZipCode = inputZip => {
    setZipCode(inputZip)
    console.log('cheers', zipCode)
  }

  return (
    <div className='no-data'>
      <section>
        <h3>at a different zipCode.</h3>
        <Search 
          takeZipCode={takeZipCode}/>
      </section>
    </div>
  )
}
