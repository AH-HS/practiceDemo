import React, { ReactElement ,useContext} from "react";
import "./index.css"
import logo from './img/logo.png'
import Switch from './Switch'
import Profile from './Profile'
import {Context} from "../../redux/context"
import {CHANGW_HEAD} from "../../redux/const"

interface ManuProps {
    children?:ReactElement
}

const Manu = ({children}:ManuProps):ReactElement => {
    const {state,dispatch} = useContext(Context);
    const displayItem = [["控制面板","预算"],["概览","交易记录","还有个啥来着","预算"]];
    const returnIndex=(e:React.MouseEvent)=>{
        dispatch({
            type:CHANGW_HEAD,
            data:"index0"
        })
    }
    // 判断是否是展示首页的标题（初始化）以后修改
    const pr = state.display.slice(0,4)==="inde";
    return ( 
        <header className="manu_container">
            <img src={logo} alt="logo" onClick={returnIndex}/>
            {children}
            <Switch switchItem={pr?displayItem[0]:displayItem[1]}/>
            <Profile />
        </header>
    );
}

export default Manu;