import React, { ReactElement } from "react";
import { useState } from "react";
import Manu from "..";
import './index.css'

interface SwitchProps {
    cg:(id:string)=>void
    switchItem?:Array<string>
}


const Switch= ({switchItem,cg}:SwitchProps):ReactElement => {

    const [selected, setselected] = useState<string>("0")

    const print = (e:React.MouseEvent):void=>{
        const isSelected = e.currentTarget.id === selected;
        // console.log(e.currentTarget.id,e.currentTarget);
        if(!isSelected){
            setselected(e.currentTarget.id)
        }
        cg(e.currentTarget.id)
    }

    return ( 
        <ul className="manu_switch">
            {switchItem&&switchItem.map<ReactElement>((item,index)=>{
                return (
                    <li key={"manu"+index}>
                    <a href="#" className={selected === (index+"")?'manu_switch_link selected':'manu_switch_link'} onClick={print} id={index+""}>
                        <span className="manu_switch_item">
                            {item}
                        </span>
                    </a>
                </li>
                )
            })}
            {/* <li>
                <a href="#" className={selected === '1'?'manu_switch_link selected':'manu_switch_link'} onClick={print} id="1">
                    <span className="manu_switch_item">
                        控制面板
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className={selected === '2'?'manu_switch_link selected':'manu_switch_link'} onClick={print} id='2'>
                    <span className="manu_switch_item">
                        预算
                    </span>
                </a>
            </li> */}
        </ul>
    );
}

export default Switch;