import { ReactElement } from "react";
import "./index.css"
import logo from './img/logo.png'
import Switch from './Switch'

interface ManuProps {
    children?:ReactElement
}

const Manu = ({children}:ManuProps):ReactElement => {
    return ( 
        <header className="manu_container">
            <img src={logo} alt="logo" />
            {children}
            <Switch />
        </header>
    );
}

export default Manu;