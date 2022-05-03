import { ADD, DEL ,ADD_LOG,SAVE_CHANGE,DELETE_LOG} from "./const"
import { createContext } from "react"

// By default, the values they receive will be the the default values 
// you have specified when creating the contexts. However, by itself 
// this isn’t useful because the default values never change.

type ValueType={
    state:typeof InitValue
    dispatch:Function
}

export const Context = createContext({} as ValueType)

export type PlanType={
    name:string,
    count:number,
    unit:string,
    type:string,
    interval:string,
    startDate:string
}
export type LogType={
    type:string;
    time:string;
    value:number;
    unit:string;
    tag:string;
    note:string;
    keepOn:false;
    repeat:string;
    id:number;
    [propName:string]:any
}

export type ACTIONTYPE  = {
    type:string,
    data:string|LogType
}
type STATEINFO={
    count:number
    spend:number
    income:number
    change:number
    unit:string
}
type RETURNTYPE={
    planLog:Array<PlanType>
    dealLog:Array<LogType>
    total:STATEINFO
}

export const InitValue:RETURNTYPE = {
    // 预算信息
    planLog:[],
    //交易记录信息
    dealLog:[],
    //账户状态信息
    total:{
        count:0,
        spend:0,
        income:0,
        change:0,
        unit:"CNY"
    }
}



// React will pass the current state and the action to your 
// reducer function. Your reducer will calculate and return the 
// next state. React will store that next state, render your 
// component with it, and update the UI.

export const reducers = (state:RETURNTYPE,action:ACTIONTYPE):RETURNTYPE=>{
    const {type,data} = action;
    let newdealLog:Array<LogType> = []
    switch(type){
        case ADD:
            console.log('添加一条记录data是',action.data)
            return {...state}
        case DEL:
            console.log("删除一条记录data是",action.data)
            return {...state}
        case ADD_LOG:
            console.log("添加一条记录");
            newdealLog = [...state.dealLog];
            if(typeof data === "object"){
                const changeValue = Number(data.value);
                const spendValue = data.type==="out"?-1*changeValue:0;
                const incomeValue = data.type==="in"?changeValue:0;
                const newTotal = {
                    ...state.total,
                    count:state.total.count+spendValue+incomeValue,
                    spend:state.total.spend+spendValue,
                    income:state.total.income+incomeValue,
                    change:state.total.change+spendValue+incomeValue,
                }
                newdealLog.push(data)
                return {...state,total:newTotal,dealLog:newdealLog}
            }
            console.log("执行了")
            return {...state,dealLog:newdealLog}
        case SAVE_CHANGE:
            newdealLog = [...state.dealLog];
            const cgindex = (data as LogType).id
            newdealLog[cgindex] = data as LogType;
            return {...state,dealLog:newdealLog}
        case DELETE_LOG:
            newdealLog = [...state.dealLog];
            const delIndex = Number(data)
            newdealLog.splice(delIndex,1)
            return {...state,dealLog:newdealLog}
        default :
            return {...state}
    }
}