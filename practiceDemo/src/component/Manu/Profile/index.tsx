import { ReactElement } from "react";
import './index.css'
import p1 from '../img/ujio.jpg'
interface ProfileProps {
    children?:ReactElement
}

const Profile= ({}:ProfileProps) => {
    return ( 
        <div className="profile_container">
            <div className="imgwrap">
                <img src={p1} alt="" />
                <div className="profile_name">
                    <span>
                        我是人名至少180真的没有骗你
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Profile;