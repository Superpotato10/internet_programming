import React from 'react'
import styles from './Operations.module.css'
import { UserContext, UserDispatchContext } from '../../store/UserContext'
import { useContext } from 'react'


const Operations = () => {
    const dispatch = useContext(UserDispatchContext)
    const user = useContext(UserContext)
    function handleLogout() {
      dispatch({
        type: 'logout'
      })
    }
  return (
    <div className= {styles.main_panel}>
        <div className = {styles.head_panel}>
            {user &&<div className = {styles.photo}>{user.username.split(' ').length !== 1 ?user.username.split(' ')[0][0] + user.username.split(' ')[1][0]: user.username.split(' ')[0][0]}</div>}
            {!user && <div className={styles.photo}>NA</div>}
            <a href='/operations'>Операции</a>
            <a href='/admin'>Администрирование</a>
        </div>
        <div className={styles.middle_panel}>
            <div className={styles.m_left_panel}>
                <div className={styles.employee_panel}>
                    <div className={styles.panel_header}>Сотрудники</div>
                    <a className = {styles.nav_link} href='/employees'>Данные о сотрудниках</a>
                </div>
                <div className= {styles.customer_panel}>
                    <div className={styles.panel_header}>Клиенты</div>
                    <a className = {styles.nav_link} href='/customers'>Клиентская база</a>
                    <a className = {styles.nav_link} href='/loaltyProgram'>Программа лояльности</a>
                </div>

            </div>
            <div className= {styles.m_right_panel}>
                <div className={styles.panel_header}>Перевозки</div>
                <a className = {styles.nav_link} href='/routes'> Маршруты </a>
                <a className = {styles.nav_link} href='/flights'> Рейсы </a>
            </div>
        </div>
        <div className= {styles.bottom_panel_main}>
        {!user
        ?
        <div className= {styles.bottom_panel}>
        <div className={styles.user_info}>Пользователь не активен </div> 
        <a href='/login' className = {styles.login}></a>
        </div>
        : <div className= {styles.bottom_panel}>
          <div className={styles.user_info}>Активен пользователь {user.username} </div> 
          <a href='/login' onClick={() => handleLogout() } className = {styles.logout}></a>
        </div>
      }
        </div>
    </div>
  )
}

export default Operations