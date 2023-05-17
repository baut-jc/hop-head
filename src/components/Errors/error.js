import React, { useState } from 'react';
import { Search } from '../Search/Search';
import './error.css';

export function Error({ showError }) {
  const [zipCode, setZipCode] = useState('');

  const takeZipCode = (inputZip) => {
    setZipCode(inputZip);
    console.log('cheers', zipCode);
  };

  return (
    <div className={`error${showError ? ' error-show' : ''}`}>
      <section>
        <h3>Try a different US zip code.</h3>
        {showError && <Search takeZipCode={takeZipCode} />}
      </section>
    </div>
  );
}
