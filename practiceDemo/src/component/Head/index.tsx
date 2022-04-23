import { ReactElement } from 'react';
import { useState } from 'react';
import './index.css'

type HeadProps = {
    children?:Element|string;
}


function Head({children}:HeadProps):ReactElement{

    const [val, setVal] = useState<Number|null>(0)

    return (
        <div className='Head_head'>
            {/* {'你好'} */}
            {typeof children==="string"?children:''}
        </div>
    )
}
export default Head