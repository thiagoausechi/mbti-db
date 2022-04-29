import "./styles.css";

import TYPES from "../../../global/personalities";
import Icon from "../../layout/Icon";

const Card = ({ persona }) => 
{
    const type = TYPES[persona.type];
    const role = type.role;

    return (
        <div className="card" style={{ background: role.secondary }}>

            <div className="icon">
                <Icon icon={persona.icon} color={role.primary} />
            </div>

            <div className="persona">
                <div className="card-title" style={{ color: role.primary }}>
                    {persona.name}
                </div>
                <div className="card-snippet">
                    {type.initials + (persona.identity ? ("-" + persona.identity.toUpperCase()) : '')}
                </div>
            </div>



            <div className="type">
                <div className="card-title" style={{ color: role.primary }}>
                    {type.name[persona.gender]}
                </div>
                <div className="card-snippet">
                    {type.role.name}
                </div>
            </div>



            <div className="avatar">
                <img src={`/assets/types/${type.initials.toLowerCase()}_${persona.gender}.svg`} />
            </div>

        </div>
    );
}

export default Card;