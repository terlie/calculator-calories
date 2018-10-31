import React, { Fragment } from 'react';
import data from './products';
import styles from './styles.module.css';

const Main = () => {
  return (
    <Fragment>
      <ul className={styles.select}>
        {data.products.map(i => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};
export default Main;
