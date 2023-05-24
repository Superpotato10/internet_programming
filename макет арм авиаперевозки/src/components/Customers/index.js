import React, { useState } from 'react'
import styles from '../Employees/Employees.module.css'
import Table from '../shared/Table'

const Customers = () => {

    const [customers, setCustomer] = useState(
        [
            {id: '1', name: 'Арсентьев Николай Павлович', gender: 'М', date: '23.04.2000', contact: 'loluo@mail.ru\n+79245558767', loyaltyProgram: 'Да'},
            {id: '2', name: 'Баваров Дмитрий Игоревич', gender: 'М', date: '14.06.1998', contact: 'forgot@gmail.com\n+79141233223', loyaltyProgram: 'Да'},
            {id: '3', name: 'Полыхаева Балдма Борисовна', gender: 'Ж', date: '24.12.2001', contact: 'fireball@mail.ru\n+79132345678', loyaltyProgram: 'Да'}
        ]
    )

    const [active, setActive] = useState(false)
    const [addRowActive, setAddRowActive] = useState(false)
    const [deleteRowActive, setDeleteRowActive] = useState(false)

    const [elem, setElem] = useState({id: '', name: '', gender: '', date: '', contact: '', loyaltyProgram: ''})

    const headers = {
        1: 'Код клиента',
        2: 'ФИО',
        3: 'Пол',
        4: 'Дата рождения',
        5: 'Контактные данные',
        6: 'Участие в программе лояльности'
    }
    const createCustomer = (elem) => {
        setCustomer([...customers, elem])
    }

    const addNewElem = (e) => {
        e.preventDefault()
        const newElem = {
            ...elem, id: Date.now()
        }
        createCustomer(newElem)
        setElem({id: '', name: '', gender: '', date: '', contact: '', loyaltyProgram: ''})
    }

    const removeCustomer = (elem) => {
        setCustomer(customers.filter(p => p.id !== elem.id))
    }

    const editCustomer = (elem) => {
        let customer_copy = customers
        customer_copy[elem.id - 1] = elem
    }

    const type = 'customers'

  return (
    <div className={styles.main_panel}>
    <div className= {styles.panel_header}>{!active ? 'Клиентская база' : 'Редактирование клиентской базы'}</div>
    
    <Table deleteRowActive = {deleteRowActive} active = {active} setActive = {setActive} elements = {customers} createElement = {createCustomer} removeElement = {removeCustomer} editElement = {editCustomer} headers = {headers} type = {type}/>
    
    {!active && <button onClick={() => setActive(true)} className={styles.save_btn_cust}>Редактировать клиентскую базу</button>}
    {active && <button onClick={() => (setActive(false), setAddRowActive(false), setDeleteRowActive(false)) }className={styles.save_btn_confirm} >Сохранить клиентскую базу</button>}
    <div className={styles.bottom_block}>
        {active &&
        <div className={styles.button_block}>
            <button className={styles.action_btn} onClick={() => setDeleteRowActive(true)}>Удалить строку</button>
            <button className={styles.action_btn} onClick={() => setAddRowActive(true)}>Добавить строку</button>
        </div>}
        {addRowActive &&
        <div className={styles.post_form}>
            <input onChange = {e => setElem({...elem, name: e.target.value})} placeholder="ФИО" value={elem.name}></input>
            <input onChange = {e => setElem({...elem, gender: e.target.value})} placeholder="Пол" value={elem.gender}></input>
            <input onChange = {e => setElem({...elem, date: e.target.value})} placeholder="Дата рождения" value={elem.date}></input>
            <input onChange = {e => setElem({...elem, contact: e.target.value})} placeholder="Контактные данные" value={elem.contact}></input>
            <input onChange = {e => setElem({...elem, loyaltyProgram: e.target.value})} placeholder="Участие в программе лояльности" value={elem.loyaltyProgram}></input>
            <button className={styles.confirm_btn} onClick={addNewElem}>Добавить</button>
        </div>}
    </div>
</div>
  )
}

export default Customers