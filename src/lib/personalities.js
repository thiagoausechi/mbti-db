import { ANALYSTS, DIPLOMATS, SENTINELS, EXPLORERS } from "./roles";

/*
    mind: i - e
    energy: s - n
    nature: f - t
    tactics: p - j
    identity: a - t
*/

export function getTypeOptions(type)
{
    const chars = Array.from(type);
    return { mind: chars[0], energy: chars[1], nature: chars[2], tactics: chars[3] };
}

export function isValidType(type)
{
    return TYPES.hasOwnProperty(type);
}

const TYPES =
{
    /* --------------------- ANALYSTS --------------------- */
    INTJ:
    {
        initials: "INTJ",
        name:
        {
            male: "Arquiteto",
            female: "Arquiteta"
        },
        role: ANALYSTS,
        snippet: "Pensadores criativos e estratégicos, com um plano para tudo."
    },

    INTP:
    {
        initials: "INTP",
        name:
        {
            male: "Lógico",
            female: "Lógico"
        },
        role: ANALYSTS,
        snippet: "Criadores inovadores com uma sede insaciável por conhecimento."
    },

    ENTJ:
    {
        initials: "ENTJ",
        name:
        {
            male: "Comandante",
            female: "Comandanta"
        },
        role: ANALYSTS,
        snippet: "Líderes ousados, criativos e enérgicos, sempre dando um jeito em tudo."
    },

    ENTP:
    {
        initials: "ENTP",
        name:
        {
            male: "Inovador",
            female: "Inovadora"
        },
        role: ANALYSTS,
        snippet: "Pensadores espertos e curiosos que não resistem um desafio intelectual."
    },

    /* --------------------- DIPLOMATS --------------------- */
    INFJ:
    {
        initials: "INFJ",
        name:
        {
            male: "Advogado",
            female: "Advogada"
        },
        role: DIPLOMATS,
        snippet: "Idealistas quietos e místicos, porém muito inspiradores e incansáveis."
    },

    INFP:
    {
        initials: "INFP",
        name:
        {
            male: "Mediador",
            female: "Mediadora"
        },
        role: DIPLOMATS,
        snippet: "Pessoas poéticas, bondosas e altruístas, sempre prontas para ajudar uma boa causa."
    },

    ENFJ:
    {
        initials: "ENFJ",
        name:
        {
            male: "Protagonista",
            female: "Protagonista"
        },
        role: DIPLOMATS,
        snippet: "Líderes inspiradores e carismáticos, que conseguem hipnotizar sua audiência."
    },

    ENFP:
    {
        initials: "ENFP",
        name:
        {
            male: "Ativista",
            female: "Ativista"
        },
        role: DIPLOMATS,
        snippet: "Espíritos livres, criativos, sociáveis e entusiasmáticos, sempre encontrando uma razão para sorrir."
    },

    /* --------------------- SENTINELS --------------------- */
    ISTJ:
    {
        initials: "ISTJ",
        name:
        {
            male: "Logístico",
            female: "Logístico"
        },
        role: SENTINELS,
        snippet: "Indivíduos práticos e extremamente confiáveis."
    },

    ISFJ:
    {
        initials: "ISFJ",
        name:
        {
            male: "Defensor",
            female: "Defensora"
        },
        role: SENTINELS,
        snippet: "Protetores dedicados e acolhedores, estão sempre prontos para defender seus amados."
    },

    ESTJ:
    {
        initials: "ESTJ",
        name:
        {
            male: "Executivo",
            female: "Executiva"
        },
        role: SENTINELS,
        snippet: "Administradores excelentes, inigualáveis em gerenciar coisas - ou pessoas."
    },

    ESFJ:
    {
        initials: "ESFJ",
        name:
        {
            male: "Cônsul",
            female: "Cônsul"
        },
        role: SENTINELS,
        snippet: "Pessoas extraordinariamente atenciosas, sociais e populares, sempre prontas para ajudar."
    },

    /* --------------------- EXPLORERS --------------------- */
    ISTP:
    {
        initials: "ISTP",
        name:
        {
            male: "Virtuoso",
            female: "Virtuosa"
        },
        role: EXPLORERS,
        snippet: "Experimentadores práticos e ousados, mestres em todos tipos de ferramentas."
    },

    ISFP:
    {
        initials: "ISFP",
        name:
        {
            male: "Aventureiro",
            female: "Aventureira"
        },
        role: EXPLORERS,
        snippet: "Artistas flexíveis e charmosos, sempre prontos para explorar e experimentar algo novo."
    },

    ESTP:
    {
        initials: "ESTP",
        name:
        {
            male: "Empresário",
            female: "Empresária"
        },
        role: EXPLORERS,
        snippet: "Pessoas inteligentes, enérgicas e perceptivas, que realmente gostam de arriscar."
    },

    ESFP:
    {
        initials: "ESFP",
        name:
        {
            male: "Animador",
            female: "Animadora"
        },
        role: EXPLORERS,
        snippet: "Animadores entusiasmados, enérgicos e espontâneos - a vida nunca fica entediante perto deles."
    }
}

export default TYPES;