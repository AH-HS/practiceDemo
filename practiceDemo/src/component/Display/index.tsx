import { ReactElement } from "react";   

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