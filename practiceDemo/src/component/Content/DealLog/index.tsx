import { ReactElement } from "react";  
import "./index.css"
import { useContext,useState } from "react";
import { Context } from "../../../redux/context";

interface DealLogProps {
    
}

const DealLog = (props:DealLogProps):ReactElement => {
    const {state:data,dispatch} = useContext(Context);
    return ( 
        <div className="deal_container">
            {
                data.dealLog.map((item,index)=>(
                    <div className="log_item" key={"log_item"+index}>
                        <div>{item.time}</div>
                        <div className="log_item_wrap">
                            <div>
                                <input type="checkbox" />
                                <span>{item.type}</span>
                            </div>
                            <div>
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
        </div>
    );
}
export default DealLog;