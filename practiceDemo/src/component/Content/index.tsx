import React, { ReactElement  } from "react";
import './index.css'
import Display from "../Display";
import { Context } from "../../redux/context";
import { useContext,useState,useRef} from "react";
import { ADD,DEL,ADD_LOG } from "../../redux/const";
import { LogType } from "../../redux/context";
import DealLog from "./DealLog";

const Content= ():ReactElement => {
    const {state,dispatch} = useContext(Context);
    const clc = (e:React.MouseEvent):void=>{
        console.log('点击钱包');
        console.log('context',state);
    }

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
    const form = useRef<HTMLDivElement>()
    const handleFrom = (e:React.FormEvent)=>{
        e.preventDefault()
        //下面不用as报错
        const from = e.target as HTMLFormElement
        const formdata = new FormData(from); 
        //此处应Logtype类型
        const newLog:any={
            "type":'',
            "time":'',
            "value":0,
            "unit":'',
            "tag":'',
            "note":'',
            "keepOn":false,
            "repeat":''
        };
        for (const item of formdata.entries()) {
            console.log(item);
            // ts报错
            newLog[item[0] as keyof LogType] = item[1];
        }
        dispatch({
            type:ADD_LOG,
            data: newLog
        })
        //
        from.reset()
    }
    return ( 
        <div className="content">
            <Display title="钱包">
                <div className="qb">
                    <div className="qb_item" onClick={clc}>
                        <div className="qb_item_con">
                            <img src="#" alt=" " />
                            <div className="count">
                                <span>现金钱包</span>
                                <span>现金</span>
                                <span>1.00 CNY</span>
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
                <div className="gl">
                    <div className="datepicker">
                        <div className="datepicker_wrap">
                            <button onClick={expandPanel}>
                                +添加交易
                            </button>
                            <div className="dateselect">
                                <input type="date" onChange={dateSelect} />
                            </div>
                            <div className={expand?"deal_panel":"deal_npanel"}>
                                <form className="panel_con" onSubmit={handleFrom} target='#'>
                                    <div className="first_line">
                                        <div className="input_info">
                                            <span className="name_tag">类别</span>
                                            <input type="text" name="type"/>
                                        </div>
                                        <div className="input_info">
                                            <span className="name_tag">日期</span>
                                            <input type="date" defaultValue="2022/04/30" name='time'/>
                                        </div>
                                        <div className="input_info">
                                            <span className="name_tag">注释（可选）</span>
                                            <input type="text" name="note"/>
                                        </div>
                                        <div className="input_info">
                                            <span className="name_tag">标签（可选）</span>
                                            <input type="text" name="tag"/>
                                        </div>
                                        <div className="input_info">
                                            <span className="name_tag">金额</span>
                                            <input type="text" name="value"/>
                                        </div>
                                        <div className="input_info">
                                            <span className="name_tag">货币</span>
                                            <input type="text" name="unit"/>
                                        </div>
                                    </div>
                                    <div className="second_line">
                                        <div>
                                            <input type="checkbox" name="keepOn"/>
                                            打开以获得添加更多
                                        </div>
                                        <div className="repeat">
                                            <div className="input_info">
                                                <span className="name_tag">重复（可选）</span>
                                                <input type="text" name="repeat"/>
                                            </div>
                                            <button type="submit">
                                                创建交易
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
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
                    <div className={expand?"panel_bg":"panel_nbg"} onClick={foldPanel} />
                </div>
            </Display>
            <DealLog />
        </div>
    );
}
export default Content;