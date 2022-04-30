import "./styles.css";

import { ReactComponent as BlankAvatar } from "../../../assets/blank_avatar.svg";

const Icon = ({ icon, color }) =>
{
    return icon ?
        <img src={icon} alt="Person Avatar"
            style={{
                width: "73px", height: "73px",
                borderRadius: "50%",
                border: `3.5px solid ${color || "#51596A"}`
            }}
        /> :
        <BlankAvatar fill={color || "#51596A"} />;
}

export default Icon;