import { ReactElement } from "react";
import './index.css'

interface SwitchProps {
    switchItem?:Array<string>
}

const Switch= ({switchItem}:SwitchProps):ReactElement => {
    return ( 
        <ul className="manu_switch">
            {/* {switchItem.map(item=>{
                <li>
                    {item}
                </li>
            })} */}
            <li>
                <a href="#" className="manu_switch_link selected">
                    <span className="manu_switch_item">
                        控制面板
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="manu_switch_item">
                        预算
                    </span>
                </a>
            </li>
        </ul>
    );
}

export default Switch;