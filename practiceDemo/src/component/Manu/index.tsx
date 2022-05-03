import { ReactElement } from "react";
import "./index.css"
import logo from './img/logo.png'
import Switch from './Switch'
import Profile from './Profile'

interface ManuProps {
    cg:(id:string)=>void
    children?:ReactElement
}

const Manu = ({children,cg}:ManuProps):ReactElement => {
    return ( 
        <header className="manu_container">
            <img src={logo} alt="logo" />
            {children}
            <Switch cg={cg}/>
            <Profile />
        </header>
    );
}

export default Manu;