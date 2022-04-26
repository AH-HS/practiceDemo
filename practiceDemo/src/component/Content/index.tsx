import { ReactElement  } from "react";
import './index.css'
import Display from "../Display";

const Content= ():ReactElement => {
    return ( 
        <div className="content">
            <Display title="钱包">
                <div className="qb">
                    <div className="qb_item">
                        <div className="qb_item_con">
                            1241321
                        </div>
                    </div>
                    <div className="qb_item">
                        <div className="qb_item_con">
                            1241321
                        </div>
                    </div>
                    <div className="qb_item">
                        <div className="qb_item_con">
                            1241321
                        </div>
                    </div>
                    <div className="qb_item">
                        <div className="qb_item_con">
                            1241321
                        </div>
                    </div>
                    <div className="qb_item">
                        <div className="qb_item_con">
                            1241321
                        </div>
                    </div>
                    <div className="qb_item">
                        <div className="qb_item_con">
                            1241321
                        </div>
                    </div>
                </div>
            </Display>
            <Display title="概览">
                <div className="gl">
                    <div className="datepicker">
                        <div>
                            这个是一个日期选择器
                        </div>
                        
                    </div>
                    <div className="gl_items">
                        <div className="gl_item">
                            <h4>总余额</h4>
                            <span>
                                0.00 CNY
                            </span>
                        </div>
                        <div className="gl_item">
                            <h4>总周期变化</h4>
                            <span>
                                0.00 CNY
                            </span>
                        </div>
                        <div className="gl_item">
                            <h4>总周期支出</h4>
                            <span>
                                0.00 CNY
                            </span>
                        </div>
                        <div className="gl_item">
                            <h4>总周期收入</h4>
                            <span>
                                0.00 CNY
                            </span>
                        </div>
                    </div>
                </div>

            </Display>
        </div>
    );
}
export default Content;