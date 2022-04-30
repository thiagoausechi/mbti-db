import "./styles.css";

import TYPES from "../../../lib/personalities";
import AVATARS from "../../../assets/avatars";
import Icon from "../../layout/Icon";

import { isDevEnv } from "../../../lib/dev_env";

const Card = ({ persona, handleOpenEditModal }) => 
{
    const type = TYPES[persona.type];
    const role = type.role;

    function openEditModal(e)
    {
        if (isDevEnv) handleOpenEditModal(persona);
    }

    return (
        <div className="card-item">
            <div className="card" style={{ background: role.secondary }} onClick={openEditModal}>
                <div className="card-icon">
                    <Icon icon={persona.icon} color={role.primary} />
                </div>

                <div className="card-persona">
                    <div className="card-title" style={{ color: role.primary }}>
                        {persona.name}
                    </div>
                    <div className="card-snippet">
                        {type.initials + (persona.identity ? ("-" + persona.identity) : "")}
                    </div>
                </div>

                <div className="card-lower-third">
                    <div className="card-type">
                        <div className="card-title" style={{ color: role.primary }}>
                            {type.name[persona.gender]}
                        </div>
                        <div className="card-snippet">
                            {type.role.name}
                        </div>
                    </div>

                    <div className="card-avatar">
                        <img src={AVATARS[`${type.initials.toLowerCase()}_${persona.gender}`]}
                            alt={`${type.initials} Avatar`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;