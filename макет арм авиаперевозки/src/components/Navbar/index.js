import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import { UserContext, UserDispatchContext } from '../../store/UserContext'

export default function Navbar() {
  const dispatch = useContext(UserDispatchContext)
  const user = useContext(UserContext)
  function handleLogout() {
    dispatch({
      type: 'logout'
    })
  }
  return (
    <div className={styles.nav_panel}>
      {user && <div className={styles.photo}>{user.username.split(' ').length !== 1 ?user.username.split(' ')[0][0] + user.username.split(' ')[1][0]: user.username.split(' ')[0][0]}</div>}
      {!user && <div className={styles.photo}>NA</div>}
      <div className={styles.nav_panel_el}>
        <div className={styles.nav_el_head}>Меню</div>
        <a className = {styles.nav_link} href='/'> Операции </a>
        <a className = {styles.nav_link} href='/admin'> Администрирование </a>
      </div>
      <div className={styles.nav_panel_el}>
        <div className={styles.nav_el_head}>Сотрудники</div>
        <a className = {styles.nav_link} href='/employees'> Данные о сотрудниках </a>
      </div>
      <div className={styles.nav_panel_el}>
        <div className={styles.nav_el_head}>Клиенты</div>
        <a className = {styles.nav_link} href='/customers'> Клиентская база </a>
        <a className = {styles.nav_link} href='/loaltyProgram'> Программа лояльности </a>
      </div>
      <div className={styles.nav_panel_el}>
        <div className={styles.nav_el_head}>Перевозки</div>
        <a className = {styles.nav_link} href='/routes'> Маршруты </a>
        <a className = {styles.nav_link} href='/flights'> Рейсы </a>
      </div>
      {!user
        ?
        <div className= {styles.bottom_panel}>
        <div className={styles.user_info_non_active}>Пользователь не активен </div> 
        <a className = {styles.nav_link} href='/login' id = {styles.login}> </a>
        </div>
        : <>
          <div className={styles.user_info}>Активен пользователь {user.username} </div> 
          <a className = {styles.nav_link} href='/login' onClick={() => handleLogout() }id = {styles.logout}> </a>
        </>
      }
    </div>
  )
}
