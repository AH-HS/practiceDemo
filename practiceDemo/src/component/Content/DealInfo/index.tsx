import { forwardRef, ReactElement, Ref } from "react";
import "./index.css";
import { useContext,useState} from "react";

import { Context } from "../../../redux/context";
import { ADD,DEL,ADD_LOG } from "../../../redux/const";
import { LogType} from "../../../redux/context";

interface DealInfoProps {
    expand:boolean
    children?:ReactElement
    selected:number
    ref:HTMLFormElement
    fold?:(e:React.MouseEvent)=>void
}

const DealInfo= forwardRef<HTMLFormElement,DealInfoProps>(({expand,children,selected,fold}:DealInfoProps,ref):ReactElement  => {
    const {state,dispatch}= useContext(Context);
    const displayData = state.dealLog.length>selected && selected>=0?state.dealLog[selected]:"";
    
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
            "repeat":'',
            "id":state.dealLog.length
        };
        for (const item of formdata.entries()) {
            // ts报错
            newLog[item[0] as keyof LogType] = item[1];
        }
        dispatch({
            type:ADD_LOG,
            data: newLog
        })
        from.reset()
    }
    return ( 
        <div>
            <div className={expand?"deal_panel":"deal_npanel"}>
                <form className="panel_con" onSubmit={handleFrom} target='#' ref={ref}>
                    <div className="first_line">
                        <div className="input_info">
                            <span className="name_tag">类别</span>
                            <select name="type">
                                <option value="in" selected={(displayData as LogType).type === "in"}>收入</option>
                                <option value="out" selected={(displayData as LogType).type === "out"}>支出</option>
                                <option value="else" selected={(displayData as LogType).type ===  "else"}>其他</option>
                            </select>
                        </div>
                        <div className="input_info">
                            <span className="name_tag">日期</span>
                            <input type="date" defaultValue={(displayData as LogType).time||""} name='time'/>
                        </div>
                        <div className="input_info">
                            <span className="name_tag">注释（可选）</span>
                            <input type="text" name="note" defaultValue={(displayData as LogType).note||""}/>
                        </div>
                        <div className="input_info">
                            <span className="name_tag">标签（可选）</span>
                            <input type="text" name="tag" defaultValue={(displayData as LogType).tag||""}/>
                        </div>
                        <div className="input_info">
                            <span className="name_tag">金额</span>
                            <input type="number" name="value" defaultValue={(displayData as LogType).value||""}/>
                        </div>
                        <div className="input_info">
                            <span className="name_tag">货币</span>
                            {/* <input type="text" name="unit"/> */}
                            <select name="unit">
                                <option value="CNY" selected={(displayData as LogType).unit==="CNY"}>CNY</option>
                                <option value="USD" selected={(displayData as LogType).unit==="USD"}>USD</option>
                            </select>
                        </div>
                    </div>
                        {/* <div> */}
                        {children}
                        {/* </div> */}
                        
                </form>
            </div>
                <div className={expand?"panel_bg":"panel_nbg"} onClick={fold} />
        </div>
        
    );
})

export default DealInfo;