import { ReactElement } from "react";   
import './index.css'

interface DisplayProps {
    title:string
    children:ReactElement
}

const Display = ({title,children}:DisplayProps):ReactElement => {
    return ( 
        <section>
            <h2 className="Content_title">
                {title}
            </h2>
            {children}
        </section>
    );
}

export default Display;