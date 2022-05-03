import { ReactElement } from "react";
import "./index.css"

interface PlanProps {
    children:ReactElement
}

const Plan= ({children}:PlanProps) => {
    return ( 
        <div className="plan">
            <div className="plan_content">
                <div className="plan_content_wrap">
                    <h3>dsa</h3>
                    <span>全部钱包</span>
                    <span>剩余111 CNY</span>
                    <span>321 CNY起</span>
                    <div>
                        <div className="bar_bg">
                            <div className="bar" style={{width:"60%"}}>
                                67.0
                            </div>
                        </div>
                        <div className="date_range">
                            <span>4月 29, 2022</span>
                            <span>5月 28, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Plan;