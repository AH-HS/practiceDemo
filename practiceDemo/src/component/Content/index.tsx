import { ReactElement  } from "react";
import './index.css'
import Display from "../Display";

const Content= ():ReactElement => {
    return ( 
        <div className="content">
            <Display title="钱包">
                <div>
                    图表
                </div>
            </Display>
            <Display title="概览">
                <div>
                    概览
                </div>
            </Display>
        </div>
    );
}
export default Content;