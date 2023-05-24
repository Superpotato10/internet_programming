import React, { useState } from "react";
import Table from '../shared/Table'
import styles from './Employees.module.css'

const Employees = () => {
    const [employees, setEmployees] = useState(
        [
            {id: 1, surname: 'Павлов', name: 'Антон', patronymic: 'Андреевич', contact: 'kaka@mail.ru\n+79167876543', role: 'Старший кассир'},
            {id: 2, surname: 'Лубянкина', name: 'Анна', patronymic: 'Юрьевна', contact: 'lubyank@gmail.com\n+79123456776', role: 'Менеджер по продажам'},
            {id: 3, surname: 'Паучков', name: 'Данил', patronymic: 'Максимович', contact: 'Shnuk65@gmail.com\n+79145678987', role: 'Уборщик'},
            {id: 4, surname: 'Любавкина', name: 'Арина', patronymic: 'Леонидовна', contact: 'happy_tiger@mail.ru\n+79243435654', role: 'Уборщик'},
            {id: 5, surname: 'Ешилина', name: 'Арина', patronymic: 'Родионовна', contact: 'pushk@mail.ru\n+79243452312', role: 'Помощник администратора'},
        ]
    )

    const [active, setActive] = useState(false)
    const [addRowActive, setAddRowActive] = useState(false)
    const [deleteRowActive, setDeleteRowActive] = useState(false)

    const [elem, setElem] = useState({id: '', surname: '', name: '', patronymic: '', contact: '', role: ''})
    
    const headers = {
        1: 'Код сотрудника',
        2: 'Фамилия',
        3: 'Имя',
        4: 'Отчество',
        5: 'Контактные данные',
        6: 'Должность'
    }

    const createEmployee = (elem) => {
        setEmployees([...employees, elem])
    }

    const addNewElem = (e) => {
        e.preventDefault()
        const newElem = {
            ...elem, id: Date.now()
        }
        createEmployee(newElem)
        setElem({id: '', surname: '', name: '', patronymic: '', contact: '', role: ''})
    }

    const removeEmployee = (elem) => {
        setEmployees(employees.filter(p => p.id !== elem.id))
    }

    const editEmployee = (elem) => {
        let employees_copy = employees
        employees_copy[elem.id - 1] = elem
    }

    const type = 'employees'



    return(
        <div className={styles.main_panel}>
            <div className= {styles.panel_header}>{!active ? 'Данные о сотрудниках' : 'Редактирование данных о сотрудниках'}</div>
            
            <Table deleteRowActive = {deleteRowActive} active = {active} setActive = {setActive} elements = {employees} createElement = {createEmployee} removeElement = {removeEmployee} editElement = {editEmployee} headers = {headers} type = {type}/>
            
            {!active && <button onClick={() => setActive(true)} className={styles.save_btn}>Редактировать данные о сотрудниках</button>}
            {active && <button onClick={() => (setActive(false), setAddRowActive(false), setDeleteRowActive(false)) }className={styles.save_btn_confirm} >Сохранить данные о сотрудниках</button>}
            <div className={styles.bottom_block}>
                {active &&
                <div className={styles.button_block}>
                    <button className={styles.action_btn} onClick={() => setDeleteRowActive(true)}>Удалить строку</button>
                    <button className={styles.action_btn} onClick={() => setAddRowActive(true)}>Добавить строку</button>
                </div>}
                {addRowActive &&
                <div className={styles.post_form}>
                    <input onChange = {e => setElem({...elem, surname: e.target.value})} placeholder="Фамилия" value={elem.surname}></input>
                    <input onChange = {e => setElem({...elem, name: e.target.value})} placeholder="Имя" value={elem.name}></input>
                    <input onChange = {e => setElem({...elem, patronymic: e.target.value})} placeholder="Отчество" value={elem.patronymic}></input>
                    <input onChange = {e => setElem({...elem, contact: e.target.value})} placeholder="Контактные данные" value={elem.contact}></input>
                    <input onChange = {e => setElem({...elem, role: e.target.value})} placeholder="Должность" value={elem.role}></input>
                    <button className={styles.confirm_btn} onClick={addNewElem}>Добавить</button>
                </div>}
            </div>
        </div>
    )
}

export default Employees