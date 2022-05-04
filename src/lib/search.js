import TYPES from "../lib/personalities";

export function filter(e, s)
{
    return Object.keys(ENGINES).map((k) => ENGINES[k](e, normalize(s))).includes(true);
}

const ENGINES =
{
    // Pesquisa Tipo da maneira complexa, ex.: >IxTJ ou >ExxP ou >xNxJ
    byComplexType: (e, s) =>
    {
        if (s.charAt(0) === ">" &&
            (new RegExp(`(${s.replace(">", "").replaceAll("x", ".")})+`)
                .exec(e.type.toLowerCase()))) return true;
    },

    // Lista todos membros da Agência ao usar Arsmtrong ou AMST na pesquisa
    byKeyword: (e, s) =>
    {
        if (("armstrong".includes(s) || "amst".includes(s)) &&
            (
                e.name === "Thiago Ausechi" ||
                e.name === "Thiago Basílio" ||
                e.name === "Ana Muraoka" ||
                e.name === "Mari Alves" ||
                e.name === "Lorena Garcia"
            )) return true;
    },

    // Pesquisa utilizando as palavras-chaves "Assertivo" e "Turbulento/Cauteloso"
    byIdentityKeyword: (e, s) =>
    {
        if (("turbulento".includes(s) || "cauteloso".includes(s) || "-t".includes(s)) && e.identity === "T") return true;
        if (("assertivo".includes(s) || "-a".includes(s)) && e.identity === "A") return true;
        if ("!-".includes(s) && !e.identity) return true;
    },

    // Pesquisa Nome da Pessoa ou Tipo (simplificado, ex: ESFP)
    byNameOrType: (e, s) =>
    {
        if (normalize(e.name).includes(s) ||
            e.type.toLowerCase().includes(s)) return true;
    },

    // Pesquisa Nome do Tipo (ex. Arquiteto), ou Nome do Grupo (ex. Analistas)
    byTypeNameOrRole: (e, s) =>
    {
        if (normalize(TYPES[e.type].name.male).includes(s) ||
            normalize(TYPES[e.type].name.female).includes(s) ||
            normalize(TYPES[e.type].role.name).includes(s)) return true;
    }
}

export const normalize = (str) => str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");