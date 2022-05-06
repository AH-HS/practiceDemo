import { ADD, DEL ,ADD_LOG,SAVE_CHANGE,DELETE_LOG,CHANGW_HEAD} from "./const"
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
    data:string|LogType|Set<number>|string
}
type STATEINFO={
    count:number
    spend:number
    income:number
    change:number
    unit:string
}
type RETURNTYPE={
    display:string
    planLog:Array<PlanType>
    dealLog:Array<LogType>
    total:STATEINFO
}

export const InitValue:RETURNTYPE = {
    //展示信息
    display:"index0",
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
    let newdealLog:Array<LogType> = [];
    let newTotal = {} as STATEINFO;
    const countTotalState = (dealLog:Array<LogType>):STATEINFO=>{
        return  dealLog.reduce((p,c):STATEINFO=>{
            switch (c.type) {
                case "in":
                    p.count+=Number(c.value);
                    p.income+=Number(c.value);
                    p.change+=Number(c.value)
                    return p
                case "out":
                    p.count-=Number(c.value);
                    p.spend+=Number(c.value);
                    p.change-=Number(c.value)
                    return p
                default:
                    return p
            }
        },{...state.total,
            count:0,
            spend:0,
            income:0,
            change:0,
            unit:"CNY"} as STATEINFO
            )
    };
    switch(type){
        case ADD:
            console.log('添加一条记录data是',action.data)
            return {...state}
        case CHANGW_HEAD:
            return {...state,display:data as string}
        case ADD_LOG:
            console.log("添加一条记录");
            newdealLog = [...state.dealLog];
            if(typeof data === "object"){
                newdealLog.push(data as LogType)
                newTotal = countTotalState(newdealLog);
                return {...state,total:newTotal,dealLog:newdealLog}
            }
            console.log("执行了添加记录")
            return {...state,dealLog:newdealLog}
        case SAVE_CHANGE:
            newdealLog = [...state.dealLog];
            const cgindex = newdealLog.findIndex((item)=>(data as LogType).id===item.id) 
            newdealLog[cgindex] = data as LogType;
            newTotal = countTotalState(newdealLog);
            return {...state,total:newTotal ,dealLog:newdealLog}
        case DELETE_LOG:
            newdealLog = [...state.dealLog];
            const delIndex = Number(data);
            if(data instanceof Set){
                newdealLog =  newdealLog.filter((item)=>{
                    return !data.has(item.id)
                })
            }else{
                newdealLog.splice(delIndex,1);
            }
            newTotal = countTotalState(newdealLog);
            return {...state,total:newTotal ,dealLog:newdealLog}
        default :
            return {...state}
    }
}