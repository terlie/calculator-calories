import React, { Fragment, useState } from 'react';
import data from './products';
import styles from './styles.module.css';
import Input from '../../components/Input';
import useHandleTotal from '../../hooks/useHandleTotal';

const Main = () => {
  const [isShow, showPopup] = useState(false);
  const [activeItems, handleItems] = useState({});
  const total = useHandleTotal(activeItems);

  return (
    <Fragment>
      <button className={styles.btn} onClick={() => showPopup(!isShow)}>
        Show list of products
      </button>
      <h1>Total calories: {total}</h1>
      <ul
        className={
          isShow ? `${styles.list} ${styles.listShow}` : `${styles.list}`
        }
      >
        {data.products.map(i => (
          <li key={i.id} className={styles.listRow}>
            <span
              className={
                activeItems[i.id]
                  ? `${styles.activeItem} ${styles.item}`
                  : `${styles.item}`
              }
            >
              {i.name}
            </span>
            <Input handleItems={handleItems} activeItems={activeItems} i={i} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
export default Main;
