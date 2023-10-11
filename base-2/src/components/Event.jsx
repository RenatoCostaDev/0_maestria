import React, { useState } from 'react';

const Event = () => {
  const [click, setClick ] = useState(0)
  // const handleClick = (e) => console.log('Cick!!');
  const handleClick = (e) => setClick(click + 1);

  return (
    <>
      {/* <FirstComponent /> */}
      <div className="mb-3 row">
        <button onClick={() => handleClick()} className="btn btn-primary mb-3">Clique Aqui!</button>
        <button onClick={handleClick} className="btn btn-secondary mb-3">Clique Aqui!</button>
        <h1>
        <label className="form-label">Click :</label>
          <span> {click}</span>
        </h1>
      </div>
    </>
  )
}

export default Event;
