import React, { useState, memo } from 'react';

const something = (func, ...data) => () => {
  func(...data);
};

const Example = memo(() => {
  // Declare a new state variable, which we'll call "count"
  const [lol, setCount] = useState({ name: 'lol', lastName: 'cdecde' });

  console.log('render');
  return (
    <div>
      <p>You clicked {lol.name} times</p>
      <button onClick={something(setCount, { ...lol, name: 'OLOL' })}>
        Click me
      </button>
    </div>
  );
});

const Home = () => {
  const [lol2, setCount2, ...other] = useState({
    name: 'lol2',
    lastName: 'cdecde2'
  });
  console.log('other', other);
  return (
    <div className="App">
      {lol2.name}
      <button onClick={something(setCount2, { ...lol2, name: 'OLOL' })}>
        Click me
      </button>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Example />
    </div>
  );
};
export default Home;
