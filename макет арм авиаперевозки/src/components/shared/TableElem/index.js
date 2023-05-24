import React from "react";
import styles from "./TableElem.module.css"


const TableElem = (props) => {

    if (props.type == 'employees') { 
    return(
        <tr>
            <td>{props.number}</td>
            <td>{props.elem.surname}</td>
            <td>{props.elem.name}</td>
            <td>{props.elem.patronymic}</td>
            <td>{props.elem.contact}</td>
            <td>{props.elem.role}</td>
            {props.deleteRowActive && 
            <td>
                <button onClick={() => props.removeElement(props.elem)} className={styles.delete_btn}></button>
            </td>}
            
        </tr>
    )
    } else if (props.type == 'customers') {
        return(
            <tr>
                <td>{props.number}</td>
                <td>{props.elem.name}</td>
                <td>{props.elem.gender}</td>
                <td>{props.elem.date}</td>
                <td>{props.elem.contact}</td>
                <td>{props.elem.loyaltyProgram}</td>
                {props.deleteRowActive && 
                <td>
                    <button onClick={() => props.removeElement(props.elem)} className={styles.delete_btn}></button>
                </td>}
            
        </tr>
        )
    } else if (props.type == 'flights') {
        return(
            <tr>
            <td>{props.number}</td>
            <td>{props.elem.departure}</td>
            <td>{props.elem.destination}</td>
            <td>{props.elem.date}</td>
            <td>{props.elem.customer}</td>
            <td>{props.elem.plane}</td>
            {props.deleteRowActive && 
            <td>
                <button onClick={() => props.removeElement(props.elem)} className={styles.delete_btn}></button>
            </td>}
        
    </tr>
        )
    }
}

export default TableElem