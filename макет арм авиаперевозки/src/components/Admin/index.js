import React, { useState } from 'react'
import styles from './Admin.module.css'
import { UserContext, UserDispatchContext } from '../../store/UserContext'
import { useContext } from 'react'

const Admin = () => {
  const user = useContext(UserContext)
  const [active, setActive] = useState(false)
  const [viewActive, setViewActive] = useState(false)
  const [elem, setElem] = useState([
    {phone: '+79247689503', mail: 'admin@mail.ru', faks: '85-95-83' }
  ])
  return (
    <div className= {styles.main_panel}>
      {user &&
      <div>
      <div className={styles.panel_header}>Администрирование</div>
      <div className={styles.info_panel}>
          <div className={styles.photo}>{user.username.split(' ').length !== 1 ?user.username.split(' ')[0][0] + user.username.split(' ')[1][0]: user.username.split(' ')[0][0]}</div>
          <div className= {styles.info_name}>
              <div className={styles.name}>{user.username}</div>
              <div className= {styles.role}>Администратор</div>
          </div>
          

      </div>
      {!active&&<button onClick={() => (setActive(true),setViewActive(false))}>Изменить контактные данные</button>}
      {active&&<button onClick={() => setActive(false)}>Сохранить контактные данные</button>}
      {!viewActive&&<button onClick={() => (setViewActive(true), setActive(false))}>Посмотреть контактные данные</button>}
      {viewActive&&<button onClick={() => setViewActive(false)}>Закрыть контактные данные</button>}
      <div className= {styles.info_panels}>
          {active &&
          
           <div className= {styles.input_panel}>
              <input placeholder='Телефон' onChange = {e => setElem({...elem, phone: e.target.value})}></input>
              <input placeholder='Почта' onChange = {e => setElem({...elem, mail: e.target.value})}></input>
              <input placeholder='Факс' onChange = {e => setElem({...elem, faks: e.target.value})}></input>
          </div>
            }
        {viewActive &&
         <div className= {styles.input_panel}>
          <div>Телефон: {elem.phone}</div>
          <div>Почта: {elem.mail}</div>
          <div>Факс: {elem.faks}</div>
         </div>
        }
        </div>
      </div> }
      {!user &&
      <div>
        <div className={styles.panel_header}>Администрирование</div>
        <div className={styles.alert}>Для начала администрирования необходимо войти в личный кабинет</div> 
      </div>}
        
        
    </div>
  )
}

export default Admin