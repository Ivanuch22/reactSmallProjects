import { useState } from 'react';


function FirstProject() {
  const [couter, setCouter] = useState(0)
  return (
    <div className="App">
      <h1> Counter {couter}</h1>
      <button onClick={() => setCouter(prevCouter => prevCouter + 1)}>increment</button>
      <button onClick={() => setCouter(prevCouter => prevCouter - 1)}>decrements </button>
    </div>
  );
}

export default FirstProject