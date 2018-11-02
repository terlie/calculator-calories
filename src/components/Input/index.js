import { useState } from 'react';
import styles from '../../screens/Main/styles.module.css';
import React from 'react';
import useHelperForHandleItems from '../../hooks/useHelperForHandleItems';

const Input = ({ activeItems, i, handleItems }) => {
  const [value, handleChange] = useState(100);
  return (
    <div className={styles.weight}>
      <label className={styles.weightLabel} htmlFor="weight">
        Weight
      </label>
      <input
        disabled={activeItems[i.id]}
        className={styles.weightNumber}
        type="number"
        id="weight"
        onChange={e => handleChange(+e.target.value)}
        value={value}
      />
      <input
        type="checkbox"
        onChange={() =>
          useHelperForHandleItems(i, activeItems, handleItems, value)
        }
      />
    </div>
  );
};

export default Input;
