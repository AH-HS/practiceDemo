import React, { ReactElement } from "react";  
import "./index.css"
import { useContext,useState } from "react";
import { Context } from "../../../redux/context";
import DealInfo from "../DealInfo"

interface DealLogProps {
    
}

const DealLog = (props:DealLogProps):ReactElement => {
    const {state:data,dispatch} = useContext(Context);

    const [expand, setexpand] = useState(false)

    const select = (e:React.ChangeEvent,key:number)=>{
        const target = e.target as HTMLInputElement
        console.log(target.checked,key,'select');
    }
    const expandPanel = (e:React.MouseEvent)=>{
        e.preventDefault();
        setexpand(true)
    }
    const fold = ()=>{
        setexpand(false)
    }
    return ( 
        <div className="deal_container">
            {
                data.dealLog.map((item,index)=>(
                    <div className="log_item" key={"log_item"+index} >
                        <div>{item.time}</div>
                        <div className="log_item_wrap">
                            <div className="check_wrap">
                                <input type="checkbox" onChange={(e)=>{select(e,index)}}/>
                                <span>{item.type}</span>
                            </div>
                            <div onClick={expandPanel}>
                                <span>注释{item.type}</span>
                                <span>tag{item.tag}</span>
                            </div>
                            <div>
                                <div className="value pos">
                                    {item.value+" "+item.unit}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <DealInfo expand={expand} fold={fold}>
                <div className="second_line_wrap">
                    <div></div>
                    <div className="second_line_edit">
                        <button>保存更改</button>
                        <button>删除交易</button>
                        <button>取消</button>
                    </div>
                </div>
            </DealInfo>
        </div>
    );
}
export default DealLog;