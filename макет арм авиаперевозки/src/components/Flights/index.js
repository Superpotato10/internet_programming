import React, { useState } from 'react'
import styles from '../Employees/Employees.module.css'
import Table from '../shared/Table'

const Flights = () => {
    const [flights, setFlight] = useState(
        [
            {id: 1, departure: 'Москва', destination: 'Сочи', date: '20.05.2023', customer: 'Арсентьев Николай Павлович', plane: 'А-320'},
        ]
    )
    const [active, setActive] = useState(false)
    const [addRowActive, setAddRowActive] = useState(false)
    const [deleteRowActive, setDeleteRowActive] = useState(false)

    const [elem, setElem] = useState({id: '', departure: '', destination: '', date: '', customer: '', plane: ''})

    const headers = {
        1: 'Код рейса',
        2: 'Пункт отправления',
        3: 'Пункт назначения',
        4: 'Дата',
        5: 'Клиент',
        6: 'Самолёт'
    }

    const createFlight = (elem) => {
        setFlight([...flights, elem])
    }

    const addNewElem = (e) => {
        e.preventDefault()
        const newElem = {
            ...elem, id: Date.now()
        }
        createFlight(newElem)
        setElem({id: '', departure: '', destination: '', date: '', customer: '', plane: ''})
    }

    const removeFlight = (elem) => {
        setFlight(flights.filter(p => p.id !== elem.id))
    }

    const editFlight = (elem) => {
        let flights_copy = flights
        flights_copy[elem.id - 1] = elem
    }

    const type = 'flights'

  return (
    <div className= {styles.main_panel}>
        <div className= {styles.panel_header}>{!active ? 'Рейсы' : 'Редактирование рейсов'}</div>
        <Table deleteRowActive = {deleteRowActive} active = {active} setActive = {setActive} elements = {flights} createElement = {createFlight} removeElement = {removeFlight} editElement = {editFlight} headers = {headers} type = {type}/>
        {!active && <button onClick={() => setActive(true)} className={styles.save_btn_cust}>Редактировать рейсы</button>}
            {active && <button onClick={() => (setActive(false), setAddRowActive(false), setDeleteRowActive(false)) }className={styles.save_btn_confirm} >Сохранить данные о рейсах</button>}
            <div className={styles.bottom_block}>
                {active &&
                <div className={styles.button_block}>
                    <button className={styles.action_btn} onClick={() => setDeleteRowActive(true)}>Удалить строку</button>
                    <button className={styles.action_btn} onClick={() => setAddRowActive(true)}>Добавить строку</button>
                </div>}
                {addRowActive &&
                <div className={styles.post_form}>
                    <input onChange = {e => setElem({...elem, departure: e.target.value})} placeholder="Пункт отправления" value={elem.departure}></input>
                    <input onChange = {e => setElem({...elem, destination: e.target.value})} placeholder="Пункт назначения" value={elem.destination}></input>
                    <input onChange = {e => setElem({...elem, date: e.target.value})} placeholder="Дата отправления" value={elem.date}></input>
                    <input onChange = {e => setElem({...elem, customer: e.target.value})} placeholder="Клиент" value={elem.customer}></input>
                    <input onChange = {e => setElem({...elem, plane: e.target.value})} placeholder="Самолёт" value={elem.plane}></input>
                    <button className={styles.confirm_btn} onClick={addNewElem}>Добавить</button>
                </div>}
            </div>
    </div>
  )
}

export default Flights