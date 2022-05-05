import React, { ReactElement  } from "react";
import './index.css'
import Display from "../Display";
import { Context } from "../../redux/context";
import { DELETE_LOG, SAVE_CHANGE } from "../../redux/const";
import { useContext,useState,useRef} from "react";
import DealLog from "./DealLog";
import DealInfo from "./DealInfo";
import "tailwindcss/tailwind.css"
import Plan from "./Plan"
import qb from "./img/qb.png"

interface ContentProps {
    display:string
}

const Content= ({display}:ContentProps):ReactElement => {
    const {state,dispatch} = useContext(Context);
    console.log(display);
    const clc = (e:React.MouseEvent):void=>{
        console.log('点击钱包');
        console.log('context',state);
    }
    const [selectedDeal, setselectedDeal] = useState(new Set<number>());

    const dateSelect = (e:React.ChangeEvent)=>{
        console.log(e.target);
    }
        //是否显示添加事件面板
    const [expand, setExpand] = useState(false);

    const expandPanel = (e:React.MouseEvent)=>{
        e.stopPropagation();
        if(!expand){
            setExpand(true);
        }
    }
    const foldPanel = (e:React.MouseEvent)=>{
        e.stopPropagation();
        if(expand){
            setExpand(false);
        }
    }
    const delLog=(e:React.MouseEvent)=>{
        dispatch({
            type:DELETE_LOG,
            data:selectedDeal
        })
    }
    const returnContent:(displayI:string)=>ReactElement=(display:string)=>{
        switch(display){
            case "0":
                return (
                    <div className={expand?"content z-20":"content"} >
                    <Display title="钱包">
                        <div className="qb">
                            <div className="qb_item" onClick={clc}>
                                <div className="qb_item_con">
                                    <img src={qb} alt="钱包" />
                                    <div className="count">
                                        <span>现金钱包</span>
                                        <span>现金</span>
                                        <span className="pos">1.00 CNY</span>
                                    </div>
                                </div>
                            </div>
                            <div className="qb_item">
                                <div className="create_bank">
                                    <button>添加新钱包</button>
                                    <button>连接银行帐户</button>
                                </div>
                            </div>
                        </div>
                    </Display>
                    <Display title="概览">
                        <div className={expand?"gl z-10":"gl"}>
                            <div className="datepicker">
                                <div className="datepicker_wrap">
                                    <div className="button_warp">
                                        <button onClick={expandPanel}>
                                            +添加交易
                                        </button>
                                    </div>
                                    <div className={selectedDeal.size>0?"handel_way":"handel_way hideen"} onClick={delLog}>
                                        <span>
                                            删除({selectedDeal.size})
                                        </span>
                                        
                                    </div>
                                    <div className={selectedDeal.size>0?"handel_way":"handel_way hideen"}>
                                        <span>
                                            编辑({selectedDeal.size})
                                        </span>
                                        
                                    </div>
                                    <div className="dateselect">
                                        <input type="date" defaultValue="2022-05-01" onChange={dateSelect} />
                                    </div>
                                    <DealInfo expand={expand} fold={foldPanel} selected={-1}>
                                        <div className="second_line">
                                            <div>
                                                <input type="checkbox" name="keepOn"/>
                                                打开以获得添加更多
                                            </div>
                                            <div className="repeat">
                                                <div className="input_info">
                                                    <span className="name_tag">重复（可选）</span>
                                                    <select name="repeat">
                                                        <option value="day">每日一次</option>
                                                        <option value="week">每周一次</option>
                                                        <option value="month">每月一次</option>
                                                    </select>
                                                    {/* <input type="text" name="repeat"/> */}
                                                </div>
                                                <button type="submit">
                                                    创建交易
                                                </button>
                                            </div>
                                        </div>
                                    </DealInfo>
                                </div>
                            </div>
                            <div className="gl_items">
                                <div className="gl_item_wrap">
                                    <div className="gl_item">
                                        <h4>总余额</h4>
                                        <span className={state.total.count>=0?"pos":"neg"}>
                                            {state.total.count.toFixed(2)+" "+state.total.unit}
                                        </span>
                                    </div>
                                </div>
                                <div className="gl_item_wrap">
                                    <div className="gl_item">
                                        <h4>总周期变化</h4>
                                        <span className={state.total.change>=0?"pos":"neg"}>
                                        {state.total.change.toFixed(2)+" "+state.total.unit}
                                        </span>
                                    </div>
                                </div>
                                <div className="gl_item_wrap">
                                    <div className="gl_item">
                                        <h4>总周期支出</h4>
                                        <span className="neg">
                                        {state.total.spend.toFixed(2)+" "+state.total.unit}
                                        </span>
                                    </div>
                                </div>
                                <div className="gl_item_wrap">
                                    <div className="gl_item">
                                        <h4>总周期收入</h4>
                                        <span className={state.total.income>=0?"pos":"neg"}>
                                        {state.total.income.toFixed(2)+" "+state.total.unit}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Display>
                    <DealLog setSelectDeal={setselectedDeal}/>
                </div>
                )
            case "1":
                return (
                    <div className={expand?"content z-20":"content"} >
                    <Display title="预算">
                        <Plan>
                            <div className="plan_wrap">
                                预算
                            </div>
                        </Plan>
                    </Display>
                    </div>
                )
            default:
                return (
                    <div>
                        "没有内容"
                    </div>
                )
        }
    }
    return ( 
        returnContent(display)
    );
}
export default Content;