import "./styles.css";

import Card from "../Card";
import LoadingCard from "../LoadingCard";
import { filter } from "../../../lib/search";

function PersonasList({ personalities, handleOpenEditModal, search })
{
    const filteredData = personalities.filter((e) =>
    {
        if (!search || search === '') return e;
        return filter(e, search) ? e : null;
    });

    return (
        <div className="personas">
            {(personalities.length > 0) ? filteredData.map((persona) =>
                <Card key={persona.id} persona={persona} handleOpenEditModal={handleOpenEditModal} />) :
                [...Array(50).keys()].map((n) => <LoadingCard key={n} />)
            }
        </div>
    );
}

export default PersonasList;