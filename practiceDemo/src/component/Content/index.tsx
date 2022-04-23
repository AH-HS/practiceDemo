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
                <div>
                    概览
                </div>
            </Display>
        </div>
    );
}
export default Content;