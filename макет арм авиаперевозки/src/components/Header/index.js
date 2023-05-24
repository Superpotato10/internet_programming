import React from 'react'
import styles from './Header.module.css';
import Navbar from '../Navbar'

export default function Header() {
  return (
        <div className= {styles.header}>
          <Navbar/>
       </div>
  )
}
