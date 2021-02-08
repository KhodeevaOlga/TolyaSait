import React from 'react';
import './Menushka.css';

const Menushka = ({header, items, active, setActive}) => {


        return (

            <div className={active ? 'menushka active' : 'menushka'} onClick={() => setActive(false)}>
                <div className='blur'/>

                {/*Благодаря пропагинейшену, меню закроется при нажатии вне поля контента менюхи*/}
                <div className='menu_content' onClick={e => e.stopPropagation()}>
                <div className='menu_header'>{header}</div>
              <ul>
                  {items.map(item =>
                  <li>
                      <a href={item.href}>{item.value}</a>
                  </li>
                  )}
              </ul>
                </div>
            </div>
        );
}

export default Menushka;