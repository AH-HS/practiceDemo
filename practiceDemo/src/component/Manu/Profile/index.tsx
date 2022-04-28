import { ReactElement } from "react";
import { useState } from "react";
import './index.css'
import p1 from '../img/ujio.jpg'
// import Info from './Info'
interface ProfileProps {
    children?:ReactElement
}

const Profile= ({}:ProfileProps) => {
    const [isExpand, setIsExpand] = useState<boolean>(false);
    const onexpand = (e:React.MouseEvent):void=>{
        if(!isExpand){
            setIsExpand(!isExpand)
        }
    }
    const offexpand = (e:React.MouseEvent):void=>{
        if(isExpand){
            setIsExpand(!isExpand)
        }
    }
    return ( 
        <div className="Pcontainer">
            <div className="drapdown_wrap">
                <div>
                    <div className="imgwrap" onClick={onexpand}>
                            <img src={p1} alt="" />
                            <div className="profile_name">
                                <span>
                                    我是人名至少180真的没有骗你
                                </span>
                            </div>
                    </div>
                    <ul className={isExpand?"drap_list":"drap_nlist"}>
                        <li>
                            <a href="#">
                                <span>
                                    设置
                                </span>
                                </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    免费获得高级版权
                                </span>
                                </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    订阅
                                </span>
                                </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    支持
                                </span>
                                </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    注销
                                </span>
                                </a>
                            
                        </li>
                    </ul>
                </div>
                <div className={isExpand?"drap_bg":"drap_nbg"} onClick={offexpand}>

                </div>
            </div>
        </div>

    );
}

export default Profile;