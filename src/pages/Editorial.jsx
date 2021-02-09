import React from 'react'
import Menushka from "../components/Menushka/Menushka";
import {useState} from "react/cjs/react.production.min";

const Editorial = () => {
    const [menuActive, setMenuActive] = useState(false)
  /*  const items = [{value: 'Editorial', href: '/editorial'}, {
        value: 'Client Shooting',
        href: '/clientShooting'
    }, {value: 'Model tests', href: '/modelTests'}]*/
    const items = []

    return (
        <div>
            <Menushka active={menuActive} setActive={setMenuActive} header={''} items={items}/>
            Page Editorial
        </div>
    )
}

export default Editorial