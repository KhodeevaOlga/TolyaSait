import React from 'react'
import {NavLink} from "react-router-dom";

const Header = () => {
    /*const [menuActive, setMenuActive] = useState(true)
    const items = [
        {value: 'Editorial', href: '/editorial'},
        {value: 'Client Shooting', href: '/clientShooting'},
        {value: 'Model tests', href: '/modelTests'}
    ]*/

    return (
       /* <Menushka
            active={menuActive}
            setActive={setMenuActive}
            header={''}
            items={items}
        />*/
        <>
            <div>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div>
                <NavLink to='/client'>clientShooting</NavLink>
            </div>
        </>
    )

}

export default Header