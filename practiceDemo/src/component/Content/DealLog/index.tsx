import React, { ReactElement } from "react";  
import "./index.css"
import { useContext,useState,useRef} from "react";
import { Context ,LogType} from "../../../redux/context";
import {SAVE_CHANGE,DELETE_LOG} from "../../../redux/const"
import DealInfo from "../DealInfo"

interface DealLogProps {
    setSelectDeal:(set:Set<number>)=>void
}

const DealLog = ({setSelectDeal}:DealLogProps):ReactElement => {
    const {state:data,dispatch} = useContext(Context);
    const [selected, setSelected] = useState<number>(-1);
    const [expand, setexpand] = useState(false);
    const [selectedItems, setselectedItems] = useState(new Set<number>());
    const ref = useRef<HTMLFormElement>(null)

    const select = (e:React.ChangeEvent,key:number)=>{
        const target = e.target as HTMLInputElement;
        const newSet = new Set(selectedItems);
        if(target.checked){
            newSet.add(key)
        }else{
            newSet.delete(key)
        }
        setselectedItems(newSet);
        setSelectDeal(newSet)
    }
    // 展开交易输入信息 并设置当前选中项
    const expandPanel = (e:React.MouseEvent,index:number)=>{
        e.preventDefault();
        setexpand(true);
        setSelected(index)
    }
    const fold = ()=>{
        setexpand(false)
    }
    const saveChange = (e:React.MouseEvent)=>{
        e.preventDefault();
        // console.log(ref.current);
        const from = ref.current as HTMLFormElement
        const formdata = new FormData(from); 
        //此处应Logtype类型
        const newLog:LogType={
            "type":'',
            "time":'',
            "value":0,
            "unit":'',
            "tag":'',
            "note":'',
            "keepOn":false,
            "repeat":'',
            "id":selected
        };
        for (const item of formdata.entries()) {
            // ts报错
            newLog[item[0]] = item[1];
        }
        dispatch({
            type:SAVE_CHANGE,
            data: newLog
        })
        from.reset()
    }
    const deleteLog = (e:React.MouseEvent)=>{
        e.preventDefault();
        if(data.dealLog.length===1){
            setexpand(false)
        }
        dispatch({
            type:DELETE_LOG,
            data:selected+""
        })
        
    }
    const cancel = (e:React.MouseEvent)=>{
        e.preventDefault();
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
                            <div onClick={(e)=>expandPanel(e,index)}>
                                <span>注释{item.type}</span>
                                <span>tag{item.tag}</span>
                            </div>
                            <div>
                                <div className={item.type==="out"?"value neg":"value pos"}>
                                    {(item.type==="out"?"-":"")+item.value+" "+item.unit}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <DealInfo expand={expand} fold={fold} selected={selected} ref={ref}>
                <div className="second_line_wrap">
                    <div></div>
                    <div className="second_line_edit">
                        <button onClick={saveChange}>保存更改</button>
                        <button onClick={deleteLog}>删除交易</button>
                        <button onClick={cancel}>取消</button>
                    </div>
                </div>
            </DealInfo>
        </div>
    );
}
export default DealLog;