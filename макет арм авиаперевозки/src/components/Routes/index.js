import React from 'react';
import styles from './Routes.module.css';

const Routes = () => {
  return (
    <div className= {styles.main_panel}>
        <div className= {styles.panel_header}>Перевозки</div>
        <div className= {styles.info_header}>Маршрутная карта</div>
        <img className= {styles.routes_img} src={require('../../img/routes.png')}></img>
        <div className= {styles.routes_list}>
            <div className= {styles.routes_list_head}>Наиболее популярные рейсы:</div>
            <div className= {styles.routes_list_element}>Москва - Санкт-Петербург</div>
            <div className= {styles.routes_list_element}>Москва - Сочи</div>
            <div className= {styles.routes_list_element}>Чита - Красноярск</div>
            <div className= {styles.routes_list_element}>Чита - Новосибирск</div>
            <div className= {styles.routes_list_element}>Москва - Владивосток</div>
            <div className= {styles.routes_list_element}>Владивосток - Иркутск</div>
        </div>
    </div>
  )
}

export default Routes