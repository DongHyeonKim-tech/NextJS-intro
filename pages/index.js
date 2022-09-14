import { useState } from 'react';

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>
        Hello {counter}
        <button onClick={() => setCounter(prev => prev+1)}>+</button>
      </h1>
    </div>
  )
};

export default Home;

