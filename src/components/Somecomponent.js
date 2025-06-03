import React, { useState } from 'react';

function SomeComponent() {
  const [state, setState] = useState(null);

  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
}

export default SomeComponent;