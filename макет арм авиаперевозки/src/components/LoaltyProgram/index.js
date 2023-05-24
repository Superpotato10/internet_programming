import React from 'react'
import styles from './LoaltyProgram.module.css'

const LoaltyProgram = () => {
  return (
    <div className= {styles.main_panel}>
        <div className={styles.panel_header}>
            Программа лояльности 
        </div>
        <div className= {styles.list}>
            <a className={styles.list_el} id = {styles.week} href='#'>Предложение недели</a>
            <a className={styles.list_el} id = {styles.sales} href='#'>Праздничные скидки</a>
            <a className={styles.list_el} id = {styles.miles} href='#'>Мили</a>
            <a className={styles.list_el} id = {styles.employees} href='#'>Предложения для сотрудников</a>
            <a className={styles.list_el} id = {styles.toures} href='#'>Горячие туры</a>
        </div>
    </div>
  )
}

export default LoaltyProgram