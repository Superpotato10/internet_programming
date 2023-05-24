import React from "react";
import styles from './Table.module.css'
import TableElem from "../TableElem";
import { type } from "@testing-library/user-event/dist/type";


const Table = (props) => {
    return(
        <div>
            <table className={styles.table_head}>
                <tr>
                    <td>{props.headers[1]}</td>
                    <td>{props.headers[2]}</td>
                    <td>{props.headers[3]}</td>
                    <td>{props.headers[4]}</td>
                    <td>{props.headers[5]}</td>
                    <td>{props.headers[6]}</td>
                    {props.deleteRowActive && 
                    <td>Действия</td>}
                </tr>
            </table>
            <table className={styles.table_content}>{props.elements.map((elem, index) => 
                <TableElem removeElement = {props.removeElement} deleteRowActive = {props.deleteRowActive} setActive = {props.setActive} elem = {elem} type = {props.type} number = {index + 1}/>
                )}
            </table>
        </div>
    )
}

export default Table