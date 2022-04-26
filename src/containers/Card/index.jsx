import "./styles.css";
import { getPersonality } from "../../global/personalities";

import { ReactComponent as BlankAvatar } from "../../assets/blank_avatar.svg";

const Card = ({ persona }) => 
{
    const type = getPersonality(persona.personality);
    const role = type.role;

    return (
        <div className="card" style={{ background: role.secondary }}>

            <div className="icon">
                <BlankAvatar fill={role.primary} />
            </div>



            <div className="persona">
                <div className="card-title" style={{ color: role.primary }}>
                    {persona.name}
                </div>
                <div className="card-snippet">
                    {type.initials + (persona.personality.identity ? ("-" + persona.personality.identity.toUpperCase()) : '')}
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



            <div className="avatar"></div>

        </div>
    );
}

function getPersonalityAsString(p)
{
    let result = "";
    if (!p.identity) result = (p.mind + p.energy + p.nature + p.tactics);
    else result = (p.mind + p.energy + p.nature + p.tactics + "-" + p.identity);

    return result.toUpperCase();
}


export default Card;