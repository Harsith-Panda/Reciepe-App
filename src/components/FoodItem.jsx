import React from 'react';
import styles from './fooiItem.module.css';

function FoodItem({food, setId}) {
  return (
    <div className={styles.itemcontainer}>
        <img src={food.image} alt={food.title} className={styles.itemImage}/>
        <div className={styles.itemContent}>
          <p className={styles.itemName}>{food.title}</p>
          <div className={styles.buttonContainer}>
            <button onClick = {() => {setId(food.id)}}className={styles.itemBtn}>View Reciepe</button>
          </div>
        </div>
    </div>
  )
}

export default FoodItem