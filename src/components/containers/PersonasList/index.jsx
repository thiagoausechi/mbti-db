import "./styles.css";

import Card from "../Card";
import LoadingCard from "../LoadingCard";

import TYPES from "../../../lib/personalities";

function PersonasList({ personalities, handleOpenEditModal, search })
{
    const normalize = (str) => str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

    const filteredData = personalities.filter((e) =>
    {
        if (!search || search === '') return e;

        const s = normalize(search);

        // Pesquisa Tipo da maneira complexa, ex.: >IxTJ ou >ExxP ou >xNxJ
        if (s.charAt(0) === ">" &&
            (new RegExp(`(${s.replace(">", "").replaceAll("x", ".")})+`)
                .exec(e.type.toLowerCase()))) return e;

        // Lista todos membros da Agência ao usar Arsmtrong ou AMST na pesquisa
        if (("armstrong".includes(s) || "amst".includes(s)) &&
            (
                e.name === "Thiago Ausechi" ||
                e.name === "Thiago Basílio" ||
                e.name === "Ana Muraoka" ||
                e.name === "Mari Alves" ||
                e.name === "Lorena Garcia"
            )) return e;

        // Pesquisa Nome da Pessoa ou Tipo (simplificado, ex: ESFP)
        if (normalize(e.name).includes(s) ||
            e.type.toLowerCase().includes(s)) return e;

        // Pesquisa Nome do Tipo (ex. Arquiteto), ou Nome do Grupo (ex. Analistas)
        if (normalize(TYPES[e.type].name.male).includes(s) ||
            normalize(TYPES[e.type].name.female).includes(s) ||
            normalize(TYPES[e.type].role.name).includes(s)) return e;

        return null;
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