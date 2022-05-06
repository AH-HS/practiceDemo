import React, { ReactElement , useContext,useEffect} from "react";
import { useState } from "react";
import Manu from "..";
import { Context } from "../../../redux/context";
import { CHANGW_HEAD } from "../../../redux/const";
import './index.css'

interface SwitchProps {
    switchItem?:Array<string>
}


const Switch= ({switchItem}:SwitchProps):ReactElement => {
    const {state,dispatch} = useContext(Context);

    const print = (e:React.MouseEvent):void=>{ 
        const isSelected = e.currentTarget.id === state.display;
        if(!isSelected){
            dispatch({
                type:CHANGW_HEAD,
                data:e.currentTarget.id
            })
        }
    }
    return ( 
        <ul className="manu_switch">
            {switchItem&&switchItem.map<ReactElement>((item,index)=>{
                const pr = state.display.slice(0,4);
                const id = pr === "inde"?"index"+index:"info"+index;
                return (
                    <li key={state.display+index}>
                    <a href="#" className={state.display===id?'manu_switch_link selected':'manu_switch_link'} onClick={print} id={id}>
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