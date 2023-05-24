import React, { useContext, useState } from 'react'
import styles from './Login.module.css'
import { UserContext, UserDispatchContext } from '../../store/UserContext'

export default function Login() {
  const dispatch = useContext(UserDispatchContext)
  const user = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'login',
      username
    })
    
    
  }
  return (
    <form className={styles.form}>
      <h3>Вход</h3>
      {!user && <>
        <div className={styles.input}>
          <input type="text" placeholder="Имя пользователя"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <input type="password" placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.submit}>
          <button type="submit" onClick={handleSubmit}>Войти</button>
        </div>
      </>
      }
    </form>
  )
}
