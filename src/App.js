import './App.css';
import React from 'react';
import {useState} from 'react';
import Menushka from './components/Menushka/Menushka';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import Editorial from './pages/Editorial'
import ClientShooting from "./pages/ClientShooting";
import ModelTests from "./pages/ModelTests";


function App() {
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        {value: 'Editorial', href: '/editorial'},
        {value: 'Client Shooting', href: '/clientShooting'},
        {value: 'Model tests', href: '/modelTests'}
        ]

    return (

        <div className='app'>
            {/*<div className='App-header'>*/}
            {/*    <NavLink to='/editorial'>
                <div
                    className='burger-btn'
                    onClick={() => setMenuActive(!menuActive)}>
                </div>
            </NavLink>*/}
            hfghfghfgh

            <main></main>


            {/*компонента Менюшка*/}
            <Menushka active={menuActive} setActive={setMenuActive} header={''} items={items}/>

        </div>
    )
}

export default App;
