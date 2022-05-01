import { Children, ReactElement } from "react";
import "./index.css";
import { useContext,useState,useRef} from "react";

import { Context } from "../../../redux/context";
import { ADD,DEL,ADD_LOG } from "../../../redux/const";
import { LogType } from "../../../redux/context";

interface DealInfoProps {
    expand:boolean
    children?:ReactElement
    fold?:(e:React.MouseEvent)=>void
}

const DealInfo= ({expand,children,fold}:DealInfoProps):ReactElement => {
    const {state,dispatch} = useContext(Context);

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
        <div>
            <div className={expand?"deal_panel":"deal_npanel"}>
                <form className="panel_con" onSubmit={handleFrom} target='#'>
                    <div className="first_line">
                        <div className="input_info">
                            <span className="name_tag">类别</span>
                            <select name="type">
                                <option value="in">收入</option>
                                <option value="out">支出</option>
                                <option value="else">其他</option>
                            </select>
                        </div>
                        <div className="input_info">
                            <span className="name_tag">日期</span>
                            <input type="date" defaultValue="2022-05-01" name='time'/>
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
                            <input type="number" name="value"/>
                        </div>
                        <div className="input_info">
                            <span className="name_tag">货币</span>
                            {/* <input type="text" name="unit"/> */}
                            <select name="unit">
                                <option value="CNY">CNY</option>
                                <option value="USD">USD</option>
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
}

export default DealInfo;