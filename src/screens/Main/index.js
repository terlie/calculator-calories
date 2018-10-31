import React, { useState, memo, Fragment } from 'react';
import data from './products';

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

const Main = () => {
  return (
    <Fragment>
      <select multiple size="1">
        {data.products.map(i => (
          <option key={i.id}>{i.name}</option>
        ))}
      </select>
    </Fragment>
  );
};
export default Main;
